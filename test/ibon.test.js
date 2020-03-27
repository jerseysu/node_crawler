const ibon = require('../lib/ibon');

test('Response with expected key - code, storeName, address', () => {
    return ibon('台北市').then((res) => {
        expect(res[1]).toHaveProperty('code', 'storeName', 'address');
    });
})