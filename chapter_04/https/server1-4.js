const http2 = require("http2");
const fs = require("fs");


http2.createSecureServer({
		cert: fs.readFileSync(""),
		key : fs.readFileSync(""),
		ca  : [
			fs.readFileSync(""),
			fs.readFileSync(""),
		],
	},
	(req, res) => {
		res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
		res.write("<h1>Hello Node!</h1>");
		res.end("<p>Hello Server!</p>");
	}
)
	.listen(443, () => {
		console.log("443번 포트에서 서버 대기 중입니다.");
	})