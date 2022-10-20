const http = require('http');
// require : http 패키지를 불러와서 사용할 수 있게 하는 역할

http
  .createServer((req, res) => { // req : 요청 보낼 때, res : 응답 보낼 때
  res.writeHead(200, { "Content-Type" : "text/html" }); // 헤더 값을 추가해서 보내는 코드
  // 응답을 보낼때 헤더값을 통해서 숫자 상태코드와 어떤 타입인지를 보냄 // 200 : 응답을 정상적으로 잘 보냈을 때
  res.end("<p>Hello World</p>"); // 사용자에게 응답을 보낼 코드
})
  // 서버를 실행할 코드 작성
  .listen(3000, () => { // 포트 번호 정해준 후, 서버 완료시 보여질 메시지 작성
    console.log("3000번 포트 서버 접속 완료"); 
});
// 3000번 포트 서버 접속 완료

//////////////////////////////////
const http = require("http");

http
  .createServer((req, res) => {
    if (req.url === "/") { // 각각 특성에 맞는 url로 분기 처리 -> 라우팅
      res.writeHead(200); // writeHead 응답을 보냈을 때 정상적으로 잘 되어있다면 숫자를 넣어줌 // 페이지가 잘못 되어있을 때 404
      res.end("main url"); 
    } else if (req.url === "/upload") {
      res.writeHead(200);
      res.end("upload url");
    } else if (req.url === "/delete") {
      res.writeHead(200);
      res.end("delete url");
    } else {
      res.writeHead(404);
      res.end("Not Found");
    }
  })
  .listen(3000, () => { 
    console.log("3000번 포트 서버 접속 완료");   
  });
// 터미널 기입만 되는 현상 : control + c
