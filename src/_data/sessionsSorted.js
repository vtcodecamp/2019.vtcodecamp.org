let sessions  = require('./sessions.json');

module.exports = function() { 
    let sessionArray = Object.values(sessions);
    let sessionsSorted = sessionArray.sort((a, b) => a.title.localeCompare(b.title));
    
    return sessionsSorted;
}
