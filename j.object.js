// key and value pair
// object  => complex data type
// => key is also referred as property
// object binds related information into single variable

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

// const countryDetails = {
//   name: "Nepal",
//   population: "3 crore",
//   capital: "Kathmandu",
//   countryCode: 977,
//   isDeveloping: true,
//   officialLanguage: "Nepali",
//   governmentDetails: {
//     president: "RCP",
//     primeMinister: "PKD",
//   },
// };
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

// !================= assignment===========================
// 2.Create an object named myHouseDetails and add following properties
// numberOfRooms
// numberOfMembers
// colorOfHouse
// builtYear
// numberOfStorey

// A.Delete numberOfMembers property
// B.Update numberOfRooms by new value
//  C.Add a  new property called estimatedPriceOfHouse
// D.Print out all properties on the console like “I have a green coloured house        with 9 rooms where 10 people are  living. The house is 3 storey and was built in 2011 with an estimated budget of 2 crores.”

const myHouseDetails = {};
myHouseDetails.numberOfRooms = 5;
myHouseDetails.numberOfMembers = 4;
myHouseDetails.color = "yellow";

myHouseDetails.buildYear = 2010;
myHouseDetails.numberOfStorey = 3;

// ?delete numberOfMembers
// delete myHouseDetails.numberOfMembers;
// delete myHouseDetails["numberOfMembers"];

// ?Update numberOfRooms by new value
// myHouseDetails.numberOfRooms += 3;

// ?Add a  new property called estimatedPriceOfHouse
// myHouseDetails.estimatedPrice = "2 crore";
// myHouseDetails["estimatedPrice"] = "3crore";

// “I have a green coloured house with 9 rooms where 10 people are  living.
//  The house is 3 storey and was built in 2011 with an estimated budget of 2 crores.”

// console.log(
//   `I have a ${myHouseDetails.color} colored house with ${myHouseDetails.numberOfRooms} rooms.`
// );

// string concatenation

// const firstName = "Prasoon";
// const lastName = "Kharel";

// console.log(firstName + " " + lastName);

// const fullName = firstName.concat(" ", lastName);
// const fullName = firstName + " " + lastName;

// const fullName = `${firstName} ${lastName}`;
// console.log(fullName);

// ?3.Can we create an object inside an object. Give an example.
// const battingRecords = {
//   mostHundreds: "Sachin Tendulkar",
//   mostSix: "Rohit Sharma",
// };

// const bowlingRecords = {
//   mostWicket: "Muralidharan",
//   mostSpeed: "Shoib Akhtar",
// };

// const cricket = {
//   batting: battingRecords,
//   bowling: bowlingRecords,
// };

// console.log(cricket.batting.mostHundreds);

//?? defineProperty
// const classRoom = {};
// Object.defineProperty(classRoom, "hasAC", {
//   value: "no",
//   enumerable: false, //shows into console
//   writable: true, // can edit or not
//   configurable: true, //can delete or not
// });

// classRoom.hasAC = "yes";

// delete classRoom.hasAC;

// console.log(classRoom.hasAC);
