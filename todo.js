// TODO: OOP in js(class based objects in js)

//?return multiple value from a function

const getFirstNameAndLastName = (fullName) => fullName.split(" ");

const [fName, lName] = getFirstNameAndLastName("Rohan Gurung");
console.log(fName);
