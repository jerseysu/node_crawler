const fs = require('fs');
const path = require('path');
const CircularJSON = require('circular-json');

// return mock ibonAPI response of '台北市'
const ibonInfoStr = fs.readFileSync(path.resolve(__dirname, 'ibonInfo.txt'));
const ibonInfoObj = CircularJSON.parse(ibonInfoStr);

module.exports = ibonInfoObj;
