const fs = require("fs");

fs.watch("../folder/target.txt", (eventType, filename) => {
    console.log(eventType, filename);
})