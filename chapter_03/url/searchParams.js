const { URL } = require("url");

const myURL = new URL("https://www.gilbut.co.kr/book/view?bookcode=BN002827&keyword=Node.js&collection=GB_BOOK");
console.log("searchParams:",myURL.searchParams);
console.log("searchParams.getAll():",myURL.searchParams.getAll("bookcode"));
console.log("searchParams.get():",myURL.searchParams.get("keyword"));
console.log("searchParams.has():",myURL.searchParams.has("collection"));

console.log("searchParams.keys():",myURL.searchParams.keys());
console.log("searchParams.values():",myURL.searchParams.values());

myURL.searchParams.append("test","es3");
console.log(myURL.searchParams.getAll("test"));
myURL.searchParams.append("test","es5");
console.log(myURL.searchParams.getAll("test"));
myURL.searchParams.append("test","es6");
console.log(myURL.searchParams.getAll("test"));

myURL.searchParams.delete("test");
console.log(myURL.searchParams.getAll("test"));

console.log("searchParams.toString():",myURL.searchParams.toString());
myURL.search = myURL.searchParams.toString();

console.log(myURL.search.toString());