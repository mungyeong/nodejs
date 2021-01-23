const http = require("http");
const fs = require("fs").promises;

const users = {};

http.createServer(async (req, res) => {
	try {
		const method = req.method;
		const url = req.url;
		console.log(method, url);
		if (method === "GET") {
			if (url === "/") {
				const data = await fs.readFile("./restFront.html");
				res.writeHead(200, {"Content-Type": "text/html;charset=utf-8;"});
				return res.end(data);
			} else if (url === "/about") {
				const data = await fs.readFile("./about.html");
				res.writeHead(200, {"Content-Type": "text/html;charset=utf-8;"});
				return res.end(data);
			} else if (url === "/users") {
				res.writeHead(200, {"Content-Type": "text/html;charset=utf-8;"});
				return res.end(JSON.stringify(users));
			}
			try {
				const data = await fs.readFile(`.${req.url}`);
				return res.end(data);
			} catch (error) {
				console.error("경로가 틀렸습니다.");
			}
		} else if (method === "POST") {
			if (url.startsWith("/user")) {
				let body = "";
				req.on("data", (data) => {
					body += data;
				});
				return req.on("end", () => {
					console.log("POST 본문(Body):", body);
					const {name} = JSON.parse(body);
					const id = Date.now();
					users[id] = name;
					res.writeHead(201);
					res.end("등록 성공");
				});
			}
		} else if(method === "PUT") {
			if(url.startsWith("/user/")){
				const key = url.split("/")[2];
				let body = "";
				req.on("data", (data) => {
					body += data;
				});
				return req.on("end", () => {
					console.log("PUT 본문(Body):", body);
					users[key] = JSON.parse(body).name;
					return res.end(JSON.stringify(users));
				});
			}
		}else if(method === "DELETE") {
			if(url.startsWith("/user/")){
				const key = url.split("/")[2];
				delete users[key];
				return res.end(JSON.stringify(users));
			}
		}


		res.writeHead(404);
		return res.end("NOT FOUND");
	} catch (error) {
		console.error(error);
		res.writeHead(500);
		res.end(error);
	}
})
	.listen(8082, () => {
		console.log("8082번 포트에서 서버 대기 중입니다.");
	});