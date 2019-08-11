const path = require('path');
const fs = require('fs');
const fetch = require('node-fetch');


module.exports = fetchData();

async function fetchData()
{
    const response = await fetch('https://sessionize.com/api/v2/rffu883w/view/all');
    const sessionize = await response.json();

    const [levels, formats] = parseCategories(sessionize.categories);
    const speakers = buildSpeakers(sessionize.speakers);
    const sessions = buildSessions(sessionize.sessions, levels, formats);

    writeDataFile('sessions.json', sessions);
    writeDataFile('speakers.json', speakers);
    writeDataFile('rooms.json', sessionize.rooms);
}


function parseCategories(categories) {
    var levels = {};
    var formats = {};

    for (let category of categories) {
        if (category.title == 'Level') {
            for (level of category.items) {
                levels[level.id] = level;
            }
        } else if (category.title == 'Session format') {
            for (format of category.items) {
                formats[format.id] = format;
            }
        }
    }

    return [levels, formats]
}

function buildSpeakers(speakersData) {
    for (let speaker of speakersData) {
        for (let link of speaker.links) {
            link.name = link.title;
            switch (link.linkType) {
                case 'Twitter':
                    link.name = '@' + link.url.replace(/https*:\/\/(www\.)*twitter.com\//gi, '')
                                              .replace(/\/?(\?.*)?$/, '');
                    break;
                case 'Blog':
                case 'Company_Website':
                    link.name = link.url.replace(/https*:\/\/(www\.)*/gi, '')
                                        .replace(/\/?(\?.*)?$/, '')
                                        .replace(/\/.*/, '');
                    break;       
            }
        }
    }

    return speakersData
}


function buildSessions(sessionsData, levels, formats) {
    for (let session of sessionsData) {
        for (let categoryId of session.categoryItems) {
            if (categoryId in levels) {
                session.level = levels[categoryId].name;
            } else if (categoryId in formats) {
                session.format = formats[categoryId].name;
            }
        }
    }
    return sessionsData;
}


function writeDataFile(filename, array) {
    let object = {};

    for (let item of array) {
        object[item.id] = item;
    }

    let projectRoot = path.normalize(__dirname);

    let file = `${projectRoot}/src/_data/${filename}`;
    let content = JSON.stringify(object, null, 4);

    fs.writeFile(file, content, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log(`Sessionize data written to ${filename}`);
    });
}
