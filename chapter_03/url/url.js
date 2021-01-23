const url = require("url");

const {URL} = url;
const myURL = new URL("https://www.gilbut.co.kr/book/view?bookcode=BN002827&keyword=Node.js&collection=GB_BOOK");
console.log("new URL():", myURL);
console.log("url.format():", url.format(myURL));
console.log("===============================================");
const parsedUrl = url.parse("https://www.gilbut.co.kr/book/view?bookcode=BN002827&keyword=Node.js&collection=GB_BOOK");
console.log("url.parse():", parsedUrl);
console.log("url.format():", url.format(parsedUrl));
