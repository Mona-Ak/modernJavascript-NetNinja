/* for loop */
/* we don't put the semicolone at the end of the loop */

/* for(let i = 0 ; i < 5; i++){
    console.log('in loop :' , i);
}

console.log('loop finished'); */
/* 
const names = ['shaun' , 'mario' , 'luigi'];

for(let i = 0 ; i < names.length ; i ++){
    // console.log(names[i]);
    let html = `<div>${names[i]}</div>`;
    console.log(html)
} */

// while loops

// const names = ['shaun', 'mario', 'luigi'];
// let i = 0;

// while(i < 5){
//     console.log('in loop :', i);
//     i++
// };

// let i = 0;
// while(i< names.length){
//     console.log(names   [i]);
//     i++;
// };
// _____________________________________
// so while loops

// let i = 2;

// do{
//     console.log('val of i is:' , i);
//     i++;
// } while(i < 5);

// _______________________________________
// if statements
// const age = 25;

// if(age > 20){
//     console.log('you are over 20 years old');
// };

// const ninjas = ['shaun' , 'ryu' , 'chun-li' , 'yoshi'];

// if(ninjas.length > 4){
//     console.log("that's a lot of ninjas");
// };

// if else statements
const password = 'password1234';

if(password.length >= 12){
    console.log('that password is mighty strong');
}else if(password.length >= 8){
    console.log('that password is long enough!');
}else{
    console.log('pssword is not long enough');
};


