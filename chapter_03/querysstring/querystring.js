const url = require("url");

const querystring = require("querystring");

const parseUrl = url.parse("https://www.gilbut.co.kr/book/view?bookcode=BN002827&keyword=Node.js&collection=GB_BOOK");
const query = querystring.parse(parseUrl.query);
console.log("querystring.parse()",query);
console.log("querystring.stringify()",querystring.stringify(query));