let sessions  = require('./sessions.json');

module.exports = function() { 
    let sessionArray = Object.values(sessions);
    let nonServiceSessions = sessionArray.filter((session) => !session.isServiceSession)
    let sessionsSorted = nonServiceSessions.sort((a, b) => a.title.localeCompare(b.title));
    
    return sessionsSorted;
}
