// object literals

// // const blogs = [
// //     {title:'why mac and chees rules' , likes:30},
// //     {title: '10 things to make with marmite' , likes:50}
// // ];

// // console.log(blogs);

// let user = {
//     name:'mona',
//     age:20,
//     email: 'monaakbarpour1@gmail.com',
//     location:'solothurn',
//     blogs: [
//         {title:'why mac and chees rules' , likes:30},
//         {title: '10 things to make with marmite' , likes:50}
// ],
//     login:function(){
//         console.log('the user loged in');
//     },
//     logout: function(){
//         console.log('the user logged out');
//     },
//     logBlogs:function(){
//         // console.log(this.blogs);
//         console.log('this user has written the following blogs :');
//         this.blogs.forEach(blog => {
//             console.log(blog.title , blog.likes);
//         });
//     }
// };

// // // console.log(user);
// // // console.log(user.name);

// // // // user.age = 35;
// // // console.log(user.age);

// // // // the other way to acces to the name in object
// // // console.log(user['name']);
// // // user['name'] = 'chun-li';
// // // console.log(user.name);

// // // console.log(typeof user);

// // user.login();
// // user.logout();

// // const name = 'mario';
// // name.toUpperCase();

// user.logBlogs();

// // console.log(this);

// ________________________________________________
// // Math object

// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E);

// const area = 5.3;

// console.log(Math.round(area));
// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));

// // random nembers

// const random = Math.random();

// console.log(random);
// // the best way to take random number between 1-100
// console.log(Math.round(random * 100));
// ______________________________________________
// primitive values

// let scoreOne = 50;
// let scoreTwo = scoreOne;

// console.log(`scoreOne: ${scoreOne}` , `scoreTwo: ${scoreTwo}`);

// scoreOne = 100;
// // *it doesn't affect the scoreTwo
// console.log(`scoreOne: ${scoreOne}` , `scoreTwo: ${scoreTwo}`);


// reference values

// *when you change one of the property it changes in both not just one
// const userOne = { name : 'mona' , age:20};
// const userTwo = userOne;

// console.log(userOne,userTwo);

// userOne.name= 'chun-lig ';
// console.log(userOne,userTwo);
