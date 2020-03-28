const { parseStoreInfo } = require('../lib/ibon');
const fs = require('fs');
const path = require('path');
const CircularJSON = require('circular-json');

test('Response with expected key - code, storeName, address', async () => {
  // mock '台北市' ibonAPI response
  const ibonInfoStr = fs.readFileSync(path.resolve(__dirname, 'ibonInfo.txt'));

  const ibonInfoObj = CircularJSON.parse(ibonInfoStr);
  const storeInfo = await parseStoreInfo(ibonInfoObj);
  expect(storeInfo[1]).toHaveProperty('code', 'storeName', 'address')
})