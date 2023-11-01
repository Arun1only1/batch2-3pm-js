// promise => something that happens in future
// node=> node is single threaded
// big task => loop run for billion times,image processing, api hit
// blocking
// achieves non blocking through event loop

// scenario 1: big task
// console.log("A");

// for (let i = 0; i <= 100000000000000; i++) {
//   console.log(i);
// }

// console.log("C");

// scenario 2: running sthg in future
// Stack => Last In First Out(LIFO)
// Queue => First In First Out(FIFO)
console.log("A");

setTimeout(() => {
  console.log("B");
}, 1000);

setTimeout(() => {
  console.log("C");
}, 10);

console.log("D");
