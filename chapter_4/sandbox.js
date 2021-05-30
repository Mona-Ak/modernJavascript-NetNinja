// // **the diference between function declaration and function expression is that we can call the function declaration before it declares and this works because it is hoisting the function but in function expression is difference

// //function expression
// // *anything that declares in variable we call it expression and at the needs semicolon
// const speak =function(){
//     console.log('good day!');
// };

// greet();

// speak();

// // function declaration
// // *this function is not an expression that is why it does'nt need semicolon
// function greet(){
//     console.log('hello there');
// }
// ________________________________________________
// // arguments & parameters

// const speak = function(name = 'luigi', time = 'night'){
//     console.log(`good ${time} ${name}`);
// };

// speak();
// speak('mona' , 'morning');

// ______________________________________________
// // returning values

// // const speak = function(name = 'luigi', time = 'night'){
// //     console.log(`good ${time} ${name}`);
// // };

// // *the benefit of return is that we can thake a value and do something with it
// const calcArea = function(radius){
//     return 3.14 * radius**2;

// };

// const area = calcArea(5);
// console.log(area);

// ______________________________________________
// // regular function
// // const calcArea = function(radius){
// //     return 3.14 * radius**2;
// // };



// // arrow function


// // const calcArea = (radius) => {
// //     return 3.14 * radius**2;
// // };

// // * when we have one parameter we can take away the parentheses

// // if we have just one single return we can remove the return and qurly braces even if don't  write the return it will reurns the value

// const calcArea = radius => 3.14 * radius**2;


// const area = calcArea(5);
// console.log('area is :',area);

// // practice arrow functions

// // const greet = function(){
// //     return ' hello, world';
// // };

// const greet = () => 'hello, world';
// greet();
// const result = greet();
// console.log(result);

// // const bill = function(products , tax){
// //     let total = 0;
// //     for(let i = 0; i < products.length ; i++){
// //         total += products[i] + products[i] *tax;
// //     }
// //     return total;
// // }

// const bill = (products, tax) => {
//     let total = 0; 
//     for(let i = 0; i < products.length ; i++){
//         total += products[i] + products[i] *tax;
//     }
//     return total;
// }

// console.log(bill([10,15,30] , 0.2));

// ____________________________________________
// const name = 'mona';

// // functions

// const greet = () => 'hello';

// let resultOne = greet();
// console.log(resultOne);

// // methods

// let resultTwo = name.toUpperCase();
// console.log(resultTwo);

// // *methods are functions which associated with an object pr datatype

// // *the difference is how to call theme

// ___________________________________________
// // callbacks & foreach

// // *when we pass in a function as an argument it is a callbackfunction

// const myFunc = (callbackFunc) => {
//     // do something
//     let value = 50;
//     callbackFunc(value);
// };

// myFunc(value =>{
//     // do something
//     console.log(value);
// });


// let people = ['mario', 'luigi','ryu','shaun','chun-li'];

// const logPerson = (person , index) =>{
//     console.log(`${index} - hello${person}`)
// }

// people.forEach(logPerson);

// _______________________________________________
// get a reference to the 'ul'
// ***be carefull your script tag in html be in body tag otherwise it doesn't work 

const ul = document.querySelector('.people');

const people = ['mario', 'luigi','ryu','shaun','chun-li'];

let html = ``;

people.forEach((person) =>{
    // create html template
    html += `<li style="color:purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;
