// ?object destructure
// const person = {
//   name: "Prasoon",
//   age: 23,
// };

// const { name, age } = person;

// console.log(name, age);

// ?array destructure

// const [firstName, lastName] = ["Sahil", "Khatiwoda"];

// console.log(fullName[0]);
// console.log(fullName[1]);

// console.log(firstName, lastName);

// const [num1, num2, num3] = [100, 200, 300];
// console.log(num1, num2, num3);

// TODO:arranging order
// const college = {
//   0: "KEC",
//   2: "NCE",
//   1: "LEC",
// };

// Object.values(college).map((item) => {
//   console.log(item);
// });

// console.log(Object.keys(college));
// console.log(Object.entries(college));

// ?copy

const nums = [100, 500, 5];

const newNumbers = [...nums];

newNumbers.push(55);
console.log(newNumbers);
