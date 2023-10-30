// const festivals = ["dashain", "tihar", "loshar", "chhath", "jatra"];

// ?push => adds item to end of array
// festivals.push("udhauli-ubhauli");
// festivals.push("christmas", "new-year");

// console.log(festivals);
// ?pop => removes last item from array

// const removedItem = festivals.pop();
// console.log(festivals, removedItem);

//? shift => removes first item from array
// const removedFestival = festivals.shift();
// console.log(removedFestival);

//? unshift => adds item to starting of array
// festivals.unshift("x", "y");
// console.log(festivals);

// ?slice => splits array and also used for copying array
// ? start index in included but end index is excluded
// ? can use negative index also
// console.log(festivals.slice(1, 3));
// const newFestival = festivals.slice();
// console.log(newFestival);

// console.log(festivals.slice(-2));
// console.log(festivals);
// !splice
// !fill

// const priceList = [100, 200, 10, 50, 55, 500];
// ? applies loop in array
// ?map => returns new array, length of original array and returned array is same
// => problem is: we need to hike price of every product by 10

// const newPriceList = priceList.map((item, index, self) => {
//   const hikedPrice = item + 10;

//   return hikedPrice;
// });

// console.log(newPriceList);
// ?question => give 10 rs discount for item priced at greater than 100 and
// ?for other item increase price by 10

// const newPriceList = priceList.map((item, index, self) => {
//   let newPrice;

//   if (item > 100) {
//     newPrice = item - 10;
//   } else {
//     newPrice = item + 10;
//   }

//   return newPrice;
// });

// console.log(newPriceList);

// ?filter=> returns new array, most of times  length of original array and returned array is different
// ?=> filter out based upon certain condition

// const numList = [-1, -11, 1, 10, 7, 5, 0];

// const newNumList = numList.filter((item, index, self) => item >= 0);

// console.log(newNumList);

// ?find
// ? finds first item/element satisfying given condition

// const priceList = [1, 2, 3, 4, 5, 6, 55, 65];

// const item = priceList.find((item, index, self) => {
//   return item > 62;
// });

// console.log({ item });
// findIndex

// const item = priceList.findIndex((item, index, self) => {
//   return item > 50;
// });

// console.log(item);

// some => returns true if any item satisfies the condition
const numList = [1, 2, 5, 6, 7, -5, -7];

// const value = numList.some((item, index, self) => {
//   return item > 0;
// });

// console.log(value);

// every => returns true if every item satisfies the condition
// const value = numList.every((item, index, self) => {
//   return item > 0;
// });

// console.log(value);

const laptops = [
  {
    name: "Inspiron 3511",
    price: 55000,
    brand: "dell",
  },
  {
    name: "Acer Nitro",
    price: 109000,
    brand: "acer",
  },
  {
    name: "TUF F15",
    price: 205000,
    brand: "asus",
  },
  {
    name: "Vivobook",
    price: 76000,
    brand: "asus",
  },
  {
    name: "Aspire 5",
    price: 87500,
    brand: "acer",
  },
  {
    name: "Modern 14",
    price: 92000,
    brand: "msi",
  },
  {
    name: "Thinkpad X13",
    price: 149000,
    brand: "lenovo",
  },

  {
    name: "TUF F15",
    price: 205000,
    brand: "asus",
  },
  {
    name: "Legion 5 PRO",
    price: 188000,
    brand: "lenovo",
  },
  {
    name: "Predator Helios 300",
    price: 169000,
    brand: "acer",
  },
  {
    name: "GP66 Leopard",
    price: 199000,
    brand: "msi",
  },
];

// ?decrease price of each laptop by 10K
// ?find laptop named "TUF F15"
// ? is all laptop priced below 2lakh
// ?find index of laptop named "Vivobook"
// ?return msi laptops only
