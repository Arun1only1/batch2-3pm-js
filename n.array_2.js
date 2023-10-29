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

const priceList = [100, 200, 10, 50, 55, 500];
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
// find
// findIndex
// some
// every
