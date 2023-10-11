// function => block of code which serves single purpose
// DRY => Don't repeat yourself
// reduces repetition of code
// logical representation

// console.log(2 + 3);

// console.log(5 + 6);

// ways
// old way
// syntax
// function function_name(){
// some code here
// }

// using function parameter/argument
// function calculateSum(x, y) {
//   let sum = x + y;
//   console.log(sum);
// }

// calculateSum(50, 60); //function call

// ?return keyword
// let x = 21;
// let y = 25;

// function calculateSum() {
//   let sum = x + y;

//   return sum;
// }

// const result = calculateSum();
// console.log(result);

// let x = 21;
// let y = 25;

// let sum = 0;

// function calculateSum() {
//   sum = x + y;
// }

// calculateSum();
// console.log(sum);

// function getProduct(x, y, z) {
//   let product = x * y * z;

//   return product;
// }

// let result = getProduct(11, 10, 2);
// console.log(result);

// //? Write a function that checks if the provided number is odd or even

// function checkIfOddOrEven(x) {
//   let result;
//   const rem = x % 2;

//   if (rem === 0) {
//     result = "even";
//   } else {
//     result = "odd";
//   }

//   return result;
// }

// const result = checkIfOddOrEven(50);
// console.log(result);

// Write a function that takes a number and
// prints value from 0 to that number (use while loop).

// function printNum(num) {
//   let i = 0;

//   while (i <= num) {
//     console.log(i);

//     i++;
//   }
// }

// printNum(10);

// WAF that calculates the given number is prime or not.

// function checkPrimeOrComposite(x) {
//   let result = "prime";

//   if (x === 0) {
//     result = "Not prime/composite";
//   }

//   for (let i = 2; i < x; i++) {
//     let rem = x % i;
//     console.log(i);

//     if (rem === 0) {
//       result = "Not prime";
//       break;
//     }
//   }

//   return result;
// }

// const res = checkPrimeOrComposite(5562);
// console.log(res);

//arrow function
// const getSum = (a, b) => {
//   let sum = a + b;

//   console.log(sum);
// };

// getSum(20, 30);

// WAF that converts dollars into cents
// 1 dollar =100 cent

// const convertDollarToCents = (dollar) => {
//   let cents = dollar * 100;

//   return cents;
// };

// const cents = convertDollarToCents(15);
// console.log(cents);

// Write a function that takes “add”/“subtract”/”multiply”/”divide” and
//  two numbers as parameters and perform appropriate operations.

// const calculator = (option, x, y) => {
//   let result;

//   switch (option) {
//     case "add":
//       result = x + y;
//       break;
//     case "subtract":
//       result = x - y;
//       break;
//     case "multiply":
//       result = x * y;
//       break;
//     case "divide":
//       result = x / y;
//     default:
//       console.log("Invalid option");
//   }

//   return result;
// };

// let res = calculator("multiplyd", 3, 5);
// console.log(res);

// ?Write a function that takes 5 numbers and
// ? calculates the average of the provided numbers.

// let calculateAvg = (a, b, c, d, e) => (a + b + c + d + e) / 5;

// let average = calculateAvg(5, 5, 5, 5, 5);
// console.log(average);

// const print = (sth) => {
//   console.log(sth);
// };

// print("Hello mom");
