// scopes in js

// global scope
// let a = 10;

// {
//   // local scope
//   let a = 20;

//   console.log(a);
// }

// {
//   // local scope
//   let a = 30;
// }

// console.log(a);

// conditionals
// if
//? syntax
// if(condition){
// some code here
// }else{
// some code here
// }

// let x = 5;
// x += 10;
// console.log(x);

// if (x > 25) {
//   console.log("Hello mom");
// } else {
//   console.log("JS Class");
// }

// 1.Check if a number is odd or even.
// 2.Check if input variable is a number or not

// let x = 124;

// const remainder = x % 2;

// if (remainder === 0) {
//   console.log("Even");
// } else {
//   console.log("Odd");
// }

// let someVar = "1234";

// const type = typeof someVar; //"number"
// console.log(type);

// if (type === "number") {
//   console.log("Number");
// } else {
//   console.log("Not a number");
// }

// let m = 11;
// let n = 11;

// if (m > n) {
//   console.log(`${m} is greater than ${n}`);
// } else if (n > m) {
//   console.log(`${n} is greater than ${m}`);
// } else {
//   console.log(`${m} is equal to ${n}`);
// }

// let name1 = "Shrutee";
// let name2 = "shrutee";

// if (name1 < name2) {
//   console.log(`${name2} is greater than ${name1}`);
// }

// switch case

// some variable
// switch(variable){
// case value1:
// some code here
// break;
// case value2:
// some code here
// break;
// default:
// some code here
// }

// day => 1
// let day = 2;

// if (day === 1) {
// 3  console.log("Sunday");
// } else if (day === 2) {
//   console.log("Monday");
// } else if (day === 3) {
//   console.log("Tuesday");
// } else if (day === 4) {
//   console.log("Wednesday");
// } else if (day === 5) {
//   console.log("Thursday");
// } else if (day === 6) {
//   console.log("Friday");
// } else if (day === 7) {
//   console.log("Saturday");
// } else {
//   console.log("Invalid day input");
// }

// let day = 6;

// switch (day) {
//   case 1: // day ===1
//     console.log("Sunday");
//     break;

//   case 2:
//     console.log("Monday");
//     break;

//   case 3:
//     console.log("Tuesday");
//     break;

//   case 4:
//     console.log("Wednesday");
//     break;

//   case 5:
//     console.log("Thursday");
//     break;

//   case 6:
//     console.log("Friday");
//     break;

//   case 7:
//     console.log("Saturday");
//     break;

//   default:
//     console.log("Invalid day input");
// }

// ? 5.Perform arithmetic operation based on the option provided.
// ?Set two variables with numbers. Create another variable called “option”
//  ?which can be add/subtract/multiply/divide/power.
// ? Based upon the value of the option. Perform appropriate operation.
//? e.g. if option is “add”, perform num1+num2

// let x = 5;
// let y = 2;

// let option = "divide";
// let result;

// switch (option) {
//   case "add": {
//     result = x + y;
//     break;
//   }

//   case "subtract": {
//     result = x - y;
//     break;
//   }

//   case "multiply": {
//     result = x * y;
//     break;
//   }

//   case "divide": {
//     result = x / y;
//     break;
//   }

//   default: {
//     console.log("Invalid option");
//   }
// }

// console.log(`${x} ${option} ${y} = ${result}`);

// ? ternary operator

// let x = 0;

// if (x < 0) {
//   console.log("Negative number");
// } else if (x > 0) {
//   console.log("Positive number");
// } else {
//   console.log("The number is zero");
// }

// syntax
// condition ? true_case:false_case
// x < 0 ? console.log("Negative number") : console.log("Positive number");

// x < 0
//   ? console.log("Number is -ve")
//   : x > 0
//   ? console.log("Number is +ve")
//   : console.log("Number = 0");

// ?let pass marks = 32
//? and a  student has scored 35
//? if marks > pass marks => pass
//? else => fail

// let marks = 32.5;
// const passMarks = 32;

// if (marks >= passMarks) {
//   console.log("You have passed.");
// } else {
//   console.log("You have to try next time.");
// }

// marks >= passMarks ? console.log("Pass") : console.log("Fail");

// 6.Find grades for student marks.
// If the mark is greater than or equal to 90, the grade is “A plus”.
// If the mark is greater than or equal to 80,the grade is “A”.
//  Grade “B”  from marks greater than equal to 70.
// “C” for marks greater than equal to 60.
// “F” for marks  less than 60.

// let marks = 195;
// let grade;

// if (marks > 100) {
//   grade = "I";
// } else if (marks >= 90) {
//   grade = "A+";
// } else if (marks >= 80) {
//   grade = "A";
// } else if (marks >= 70) {
//   grade = "B";
// } else if (marks >= 60) {
//   grade = "C";
// } else if (marks >= 0) {
//   grade = "D";
// } else {
//   grade = "I";
// }

// // 85 => A
// console.log(`${marks} => ${grade}`);
