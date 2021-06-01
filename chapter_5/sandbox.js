// object literals

let user = {
    name:'mona',
    age:20,
    email: 'monaakbarpour1@gmail.com',
    location:'solothurn',
    blogs: ['why mac and chees rules' , '10 things to make with marmite']
};

console.log(user);
console.log(user.name);

// user.age = 35;
console.log(user.age);

// the other way to acces to the name in object
console.log(user['name']);
user['name'] = 'chun-li';
console.log(user.name);

console.log(typeof user);
