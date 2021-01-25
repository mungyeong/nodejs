const mongoose = require("mongoose");

const {MONGO_ID, MONGO_PASSWORD, MONGO_DB, MONGO_ENV} = process.env;

const MONGO_URL = `mongodb://${MONGO_ID}:${MONGO_PASSWORD}@localhost:27017/${MONGO_DB}`;

const connect = () => {
	if (MONGO_ENV !== "production") {
		mongoose.set("debug", true);
	}
	mongoose.connect(MONGO_URL, {
		dbName         : MONGO_DB,
		useNewUrlParser: true,
		useCreateIndex : true,
	}, (err => {
		if (err) {
			console.log("몽고디비 연결 에러", err);
		} else {
			console.log("몽고디비 연결 성공");
		}
	}));
};

mongoose.connection.on("error", (error) => {
	console.error("몽고디비 연결 에러", error);
});

mongoose.connection.collection("disconnected", () => {
	console.error("몽고디비 연결이 끊겼씁니다. 연결을 재시도합니다.");
	connect();
});

module.exports = connect;