// // learning async code in action how works
// console.log(1);
// console.log(2);

// setTimeout(() =>{
//     console.log('callback function fired');
// } , 2000);

// console.log(3);
// console.log(4);

// ________________________________________
// making http request

const getTodos = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      // console.log(request, request.readyState);
      if (request.readyState === 4 && request.status === 200) {
        // converting json file to object
        const data = JSON.parse(request.responseText);
        
        resolve(data);
      } else if (request.readyState === 4) {
        reject('error getting source');
      }
    });

    request.open("GET", resource);

    request.send();
  });
};

getTodos('todos/luigi.json').then(data => {
  console.log('promise resolved:' , data);
}).catch(err =>{
  console.log('promise rejected:' ,err);
});

// promise example

// const getSomething = () =>{

//   return new Promise((resolve,reject)=>{
//     // fetch something
//     resolve('some data');
//     // reject('some error');
//   });

// };

// the first function in then method is for resoleve and the scond one is for reject

// getSomething().then((data)=>{

//   console.log('this is ' , data);
// }, (err)=>{
//   console.log(err);
// });

// another way of writting function above

getSomething()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
