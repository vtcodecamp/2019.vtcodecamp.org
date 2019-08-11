
const path = require('path');
const fs = require('fs');
//const fetch = require('node-fetch');

module.exports = fetchData();

async function fetchData()
{
    let speakers = ["New", "Fresh", "Speakers"]

    writeDataFile('speakers.json', speakers);
}


function writeDataFile(filename, object) {

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
