const ibon = require('../lib/ibon');

test('Response with expected key - code, storeName, address', async () => {
    const res = await ibon('台北市');
    expect(res[1]).toHaveProperty('code', 'storeName', 'address')
})