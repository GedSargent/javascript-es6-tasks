// LET AND CONST
// 🔗 https://scrimba.com/learn/introtoes6/let-const-czMQ8U3

//    a) Using `let`, update the code below so the console.log statement throws a `ReferenceError` rather than simply
// `undefined`

if (false) {
  var someVariable =
    "Logging this outside the if block should throw a ReferenceError";
}

console.log(someVariable);

//    b) Using `const`, rewrite the code below so that `number` cannot be changed from its initial value.
// When you test the code, you should get a `TypeError` logged to the console

let number = 5;
number = 10;

console.log({ number });
