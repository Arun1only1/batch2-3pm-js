// key and value pair
// object  => complex data type
// => key is also referred as property

// person 1 info
// const person1FirstName = "Sahil";

// const lastName = "Khatiwoda";

// const address = "Itahari";

// const person1 = {
//   firstName: "Sahil",
//   lastName: "Khatiwoda",
//   address: "Ithari",
// };

// person2"
// const person2FirstName = "Laxman";
// const person2LastName = "Maharjan";
// const person2Address = "Ktm";

// const person2 = {
//   firstName: "Laxman",
//   lastName: "Maharjan",
//   address: "Kathmandu",
//   phoneNumber: 98510235674,
//   isMarried: false,
//   eyePower: undefined,
//   weight: null,
//   educationDetails: {
//     slc: "passed",
//     plus2: "passed",
//     bachelor: "running",
//   },
// };

// console.log(person2);
// console.log(typeof person2);

// CRUD
// C => Create/Add/Insert
// R => Read/Retrieve
// U =>  Update/Edit
// D => Delete/Remove

const countryDetails = {
  name: "Nepal",
  population: "3 crore",
  capital: "Kathmandu",
  countryCode: 977,
  isDeveloping: true,
  officialLanguage: "Nepali",
  governmentDetails: {
    president: "RCP",
    primeMinister: "PKD",
  },
};
// let key = "population";
// ?Read
// dot operator/square operator
// console.log(countryDetails.countryCode);
// console.log(countryDetails["countryCode"]);

// console.log(countryDetails[key]);

// ?Add
// countryDetails.flagShape = "angular";
// countryDetails["literacy"] = 80;

// ?Update (Upsert=> Update or Insert)
// countryDetails.name = "Japan";
// countryDetails["capital"] = "Tokyo";

// ?Delete
// delete countryDetails.capital;
// delete countryDetails["countryCode"];

// delete countryDetails.nationalGame;
// console.log(countryDetails.governmentDetails.president);
// console.log(countryDetails["governmentDetails"]["president"]);

// countryDetails.governmentDetails.president = "BDB";

// countryDetails.governmentDetails["vicePresident"] = "RSY";

// delete countryDetails.governmentDetails.primeMinister;

// delete countryDetails["governmentDetails"];
// console.log(countryDetails);
