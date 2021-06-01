// object literals

// const blogs = [
//     {title:'why mac and chees rules' , likes:30},
//     {title: '10 things to make with marmite' , likes:50}
// ];

// console.log(blogs);

let user = {
    name:'mona',
    age:20,
    email: 'monaakbarpour1@gmail.com',
    location:'solothurn',
    blogs: [
        {title:'why mac and chees rules' , likes:30},
        {title: '10 things to make with marmite' , likes:50}
],
    login:function(){
        console.log('the user loged in');
    },
    logout: function(){
        console.log('the user logged out');
    },
    logBlogs:function(){
        // console.log(this.blogs);
        console.log('this user has written the following blogs :');
        this.blogs.forEach(blog => {
            console.log(blog.title , blog.likes);
        });
    }
};

// // console.log(user);
// // console.log(user.name);

// // // user.age = 35;
// // console.log(user.age);

// // // the other way to acces to the name in object
// // console.log(user['name']);
// // user['name'] = 'chun-li';
// // console.log(user.name);

// // console.log(typeof user);

// user.login();
// user.logout();

// const name = 'mario';
// name.toUpperCase();

user.logBlogs();

// console.log(this);