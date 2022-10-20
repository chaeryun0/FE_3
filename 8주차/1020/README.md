# #2 Node.js와 친해지기
> Node.js는 **자바스크립트 런타임**이다. <br>
> **이벤트 기반, 논 블로킹 I/O 모델을 사용해 가볍고 효율적, 싱글 스레드 방식**

```
Node.js 장점

- 싱글 스레드, 논 블로킹 I/O에 따른 빠른 속도
- 컴퓨터 자원을 덜 사용
- I/O 작업이 많은 서버로 적합(채팅 스트리밍)
- 자바스크립트를 사용하기에 프론트엔드 개발자 사용 용이
- 생산성이 높음
```
```
Node.js 단점

- 싱글 스레드는 CPU코어 한개만 사용하므로 CPU 작업이 많은 서버는 부적합
- 로직이 복잡한 경우 콜백함수의 늪에 빠질 수 있음
- 에러가 발생하면 프로세스 자체가 죽어버림 → PM2사용
```
## **Node.js에 적합한 서비스**
- 간단한 로직으로 구성된 서비스
- 빠른 응답시간이 요구되는 서비스
- 빠른 개발이 요구되는 서비스
- 비동기방식에 어울리는 서비스 (채팅, 스트리밍 서비스)

## **개념 정리**
- **런타임** : 프로그래밍 언어가 구동되는 환경
- **이벤트 기반** : 이벤트가 발생할 때 미리 지정해둔 작업을 수행하는 방식
- **논 블로킹 I/O** : 이전 작업이 완료될 때까지 기다리지 않고, 다음 작업들을 수행하는 방식, 오래걸리는 작업은 백그라운드에서 처리
- **블로킹 I/O** : 이전 작업이 끝나야 다음 작업을 수행할 수 있는 방식(대기 시간이 오래 걸리는 작업은 비효율적)

- **스레드 : 작업을 실행하는 단위**
- **싱글 스레드 : 주어진 작업을 한개의 스레드가 처리하는 방식**
    - 스레드에 문제가 생길 시 전체에 문제가 생길 수 있음
    - 메모리나 기타 자원을 효율적으로 사용 가능
- **멀티 스레드 : 여러개의 스레드가 일을 나눠서 처리하는 방식**
    - 하나의 스레드가 문제 생겨도 다른 스레드로 대체 가능
    - 스레드 간의 작업 전환 비용, 놀고 있는 스레드 문제 발생

<br>

# #3 Node.js를 위한 ES6

## var, let, const
- scope : 변수에 접근할 수 있는 범위
- var : 함수 스코프
- let : 블록 스코프, 값을 재정의 할 수 있는 변수 선언 방식
- const : 블록 스코프, 값을 재정의 할 수 없는 변수 선언 방식

## arrow function

```
 const foo = (x, y) => x + y;
 console.log(foo(1, 5)); // 6

---
const foo = (x, y) => {
  console.log("2줄 이상에서는 중괄호 사용") // 2줄 이상에서는 중괄호 사용
  return x + y;
}
console.log(foo(1, 5)); // 6
```

## 비구조화 활당
> 객체, 배열 안의 값을 추출해서 변수, 상수에 바로 선언하는 문법 
```
 const obj = { a: 1, b: 2};

 const {a, b} = obj;
 console.log(a);
 console.log(b);
// 1 2

---
const array = [1, 2];

const [a, b] = array;
console.log(a); // 1
console.log(b); // 2
```

## Promise, Async - Await

> 비동기 : 코드의 흐름을 기다리지 않고, 각자 기다린 다음에 결과값을 바로 알려줌 <br>
> 동기 : 이전 작업이 끝날 때까지 대기하다가 작업이 끝난 후 순차적으로 수행

### promise 상태 

- pending : 대기 상태
- pulfilled : 이행 상태
- rejected : 실패 상태

```
function sayHello() { 
  return new Promise((resolve, reject) => {
    resolve('hello');
  })
}
// Promise  자체가 비동기이기 때문에 async와 await을 같이 적어줘야 아래 코드가 바로 실행되지 않는다. -> sayHello()실행이 끝난 후 실행됨
async function test() {
  const hello = await sayHello();
  console.log('hello1');
}

test(); // hello1
```

<br>

# #4 Node.js로 나의 첫 서버 구축하기

> **Server : 네트워크를 통해 클라이언트에 정보나 서비스를 제공, 컴퓨터 혹은 프로그램 → 클라이언트의 요청에 대한 응답을 하는 역할** <br>
> localhost : 현재 컴퓨터의 내부 주소 (서버 개발할 때 테스트 용으로 많이 쓰임) <br>
> 포트(Port) : 서버 내의 프로세스를 구분하는 번호 <br>

<img src="https://user-images.githubusercontent.com/112460430/196990385-d5107f7e-3722-4868-be23-8a6d7410d8da.png" width="60%">

```
const http = require('http');   // require : http 패키지를 불러와서 사용할 수 있게 하는 역할

http
  .createServer((req, res) => {                           // req : 요청 보낼 때, res : 응답 보낼 때
  res.writeHead(200, { "Content-Type" : "text/html" });  // 헤더 값을 추가해서 보내는 코드
  res.end("<p>Hello World</p>");                        // 사용자에게 응답을 보낼 코드
})
  // 서버를 실행할 코드 작성
  .listen(3000, () => {                   // 포트 번호 정해준 후, 서버 완료시 보여질 메시지 작성
  console.log("3000번 포트 서버 접속 완료");  // 3000번 포트 서버 접속 완료
});
```

## Postman

> **서버 개발 시 이를 테스트할 수 있는 툴** <br>
> 브라우저는 서버에 한정적으로 접근할 수 밖에 없기 때문에 Postman 툴을 통해 다양한 기능들을 활용하여 서버 개발에 이용함

## API 서버 구축

> API 서버 : 요청을 받고 응답을 하는 서버

``` 
// http : 서버를 좀 더 쉽게 구축할 수 있게 해주는 패키지
// createServer : 서버를 구축하기 위해 서버를 생성하고 콜백함수로 request와 response를 받아 요청과 응답을 진행할 수 있도록 하는 함수
// listen : 서버를 다 만들고 해당 포트(입력한 숫자 3000) 내에서 서버를 대기시킬 수 있도록 하는 함수

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
```
