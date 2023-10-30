// map
// let marks = [25,35,30,29,55,65]
// pass marks being 32
//  give grace marks to student who could not pass by 5 or lower marks

// ?solution 1
// let marks = [25,35,39,29,55,65];
// const newMarks = marks.map((item, index, self) => {
// if(item <= 32 && item >= 27) {
// let graceMarks = 32 - item;
// item += graceMarks;
// }
// return item;
// }

// ?solution 2
// let marks = [28, 27, 26, 32, 15, 25, 35, 30, 29, 55, 65];

// const newMarks = marks.map((item) => (item < 32 && 32 - item <= 5 ? 32 : item));

// console.log(newMarks);

//?2. let prices = [10,15,30,2,5,90]
//?2. provide 10% flat discount on all chocolate Price

// let prices = [10, 15, 30, 2, 5, 90];

// const newPriceList = prices.map((item, index, self) => {
// const newPrice = item * 0.9;
//   const newPrice = item - 0.1 * item;

//   return newPrice;
// });

// console.log(newPriceList);

const productList = [
  {
    name: "Shoes",
    price: 5500,
  },
  {
    name: "Jacket",
    price: 15000,
  },
  {
    name: "cap",
    price: 1500,
  },
  {
    name: "Goggles",
    price: 6000,
  },
  {
    name: "Trousers",
    price: 5000,
  },
];

// ?decrease every item price with 1000

// const newProductList = productList.map((item) => ({
//   name: item.name,
//   price: item.price - 1000,
// }));

// console.log(newProductList);

// ?filter items whose price is less than or equals to 5000

// const newProductList = productList.filter((item) => item.price > 5000);
// console.log(newProductList);

// ?find price of item whose name is "cap"
// const item = productList.find((item, index, self) => {
//   if (item.name === "cap") {
//     return item;
//   }
// });
// console.log(item.price);

// ?let marks = [28,35,26,55,75,21,25,45,11]
//? pass marks is 32.. remove marks less than 32
let marks = [28, 35, 26, 55, 75, 21, 25, 45, 11];

// const newMarks = marks.filter((item) => item >= 32);

// console.log(newMarks);
// ? check if every student has passed the exam
// const isAllPass = marks.every((item, index, self) => {
//   console.log(item);
//   return item >= 32;
// });

// console.log(isAllPass);
// ? check if any student has failed the exam
// const isSomeFailed = marks.some((item) => item < 32);

// console.log(isSomeFailed);
