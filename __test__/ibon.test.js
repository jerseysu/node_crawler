const { parseStoreInfo, ibonAPI } = require('../lib/ibon');
const mockAxios = require("axios")
const ibonAPIResult = require("../__fixtures__/ibonAPIResult")

test('Response with expected key - code, storeName, address', async () => {
  mockAxios.post.mockImplementationOnce(() => Promise.resolve(ibonAPIResult));
  const ibonInfo = await ibonAPI('台北市')
  const storeInfo = await parseStoreInfo(ibonInfo);
  expect(storeInfo[1]).toHaveProperty('code', 'storeName', 'address')
})