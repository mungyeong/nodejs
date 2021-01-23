setInterval(() => {
	console.log("start");
	try {
		throw Error("서버를 고장났습니다.");
	} catch (err) {
		console.log(err);
	}
}, 1000);