// ? asynchronous => not existing or occurring at the same time.
// pending,success, error

// ?callback
// const getSum = (a, b, callbackFunc) => {
//   let error = true;
//   setTimeout(() => {
//     let sum = a + b;

//     if (error) {
//       callbackFunc("Error aayo", null);
//     } else {
//       callbackFunc(null, sum);
//     }
//   }, 5000);
// };

// getSum(15, 16, (error, result) => {
//   console.log(error, result);
// });

// promise approach (then..catch)

// const promise = new Promise((resolve, reject) => {
//   let error = true;
//   setTimeout(() => {
//     let sum = 2 + 3;

//     if (error) {
//       reject("Something went wrong."); //error case
//     } else {
//       resolve(sum); //success case
//     }
//   }, 1000);
// });

// ? then..catch
// promise
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//? async ..await
// const resolvePromise = async () => {
//   try {
//     const res = await promise;
//     console.log(res);
//   } catch (error) {
//     console.log(error);
//   }
// };

// resolvePromise();

// hitting place holder api
// https://jsonplaceholder.typicode.com/posts

const fetchData = async () => {
  try {
    const response = await fetch(
      "https://imdb-api.com/en/API/Top250Movies/k_adagdra3"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

fetchData();
