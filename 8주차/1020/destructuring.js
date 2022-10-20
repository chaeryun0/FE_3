// 객체 안의 키 값을 변수 or 상수에 선언, 할당

const obj = { a: 1, b: 2};

const a = obj.a;
const b = obj.b;

console.log(a, b); // 1 2 

//////////////////////////////
const obj = { a: 1, b: 2};

const {a, b} = obj;
console.log(a);
console.log(b);
// 1 2

//////////////////////////////
const array = [1, 2];

const [a, b] = array;
console.log(a); // 1
console.log(b); // 2