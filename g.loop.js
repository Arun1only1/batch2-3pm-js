// loop => repetition
// 1. for
// 2. while
// 3. do while

// ?for loop

// initial value
// condition
// increment or decrement

// for(initial value; condition; increment or decrement){
// some code here
// }

// for (let i = 0; i < 5; i = i + 1) {
//   console.log("Hello mom", i);
// }

// for (let i = 5; i > 0; i = i - 1) {
//   console.log(i);
// }

//? unary operator
// i++ => i = i + 1
// i-- => i = i-1

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 12; i < 25; i++) {
//   console.log(i);
// }

// print from 50 to 25

// for (i = 50; i > 24; i--) {
//   console.log(i);
// }

// ?while loop
// ?syntax
// initial value
// while(condition){
// some code here
// increment or decrement
// }

const print = (x) => {
  console.log(x);
};

// let i = 0; //initial value

// while (i < 5) {
//condition
//   print(i);

//   i++; //increment or decrement
// }

// ?do..while
// ?syntax
// initial value
// do{
// some code here
// increment or decrement
// }while(condition)

// let i = 100; //initial value

// do {
//   console.log(i);

//   i++; //increment or decrement
// } while (i < 5); //condition

// sum of n numbers
// sum from 1 to 10
// 1+2+3+4+5+6+7+8+9+10 = 55

// let n = 5;

// let sum = 0; //15
// for (let i = 1; i <= n; i++) {
//   sum = sum + i;
// }

// print(sum);

let i = 1;
let n = 10;
let sum = 0;

while (i <= n) {
  sum = sum + i;

  i++;
}

print(sum);
