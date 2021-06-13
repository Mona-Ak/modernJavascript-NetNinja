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
// const para = document.querySelector('p');

// // console.log(para.innerText);
// // para.innerText = 'ninjas are awesome!';

// const paras = document.querySelectorAll('p');

// // paras.forEach(para => {
// //     console.log( para.innerText);
// //     para.innerText += 'new text';
// // });

// const content = document.querySelector('.content');

// // console.log(content.innerHTML);
// // content.innerHTML += '<h2>this is a new h2</h2>'

// const people = ['mario' , 'luigi' , 'yoshi'];

// people.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`
// });

// // innerText ===> changes the content of a tag
// // ineerHTML ===> changes the content an element

// ______________________________________________
// const link = document.querySelector('a');

// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://www.thenetninja.co.uk');

// link.innerText = 'TheNet Ninja Website';

// const mssg = document.querySelector('p');

// console.log(mssg.getAttribute('class'));
// mssg.setAttribute('class','success');
// mssg.setAttribute('style' , 'color:green;');

// _______________________________________________
// const title = document.querySelector('h1');

// // this way you overright the attribute
// // title.setAttribute('style' , 'margin:50px;');

// console.log(title.style);
// console.log(title.style.color);

// // this way you can add new attribute 
// title.style.margin = '50px';
// title.style.color = 'crimson';
// title.style.fontSize = '60px';

// // this is for removing margin
// title.style.margin = '' ;

// ________________________________________________
// // adding and changing classes
// const content = document.querySelector('p');

// console.log(content.classList);
// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');

// challenge

const paras = document.querySelectorAll('p');

console.log(paras);
paras.forEach(p => {
    if(p.textContent.includes('error')){
        p.classList.add('error');
    }else if(p.textContent.includes('success')){
        p.classList.add('success');
    }
});

const title = document.querySelector('.title');

// the first toggle adds the value to class 
// the second toggle removes the value
title.classList.toggle('test');
title.classList.toggle('test');





