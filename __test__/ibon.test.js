const { parseStoreInfo, ibonAPI } = require('../lib/ibon');

test('Response with expected key - code, storeName, address', async () => {
  const ibInfo = await ibonAPI('台北市');
  const storeInfo = await parseStoreInfo(ibInfo);
  expect(storeInfo[1]).toHaveProperty('code', 'storeName', 'address')
})