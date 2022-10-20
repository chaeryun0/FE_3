let hello = 'first hello';
hello = 'second hello';

console.log(hello); // second hello

//////////////////////////////
let hello = 'first hello';

if(true) {
  let hello = 'second hello';
  console.log(hello); // second hello
}

console.log(hello); // first hello

//////////////////////////////
const hello = 'first hello';
hello = 'second hello';

console.log(hello); // TypeError: Assignment to constant variable.

//////////////////////////////
const hello = 'first hello';

if(true) {
  const hello = 'second hello';
  console.log(hello); // second hello
}

console.log(hello); // first hello