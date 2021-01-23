const crypto = require("crypto");

console.log("base64:",crypto.createHash("sha512").update("test").digest("base64"));
console.log("hex:",crypto.createHash("sha512").update("test").digest("hex"));
console.log("base64:",crypto.createHash("sha512").update("test1").digest("base64"));