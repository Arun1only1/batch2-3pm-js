// WAF which accepts an object as argument
// object must have personDetails : name,age, address
// check if user is adult or not
//  add a field isAdult and set it to true/false

// const checkIfAdult = (person) => {
//   let isAdult = false;

//   if (person.age >= 18) {
//     isAdult = true;
//   }

//   const newObj = {
//     ...person,
//     adult: isAdult,
//   };

//   return newObj;
// };

// const obj = checkIfAdult({ name: "Laxman", age: 12, address: "Lalitpur" });
// console.log(obj);

// const firstName = "X";
// const lastName = "Y";

// const person1 = {
//   firstName, //key:value
//   lastName,
// };

// console.log(person1);

// object of personDetails => name, country
// if country is Nepal, return object with isNepali true/false

// const checkNationality = (person) => {
//   let isNepali = false;

//   if (person.country === "Nepal") {
//     isNepali = true;
//   }

//   person.isNepali = isNepali;

//   return person;
// };

// const obj = checkNationality({ name: "Rubin", country: "Russia" });
// console.log(obj);

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
// ? sort product from cheap to expensive
// laptops.sort((a, b) => a.price - b.price);

// console.log(laptops);

// ? sort product according to brand in descending order
// laptops.sort((a, b) => a.brand.localeCompare(b.brand));
// console.log(laptops);

// ?calculate sum of price of all laptops
// const totalPrice = laptops.reduce((sum, item) => sum + item.price, 0);
// console.log(totalPrice);

// ?insert macbook pro and macbook air object in index position 3

// laptops.splice(
//   3,
//   0,
//   { name: "Macbook pro", price: 200000, brand: "apple" },
//   { name: "Macbook air", price: 100000, brand: "apple" }
// );

// console.log(laptops);

// ? WAF to return key only from string "Bearer 12dfafakfafdk"

// const getKey = (token) => {
//   const splittedArray = token.split(" ");
//   console.log(splittedArray);

//   return splittedArray[1];
// };

// const key = getKey("Bearer 12dfafakfafdk");
// console.log(key);

// const getFormattedOutput = (x) => {
//   return x.split("").join("-");
// };

// const res = getFormattedOutput("Token");
// console.log(res);
