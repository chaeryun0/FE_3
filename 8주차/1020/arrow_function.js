const foo = () => {
  console.log('arrow function');
}
foo(); // arrow function

//////////////////////////////
const foo = (x) => {
  return x;
}
console.log(foo('arrow')); // arrow

//////////////////////////////
const foo = (x) => x;
console.log(foo('arrow')); // arrow

//////////////////////////////
const foo = (x, y) => x + y;
console.log(foo(1, 5)); // 6

const foo = (x, y) => {
  console.log("2줄 이상에서는 중괄호 사용") // 2줄 이상에서는 중괄호 사용
  return x + y;
}
console.log(foo(1, 5)); // 6