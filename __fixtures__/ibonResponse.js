const fs = require('fs');
const path = require('path');

const dataString = fs.readFileSync(path.resolve(__dirname, './ibonInfo.txt'));
// const dataObj = JSON.parse(dataString);

module.exports = dataString;
