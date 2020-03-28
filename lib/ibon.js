const axios = require("axios");
const querystring = require("querystring");
const cheerio = require("cheerio");

const getStoreInfo = async city => {
    try {
        const headers = {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            "Cookie": "_ga=GA1.3.927991393.1585149670; _gid=GA1.3.688677455.1585149670"
        };
        const url = "https://www.ibon.com.tw/retail_inquiry_ajax.aspx";
        const formData = { strTargetField: "COUNTY", strKeyWords: city };
        
        const res = await axios.post( url, querystring.stringify(formData), { headers });
        const $ = cheerio.load(res.data);
        const store = $('table tr').map((index, obj) => {
            return {
                code: $(obj).find('td').eq(0).text().trim(),
                storeName: $(obj).find('td').eq(1).text().trim(),
                address: $(obj).find('td').eq(2).text().trim()
            }
        }).get()
        return store;
    } catch (e) {
        return;
    }
}

getStoreInfo('台北市').then(console.log)

module.exports = getStoreInfo;
