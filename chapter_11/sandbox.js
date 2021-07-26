// // dates & times

// const now = new Date();

// console.log(now);

// console.log(typeof now);

// // years, months, day, times
// console.log('getFullYear:' , now.getFullYear());
// // ******i am in july and the result of getMonth is 6 remember javascrip is zero based******
// console.log('getMonth:' , now.getMonth());
// console.log('getDate:' , now.getDate());
// console.log('getDay:' , now.getDay());
// console.log('getHours:' , now.getHours());
// console.log('getMinutes:' , now.getMinutes());
// console.log('getSeconds:' , now.getSeconds());

// // timestamps
// console.log('timestamp:', now.getTime()); 

// // date strings
// console.log(now.toDateString());
// console.log(now.toTimeString());
// console.log(now.toLocaleString());

// ____________________________________________________________________--
// timestamps

// const before = new Date('February 1 2019 7:30:59');
// const now = new Date();

// // console.log(now.getTime(),before.getTime());

// const diff = now.getTime() - before.getTime();
// console.log(diff);

// // 1 second = 1000 milisecond  1 min = 60 second
// const mins = Math.round(diff / 1000/ 60); //minute
// const hours = Math.round(mins / 60); //hour
// const days = Math.round(hours / 24); //hour
// console.log(mins, hours , days);

// console.log(`the blog was written ${days} ago`);

// // converting timestamps into date objects
// const timestamp = 1675938474990;
// console.log(new Date(timestamp));
// ___________________________________________
// const clock = document.querySelector('.clock');

// const tick = () => {

//     const now = new Date();

//     const h = now.getHours();
//     const m = now.getMinutes();
//     const s = now.getSeconds();

//     const html = `
//         <span>${h}</span> :
//         <span>${m}</span> :
//         <span>${s}</span>
//     `;

//     clock.innerHTML = html;

// };

// // calling function every second
// setInterval(tick, 1000);
// ________________________________________

// if you want this part work comment out the <script src="http://cdn.date-fns.org/v1.9.0/date_fns.min.js"></script> in html
const now = new Date();

// console.log(dateFns.isToday(now));

// formatting options
console.log(dateFns.format(now , 'YYYY'));
console.log(dateFns.format(now , 'MMMM'));
console.log(dateFns.format(now , 'dddd'));
console.log(dateFns.format(now , 'Do'));
console.log(dateFns.format(now , 'dddd Do MMMM YYYY'));

// comparing dates
const before = new Date('februray 1 2019 12:00:00');

// addSuffix adds 'ago' to the end of the time in console
console.log(dateFns.distanceInWords(now , before,{addSuffix:true}));
