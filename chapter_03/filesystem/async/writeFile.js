const fs = require("fs").promises;

fs.writeFile("./writeme.txt", "데이터를 입력합니다.").then(() => {
    return fs.readFile("./writeme.txt")
}).then((data) => {
    console.log(data.toString());
}).catch((err) => {
    console.error(err);
});