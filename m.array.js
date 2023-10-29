// array

// contains multiple data
// collection of data with any data type

// const subjects = ["science", "social", "nepali"];

// console.log(typeof subjects);

// const x = ["a", "bottle", 25, true, null, undefined, { isStudent: false }];
// console.log(x);

// const marks = [25, 25, 25];

// const personList = [
//   {
//     name: "A",
//     roll: 1,
//   },
//   {
//     name: "B",
//     roll: 2,
//   },
//   {
//     name: "C",
//     roll: 3,
//   },
// ];

// console.log(personList);

// const weatherData = [
//   [11, 25],
//   [12, 35],
// ];

// console.log(weatherData);

// const teams = ["barca", "madrid", "arsenal", "city"];

// data is retrieved using index
// index always starts with zero(0)

// console.log(teams[4]);
// console.log(typeof teams);

// const laptopDetails = [
//   {
//     name: "Mac book",
//     price: 4000,
//     color: ["red", "black", "blue"],
//   },
//   {
//     name: "TUF",
//     price: 2000,
//     color: ["white"],
//   },
// ];

// console.log(laptopDetails.length);
// console.log(laptopDetails[0]["color"][2]);

// Create an array called friendsList and add your friends name.
// print out friends names one by one
// also print size of array(length)

const friends = ["shyam", "hari", "uttam", "hari"];

// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);

// console.log(friends[friends.length - 1]);

// console.log(friends.length);

// for (i = 0; i <= friends.length - 1; i++) {
//   console.log(friends[i]);
// }

// ?famous loop
// ?map
// function passed as an argument  is called callback function

// const countries = ["Nepal", "America", "China"];
// countries.map((item, index, self) => {
//   console.log(item);
// });

// const numList = [-1, 1, 3, -5, 6, 0, -52, 25];

// numList.map((item, index, self) => {
//   if (item < 0) {
//     console.log(`${item} is -ve`);
//   } else if (item > 0) {
//     console.log(`${item} is +ve`);
//   } else {
//     console.log(`${item} is zero`);
//   }
// });

// const marksList = [32, 25, 11, 77, 24];

// marksList.forEach((item, index, self) => {
//   const rem = item % 2;

//   if (rem === 0) {
//     console.log(`${item} is even.`);
//   } else {
//     console.log(`${item} is odd.`);
//   }
// });

// in =>key
// of => value
// const cityList = ["Brt", "Pkr", "Dhgd", "Ktm"];

// for (const item of cityList) {
//   console.log(item);
// }

// const name = {
//   firstName: "A",
//   lastName: "B",
// };

// console.log(Object.values(name));
// console.log(Object.entries(name));
// console.log(Object.keys(name));

// const nums = [1, 5, 7, 9];

// const newArray = nums.map((item, index, self) => {
//   const newItem = item + 2;

//   return newItem;
// });

// nums.forEach((item, index, self) => {
//   console.log(item);
// });

const marks = [30, 28, 42, 55, 26];

const newMarks = marks.map((item, index, self) => item + 4);

console.log(marks, newMarks);
