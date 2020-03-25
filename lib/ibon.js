const request = require('request');
const cheerio = require("cheerio");

const options = {
    'method': 'POST',
    'url': 'https://www.ibon.com.tw/retail_inquiry_ajax.aspx',
    'headers': {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie': '_ga=GA1.3.927991393.1585149670; _gid=GA1.3.688677455.1585149670'
    },
    formData: {
        'strTargetField': 'COUNTY',
        'strKeyWords': '台北市'
    }
};

const getStoreInfo = function () {
    return new Promise((resolved) => {
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
            store.shift();
            resolved(store);
        });
    });
};

getStoreInfo().then ((stores) => {
    console.log(stores);
});