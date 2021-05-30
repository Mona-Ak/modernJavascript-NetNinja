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

// const password = 'password1234';

// if(password.length >= 12){
//     console.log('that password is mighty strong');
// }else if(password.length >= 8){
//     console.log('that password is long enough!');
// }else{
//     console.log('pssword is not long enough');
// };

// ______________________________________
// logical operators - OR || and AND &&

// const password = 'p@ss';

// if(password.length >= 12 && password.includes('@')){
//     console.log('that password is mighty strong');
// }else if(password.length >= 8 || password.includes('@') && password.length > 5){
//     console.log('that password is strong enough!');
// }else{
//     console.log('pssword is not strong enough');
// };

// ___________________________________________________
// logical NOT (!)

// let user = false ;

// if(!user){
//     console.log('you must be logges in to continue');
// }

// console.log(!true);
// console.log(!false);

// ___________________________________________________
// break and continue

// const scores = [50,25,0,30,100,20,10];

// for(let i = 0; i < scores.length; i++){

//     if(scores[i] === 0){
//         continue;
//     }

//     console.log('your score:' , scores[i]);

//     if(scores[i] === 100){
//         console.log('congrats, you got the top score!');
//         break;
//     }

// }

// _______________________________________________
// switch statements
// const grade = '50';

// switch (grade)  {
//     case "50":
//         console.log("you got an A!");
//         break;
//     case "B":
//         console.log("you got an B!");
//         break;
//     case "C":
//         console.log("you got an C!");
//         break;
//     case "D":
//         console.log("you got an D!");
//         break;
//     case "E":
//         console.log("you got an E!");
//         break;
//     default:
//         console.log('not a valid grade');
// }

// ____________________________________________
// variables & block scope
// const age = 30;

// // *we are allow to do redefine the variable inside a code block even though it's got the same name

// // *var does not have block scope
// if(true){
//     const age = 40;
//     const name = 'mona'
//     console.log('inside 1st code block:' , age ,name);

//     if(true){
//         const age = 50;
//         console.log('inside 2nd code block:',age)
//     }

// }

// console.log('outside code block:' , age ,name );
// ________________________________________________



