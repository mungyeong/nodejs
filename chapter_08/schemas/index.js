const mongoose = require("mongoose");

const connect = () => {
	if (process.env.NODE_ENV !== "production") {
		mongoose.set("debug", true);
	}
	mongoose.connect("mongodb://nodejs:nodejs1234567@localhost:27017/nodejs", {
		dbName         : "nodejs",
		useNewUrlParser: true,
		useCreateIndex : true,
	}, (err) => {
		if (err) {
			console.log("mongodb connect error", err);
		} else {
			console.log("mongodb connect success");
		}
	});
};
mongoose.connection.on("error", (error) => {
	console.error("mongodb connect error",error);
});

mongoose.connection.on("disconnected", () => {
	console.error("mongodb disconnected reconnect")
	connect();
});

module.exports = connect;