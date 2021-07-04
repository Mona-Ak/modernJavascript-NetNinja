// // Filter method
// const scores = [10, 30, 15, 25, 50, 40, 5];

// // const filteredScores = scores.filter((score) =>{
// //     return score > 20;
// // });

// // console.log(filteredScores);

// const users =[
//     {name:'shaun' , premium:true},
//     {name:'yoshi' , premium:false},
//     {name:'mario' , premium:false},
//     {name:'chun-li' , premium:true}
// ];

// const premiumUsers = users.filter(user=> user.premium);

// console.log(premiumUsers);

// _____________________________________________________________
// // map method
// const prices = [20, 10, 30, 25,15,40,80,5];

// // const salePrices = prices.map(price =>price / 2);
// // console.log(salePrices);

// const products =[
//     {name:'gold star' , price:20 },
//     {name:'mushroom' , price: 40},
//     {name:'green shells' , price:30 },
//     {name:'banana skin' , price:10 },
//     {name:'red shells' , price: 50}
// ];

// console.log(products);

// const saleProducts = products.map(product => {
//     if(product.price > 30){
//         return {name: product.name , price : product.price / 2};
//     }else{
//         return product;
//     };
// });

// console.log(saleProducts);

// _____________________________________________________________
// // reduce method
// // const scores = [10,20,60,40,70,90,30];

// // const result = scores.reduce((acc , curr)=>{
// //     if(curr > 50){
// //         acc++;
// //     };
// //     return acc; 
// // }, 0);

// // console.log(result);

//  const scores = [
//      {player:'mario' , score :50},
//      {player:'yoshi' , score :30},
//      {player:'mario' , score :70},
//      {player:'crystal' , score :60},
//      {player:'mario' , score :50},
//      {player:'yoshi' , score :30},
//      {player:'mario' , score :70},
//      {player:'crystal' , score :60},
//      {player:'mario' , score :50},
//      {player:'yoshi' , score :30},
//      {player:'mario' , score :70},
//      {player:'crystal' , score :60},
//      {player:'mario' , score :50},
//      {player:'yoshi' , score :30},
//      {player:'mario' , score :70},
//      {player:'crystal' , score :60}
//  ];

//  const matioTotal = scores.reduce((acc , curr) =>{
//     if(curr.player === 'mario'){
//         acc += curr.score;
//     }
//     return acc;
//  },0);

//  console.log(matioTotal);

// _____________________________________________________________
// find method
// const scores = [10,5,0,40,60,10,20,70];

// const firstHighScore = scores.find(score => score > 50);
// console.log(firstHighScore);

// ______________________________________________________________
// // example 1 - sorting strings
// const names = ['mario', 'shaun' , 'chun-li' , 'yoshi' , 'luigi'];

// // names.sort();
// // names.reverse();
// // console.log(names);



// // example 2 - sorting numbers
// const scores = [10,50,20,5,35,70,45];

// // scores.sort();
// // scores.reverse();
// // console.log(scores);

// // a short way to sorting if you want to reverse it use reverse method or a - b
// scores.sort((a,b) => b - a);
// console.log(scores);

// // example 3 - sorting objects
// const players = [
//     {player:'mario' , score :20},
//      {player:'luigi' , score :10},
//      {player:'chun-li' , score :50},
//      {player:'yoshi' , score :30},
//      {player:'shaun' , score :70},
// ];

// // players.sort((a,b) => {
// //     if(a.score > b.score){
// //         return -1;
// //     }else if(b.score > a.score){
// //         return 1;
// //     }else{
// //         return 0;
// //     };
// // });

// // the short way of sorting
// players.sort((a,b)=> b.score - a.score);
// console.log(players);

// __________________________________________________________
// chaining array
const products = [
    {name: 'gold star' , price:30},
    {name: 'green shell' , price:10},
    {name: 'red shell' , price:40},
    {name: 'banana skin' , price:5},
    {name: 'mushroom' , price:50}
];

// const filtered = products.filter(product => product.price > 20);

// const promos = filtered.map(product => {
//     return ` the ${product.name} is ${product.price / 2} pounds`;
// });

const promos = products
.filter(product => product.price > 20)
.map(product => {
    return ` the ${product.name} is ${product.price / 2} pounds`; 
})

console.log(promos);

