function truthy(value){
  return !!value;
}

console.log('0' == 0) // true
console.log('0' === 0) // false

console.log(1 == true) // true
console.log(1 === true) // false

console.log(0 == false) // true
console.log(0 === false) // false

console.log('true' == true) // false
console.log('true' === true) // false
// 1. json에서 값을 가져올 때 true 문자열로 가져와서 error가 난 적이 있음
// 2. json에서 값을 가져올 때 true가 True로 되어 있어서 error가 난 적이 있음

console.log(0 == '') // 주의 : true
console.log(0 === '') // 주의 : false

console.log(false == '') // 주의 : true
console.log(false === '') // 주의 : false

console.log(false == null) // 주의 : false
console.log(false === null) // 주의 : false

console.log(false ==  undefined) // 주의 : false
console.log(false === undefined) // 주의 : false

console.log(NaN ==  NaN) // 주의 : false
console.log(NaN === NaN) // 주의 : false


function truthyAndFalsy(value){
    return !!value
}

truthyAndFalsy([]) // 주의 : true
truthyAndFalsy({}) // 주의 : true
truthyAndFalsy('') // 주의 : false
truthyAndFalsy(null) // 주의 : false
truthyAndFalsy(undefined) // 주의 : false
truthyAndFalsy(NaN) // 주의 : false
truthyAndFalsy(Infinity) // 주의 : true

truthyAndFalsy(-100) // true
truthyAndFalsy('hello') // true

console.log('----------------');
console.log('드모르간 법칙');

// not (A or B) = (not A) and (not B)
// not (A and B) = (not A) or (not B)
// !(a % 3 == 0 || a % 5 == 0) // 아래 코드와 같습니다.
// !(a % 3 == 0) && !(a % 5 == 0) // 위 코드와 같습니다.

for (let i = 0; i < 100; i++) {
    if (!(i % 3 == 0 || i % 5 == 0)) {
        console.log(i)
    }
}

for (let i = 0; i < 100; i++) {
    if (!(i % 3 == 0) && !(i % 5 == 0)) {
        console.log(i)
    }
}


// or : ||
// and : &&
const x = 0;
const y = 1;
console.log(!(x || y) === (!x && !y));
console.log(!(x && y) === (!x || !y));


//////////// NaN /////////////

/* https://en.wikipedia.org/wiki/IEEE_754 Because 'Not a Number' is not a number,
and is not equal to anything, including Not a Number. */
// 표현해드리자면 '숫자가 아님'은 '숫자가 아님'과 동일한가?
// javascript 내부적으로는 비교 x === y(여기서 x와 y는 값)는 true 또는 false를 생성, 이러한 비교는 다음과 같이 수행된다.
/* Type(x)가 숫자 이면 x가 NaN이면 false를 반환. y가 NaN이면 false를 반환.
이것은 알고리즘이 먼저 피연산자 중 하나가 NaN유형을 확인하기 전에 있는지 확인하고 그렇다면 false 어쨌든 반환할 것임을 의미 
*/
console.log(0 / 0); // NaN
console.log(10 / 0); // Infinity
console.log("---");

// 암기
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false
console.log("---");

// isNaN 쓰지 않기
console.log(isNaN(undefined)); // true
console.log(isNaN(null)); // false
console.log(isNaN(NaN)); // true
console.log("---");

// ES6에서 추가 도입 // 암기
console.log(Number.isNaN(undefined)); // false
console.log(Number.isNaN(null)); // false
console.log(Number.isNaN(NaN)); // true

/*
// https://www.designcise.com/web/tutorial/what-is-the-difference-between-isnan-and-number-isnan-in-javascript

x                Number(x)    isNaN(x)
undefined        NaN            true
{}                NaN            true
'foo'            NaN            true
new Date('')    NaN            true
new Number(0/0)    NaN            true


x               typeof x === 'number'   Number.isNaN(x)
undefined        false                    false
{}                false                    false
'foo'            false                    false
new Date('')    false                    false
new Number(0/0)    false                    false
*/
