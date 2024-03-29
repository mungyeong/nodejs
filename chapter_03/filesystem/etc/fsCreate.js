const fs = require("fs").promises;
const contants = require("fs").promises;

fs.access("../folder", contants.F_OK | contants.W_OK | contants.R_OK)
    .then(() => {
        return Promise.reject("이미 폴더 있음");
    }).catch((err) => {
    if (err.code === "ENOENT") {
        console.log("폴더 없음");
        return fs.mkdir("../folder");
    }
    return Promise.reject(err);
})
    .then(() => {
        console.log("폴더 만들기 성공");
        return fs.open("../folder/file.js", "w");
    })
    .then((fd) => {
        console.log("빈 파일 만들기 성공", fd);
        fs.rename("../folder/file.js", "../folder/newfile.js");
    })
    .then(() => {
        console.log("이름 바꾸기 성공");
    })
    .catch((err) => {
        console.error(err);
    });