// // learning async code in action how works
// console.log(1);
// console.log(2);

// setTimeout(() =>{
//     console.log('callback function fired');
// } , 2000);

// console.log(3);
// console.log(4);

// ________________________________________
// // making http request

// const getTodos = (resource) => {
//   // we are using promise because Promises are used to handle asynchronous operations in JavaScript.
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener("readystatechange", () => {
//       // console.log(request, request.readyState);
//       if (request.readyState === 4 && request.status === 200) {
//         // converting json file to object
//         const data = JSON.parse(request.responseText);
        
//         resolve(data);
//       } else if (request.readyState === 4) {
//         reject('error getting source');
//       }
//     });

//     request.open("GET", resource);

//     request.send();
//   });
// };

// // chaining promises
// getTodos('todos/luigi.json').then(data => {
//   console.log('promise 1 resolved:' , data);
//   return getTodos('todos/mario.json');
// }).then(data =>{
//   console.log('promise 2 resolved:' , data);
//   return getTodos('todos/shaun.json');
// }).then(data =>{
//   console.log('promise 3 resolved: ',data);
// }).catch(err =>{
//   console.log('promise rejected:' ,err);
// });

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

// getSomething()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// _________________________________________________________
// async & await

// ********{"async and await make promises easier to write"}*******
// ********{async makes a function return a Promise}********
// ********{await makes a function wait for a Promise}*******

// const getTodos = async ()=>{

//   const response = await fetch('todos/luigi.json');

//   // this if statement is for fetch error
//   // The throw statement allows you to create a custom error.
//   if(response.status !== 200){
//     throw new Error('can not fetch the data');
//   }

//   const data = await response.json();
//   return data;

// };

// // err.message tells us where is the error in json file
// getTodos()
// .then(data =>console.log('resolved :',data))
// .catch(err => console.log('rejected :', err.message));


// // fetch api
// // it is also promise 
// fetch('todos/luigi.json').then(response => {
//   console.log('resolved' , response);
//   // return response.json(); returns the promise
//   return response.json();
// }).then(data =>{
//   // here we can get the real data after returning the response
//   console.log(data);
// }).catch(err =>{
//   console.log('rejected' , err);
// });
