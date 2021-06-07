// const para = document.querySelector('body > h1');

// console.log(para);

// const paras = document.querySelectorAll('p');

// const errors = document.querySelectorAll('.error');

// console.log(errors);

// ________________________________________________
// // get an element by ID
// const title = document.getElementById('page-title');
// console.log(title);

// // get elements by their class name 
// const errors = document.getElementsByClassName('error');
// console.log(errors);
// console.log(errors[0]);
// // **we can not use forEach function in HTMLcollection but we can use it in nodeList

// // get elements by thei tag name
// const paras = document.getElementsByTagName('p');
// console.log(paras);
// console.log(paras[1]);

// ______________________________________________
const para = document.querySelector('p');

// console.log(para.innerText);
// para.innerText = 'ninjas are awesome!';

const paras = document.querySelectorAll('p');

// paras.forEach(para => {
//     console.log( para.innerText);
//     para.innerText += 'new text';
// });

const content = document.querySelector('.content');

// console.log(content.innerHTML);
// content.innerHTML += '<h2>this is a new h2</h2>'

const people = ['mario' , 'luigi' , 'yoshi'];

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`
});

// innerText ===> changes the content of a tag
// ineerHTML ===> changes the content an element
