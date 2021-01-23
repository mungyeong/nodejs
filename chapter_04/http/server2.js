const http = require("http");
const fs = require("fs").promises;

http.createServer(async (req, res) => {
	try{
		const data = await fs.readFile("./server2.html");
		res.writeHead(200,{"content-Tyep": "text/html;charset=utf-8"});
		res.end(data);

	}catch (error){
		console.error(error);
		res.writeHead(500,{"content-Tyep": "text/html;charset=utf-8"});
		res.end(error.message);
	}
})
	.listen(8081, () => {
		console.log("8081번 포트에서 서버 대기 중입니다!");
	});
