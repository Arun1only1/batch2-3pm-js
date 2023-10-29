// constant => which cannot be reassigned

// const bottleDetails = {
//   brand: "servewell",
//   volume: "1 ltr",
//   color: "blue",
// };

// bottleDetails = {
//   brand: "hello",
// };

// console.log(bottleDetails);

// const firstName = "Rohan";

// primitive => string,number,boolean, null, undefined
// => constant of primitive data  type cannot be changed(immutable/unchangeable)
// complex data type=> object , is changeable(mutable/changeable)
// for all data types constants are not re assignable

// const footballDetails = {
//   brand: "Jabulani",
//   price: 2500,
// };

// this cannot be achieved
//throws "Assignment to constant variable."
// footballDetails = "hello";

// footballDetails.color = "black n white";

// console.log(footballDetails);

//  !=======================object copy======================

// const classDetails = {
//   numberOfStudents: 15,
//   for: "MERN",
//   furniture: {
//     bench: 5,
//     table: 2,
//   },
// };

// const class2Details = classDetails;

// class2Details.hasAC = false;

// classDetails.for = "Python";

// console.log(class2Details);

// ?spread operator (...) //its a shallow
// const class2Details = { ...classDetails };

// class2Details.furniture.bench = 15;

// console.log(classDetails);

//? deep copy
// const class2Details = structuredClone(classDetails);

// class2Details.furniture.bench = 15;

// console.log(classDetails);

// create an object about ur best sport,
// bestPlayer
// name
// bestScore

// copy using ... operator
