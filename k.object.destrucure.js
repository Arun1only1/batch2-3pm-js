// ?scenario 1
// const laptopDetails = {
//   name: "GF638RD",
//   brand: "MSI",
//   processor: "i7",
//   generation: 8,

// };

// let name = "Sahil";
// object destructure
// const { name: laptopName, brand, processor, generation } = laptopDetails;

// console.log(laptopDetails);
// console.log(`I have a laptop named ${laptopName} which is from ${brand}.`);

// Create an object named bikeDetails with properties
// name => FZ250
// brand => Yamaha
// cc =>249cc

// using object destructuring
// print it like 'I have FZ250 bike
// from Yamaha whose cylinder volume is 249cc"

//?scenario 2: nested object
const laptopDetails = {
  name: "GF638RD",
  brand: "MSI",
  processor: "i7",
  generation: 8,
  storage: {
    primary: "16GB",
    secondary: {
      hdd: "1TB",
      ssd: "500Gb",
    },
  },
};

const {
  name,
  storage: {
    secondary: { hdd },
  },
} = laptopDetails;

console.log(hdd);
