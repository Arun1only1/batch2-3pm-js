//? HOF => Higher Order functions
// ? => function returning function(closure) ||
// ?function passed as argument to another function(callback function)
// ?closure => function tracks value of dependent variable
//  ?nested function => function inside function

// const outerFunction = (firstName) => (lastName) => `${firstName} ${lastName}`;

// const calculateProduct = (x) => {
//   const multiply = (y) => {
//     return x * y;
//   };

//   return multiply;
// };

// const res = calculateProduct(5)(10);
// const multiply = calculateProduct(5);
// const res = multiply(10);
// console.log(res);
// const innerFunc = outerFunction("Subin");

// const res = innerFunc("Khatiwoda");

// const res = outerFunction("Arbin")("Shrestha");
// console.log(res);

// ?function passed as argument to another function is called callback function
// [1, 2, 3].map((item) => {
//   console.log(item);
// });

// const getSum = (a, b, func) => {
//   const total = a + b;

//   func(total);
// };

// getSum(2, 3, (res) => {
//   console.log(`The result is ${res}`);
// });

// let a = 5;

// const print = () => {
//   console.log(a);
// };

// a = 9;
// print(); // call hune point bata last value of dependent variable track garxa

// a = 10;
