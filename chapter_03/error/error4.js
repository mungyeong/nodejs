process.on("uncaughtException", (error) => {
	console.error("예기치 못한 에러", error);
});

setInterval(() => {
	throw new Error("서버가 고장났습니다.");
}, 1000);

setTimeout(() => {
	console.log("실행됩니다.");
}, 2000);