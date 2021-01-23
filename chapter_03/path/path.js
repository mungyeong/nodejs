const path = require("path")
const string = __filename;

console.log("path.sep: ", path.sep);
console.log("path.delimiter: ", path.delimiter);
console.log("===============================================");
console.log("path.dirname(): ", path.dirname(string));
console.log("path.extname(): ", path.extname(string));
console.log("path.basename(): ", path.basename(string));
console.log("path.basename - extname: ", path.basename(string, path.extname(string)));
console.log("===============================================");
console.log("path.parse(): ", path.parse(string));
console.log("path.format(): ", path.format({
    dir: "/Users/gyeong/development/Project/nodejsstudy01/chapter_03/path",
    name: "path",
    ext: "js",
}));

console.log("path.normalize(): ", path.normalize("/Users/gyeong/development/Project/nodejsstudy01/chapter_03/path/path.js"));
console.log("===============================================");
console.log("path.isAbsolute(): ", path.isAbsolute("/Users/gyeong/development/Project/nodejsstudy01/chapter_03/path"));
console.log("path.isAbsolute(): ", path.isAbsolute("../path"));
console.log("===============================================");
console.log("path.relative(): ", path.relative("/Users/gyeong/development/Project/nodejsstudy01/chapter_03", "/Users/gyeong/development/Project/nodejsstudy01/chapter_03/path/path.js"));
console.log("path.join(): ", path.join(__dirname,"..","..","..","."));
console.log("path.resolve(): ", path.resolve(__dirname,"..","..","..","."));
