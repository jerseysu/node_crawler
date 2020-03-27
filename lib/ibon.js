const request = require('request');
const cheerio = require("cheerio");

const getStoreInfo = function (city) {
    return new Promise((resolved) => {
        const options = {
            'method': 'POST',
            'url': 'https://www.ibon.com.tw/retail_inquiry_ajax.aspx',
            'headers': {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'Cookie': '_ga=GA1.3.927991393.1585149670; _gid=GA1.3.688677455.1585149670'
            },
            formData: {
                'strTargetField': 'COUNTY',
                'strKeyWords': city
            }
        };
        request(options, function (error, response) {
            if (error || !response.body) {
                return;
            }

            const $ = cheerio.load(response.body);
            const store = $('table tr').map((index, obj) => {
                return {
                    code: $(obj).find('td').eq(0).text().trim(),
                    storeName: $(obj).find('td').eq(1).text().trim(),
                    address: $(obj).find('td').eq(2).text().trim()
                }
            }).get();

            resolved(store);
        });
    });
};

getStoreInfo('台北市').then ((stores) => {
    console.log(stores);
});