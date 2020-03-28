const axios = require("axios");
const querystring = require("querystring");
const cheerio = require("cheerio");

const ibonAPI = async city => {
    try {
        const headers = {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            "Cookie": "_ga=GA1.3.927991393.1585149670; _gid=GA1.3.688677455.1585149670"
        };
        const url = "https://www.ibon.com.tw/retail_inquiry_ajax.aspx";
        const formData = { strTargetField: "COUNTY", strKeyWords: city };
        
        const res = await axios.post( url, querystring.stringify(formData), { headers });
        return res;
    } catch (e) {
        console.log(e)
        return e;
    }
}

const parseStoreInfo = async ibonInfo => {
    try {
        const $ = cheerio.load(ibonInfo.data);
        const store = $('table tr').map((index, obj) => {
            return {
                code: $(obj).find('td').eq(0).text().trim(),
                storeName: $(obj).find('td').eq(1).text().trim(),
                address: $(obj).find('td').eq(2).text().trim()
            }
        }).get()
        return store;
    } catch (error) {
        console.log(e)
        return e;
    }
}

const getStoreInfo = async city => {
    try {
        const ibonInfo = await ibonAPI(city);
        const storeInfo = await parseStoreInfo(ibonInfo);
        return storeInfo;
    } catch (e) {
        console.log(e)
        return e;
    }
}

getStoreInfo('台北市');

module.exports = { ibonAPI, parseStoreInfo, getStoreInfo };
