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

const checkNationality = (person) => {
  let isNepali = false;

  if (person.country === "Nepal") {
    isNepali = true;
  }

  person.isNepali = isNepali;

  return person;
};

const obj = checkNationality({ name: "Rubin", country: "Russia" });
console.log(obj);
