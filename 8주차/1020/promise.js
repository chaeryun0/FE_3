// pending : 대기 상태
// pulfilled : 이행 상태
// rejected : 실패 상태

function sayHello() {
  return new Promise((resolve, reject) => {
    const hello = 'hello world';
    resolve(hello);
  })
}
sayHello().then((resolveData) => {
  console.log(resolveData); // hello world
});

////////////////////////////////////////////
function sayHello() {
  return new Promise((resolve, reject) => {
    reject(new Error());
  })
}

sayHello().then((resolveData) => { 
  console.log(resolveData); 
})
.catch((err) => { // 에러 발생 시 핸들링
  console.log(err); // Error

////////////////////////////////////////////
function sayHello() {
  return new Promise((resolve, reject) => {
    resolve('hello');
  })
}

sayHello().then((resolveData) => { 
  console.log(resolveData); // hello
  return resolveData;
})
.then((resolveData) => { // resolveData는 앞에 리턴한 데이터 값을 받게 됨
  console.log(resolveData); // hello
  return resolveData;
})
.then((resolveData) => {
  console.log(resolveData); // hello
  return resolveData;
})
.then((resolveData) => {
  console.log(resolveData); // hello
  return resolveData;
})
.catch((err) => { // 에러 발생 시 핸들링
  console.log(err);
});
// .then으로 인해 코드가 길어지고 가독성이 좋지 않음

////////////////////////////////////////////
function sayHello() {
  return new Promise((resolve, reject) => {
    resolve('hello');
  })
}

async function test() {
  const hello = await sayHello();
  console.log('hello1');
}

test(); // hello