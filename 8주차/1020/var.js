var hello = 'hello';

// function scope
function sayHello() {
  var hello = 'hello world';
  console.log(hello);
}

sayHello(); // hello world
console.log(hello); // hello

////////////////////////////////

var hello = 'hello';

// block scope
if (true) {
  var hello = 'hello world';
}

console.log(hello); // hello world
