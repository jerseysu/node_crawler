// const mockAxios = require('../__mocks__/axios')
// const ibResponse = require('../__fixtures__/ibonResponse')
const { parseStoreInfo, ibonAPI, getStoreInfo } = require('../lib/ibon');

getStoreInfo('台北市').then(console.log)
// ibonAPI().then(console.log)

// jest.mock('axios');


test('Response with expected key - code, storeName, address', async () => {
  getStoreInfo('台北市').then(console.log)
  // mockAxios.post.mockResolvedValue(ibResponse);
  
  // const ibInfo = await ibonAPI('台北市');
  // const storeInfo = await getStoreInfo('台北市');
  // console.log(storeInfo)

  // console.log(storeInfo)
//   // console.log(axios.post())
//   return mockAxios.post().then(res => {
//     console.log(res)
//   })
//   // console.log((await ibon('台北市'))[0])
//   // expect(await axios.post()).toHaveProperty('code', 'storeName', 'address')
//   // console.log(await mockAxios.get)

//   // expect(mockAxios.post).toHaveProperty('code', 'storeName', 'address');

//     // console.log(res)
//     // const res = await ibon('台北市');
//     // expect(res[1]).toHaveProperty('code', 'storeName', 'address')
})