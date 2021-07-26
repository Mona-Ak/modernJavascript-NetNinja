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

const request = new XMLHttpRequest();

request.addEventListener('readystatechange', ()=>{
    // console.log(request, request.readyState);
    if(request.readyState === 4 && request.status === 200){
        console.log(request.responseText);
    }else if(request.readyState ===4){
        console.log('could not fetch the data');
    }
});

request.open('GET' ,'https://jsonplaceholder.typicode.com/todos/');

request.send();