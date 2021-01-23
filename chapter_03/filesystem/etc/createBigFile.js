const fs = require("fs");
const file = fs.createWriteStream("../big.txt" );

for(let i = 0 ;i<1000000;i++){
    file.write(i+"\n");
}
file.end();