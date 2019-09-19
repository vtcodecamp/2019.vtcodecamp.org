
module.exports = buildSchedule()

function buildSchedule()
{
    let timeSlots = getTimeSlots();
    // return timeSlots; // (for debugging)


    let speakers  = require('./speakers.json');
    let rooms = require('./rooms.json');

    let scheduleTable = {
        head: [],
        body: [],
    };
    scheduleTable.head.push({ title: 'Time', type: 'timespan' });
    for (let room of Object.values(rooms)) {
        scheduleTable.head.push({
            title: room.name,
            type: 'track',
        })
    }
    for (let [timeCode, timeSlot] of Object.entries(timeSlots)) {
        
        let startTime = getTimeString(timeSlot.info.startsAt);
        let endTime = getTimeString(timeSlot.info.endsAt);
        let tableRow = [];
        tableRow.push({
            type: 'timespan',
            title: startTime + "- " + endTime,
            timeSlug: timeCode,
        })
        let rowSessions = timeSlot.sessionsByRoom;
        for (let session of Object.values(rowSessions)) {
            if (session.isPlenumSession) {
                type = 'plenumSession';
                title_link = false;
            } else if (session.id == false) {
                type = 'unscheduled';
                title_link = false;
            } else {
                type = 'session';
                title_link = `/2019/sessions/#${session.slug}`;
            }
            tableCell = {
                type: type,
                title: session.title,
                title_link: title_link,
                speakers: [],
            };
            for (let {id: id} of session.speakers) {
                let speaker = speakers[id];
                tableCell.speakers.push({
                    name: speaker.fullName,
                    link: `/2019/speakers/#${speaker.slug}`,
                });
            }
            tableRow.push(tableCell);
        }
        scheduleTable.body.push(tableRow);
    }
    return scheduleTable;
}

function getTimeSlots()
{
    let sessions = require('./sessions.json');
    let rooms = require('./rooms.json');
    
    let timeSlots = {};
    for (let session of Object.values(sessions)) {
        let timeCode = getTimeCode(session.startsAt);
        let roomId = session.roomId;
        if (!timeSlots[timeCode]) {
            timeSlots[timeCode] = {
                info: {
                    startsAt: session.startsAt,
                    endsAt: session.endsAt,
                },
                sessionsByRoom: {},
            };
        }
        timeSlots[timeCode].sessionsByRoom[roomId] = session;
    }

    /**
     * Add a blank entry for any missing rooms (unscheduled for given time period).
     */
    for (let [timeCode, timeSlot] of Object.entries(timeSlots)) {
        let sessionsByRoom = timeSlot.sessionsByRoom
        if (sessionsByRoom[8460].isPlenumSession) {
            continue; //skip plenum sessions since there are no other sessions scheduled during these times
        }
        for (let room of rooms) {
            if (!sessionsByRoom[room.id]) {
                sessionsByRoom[room.id] = { id: false, title: false, roomId: room.id, startsAt: timeCode, speakers: [] }
            }
        }
    }

    return timeSlots;
}

function getTimeString(timeString)
{
    let date = new Date(timeString);
    let time = date.toLocaleTimeString('en-US', {
        hour12: true,
        hour: 'numeric',
        minute: 'numeric',
    })
    time = time.replace(' AM', 'am').replace(' PM', 'pm');
    return time;
}

function getTimeCode(timeString)
{
    let date = new Date(timeString);
    let time = date.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
    });
    let id = time.replace(':','');
    return parseInt(id);
}
