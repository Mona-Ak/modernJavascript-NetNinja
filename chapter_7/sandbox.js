const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/;
// preventDefault is used to for the page to not refreshing
// const username = document.querySelector('#username');

form.addEventListener('submit', e=>{
    e.preventDefault();

    // validation
    const username = form.username.value;
    

    if(usernamePattern.test(username)){
        // feedback good info
        feedback.textContent = 'that username is valid';
    }else{
        // feedback help info
        feedback.textContent = 'username must contain letters only & be between 6 & 12 characters long'; 
    }


    // ______________________________learning part
    // console.log(username.value);
    // we can use the down method to access the value of input inside form without defining it in value
    // console.log(form.username.value);
});

// live feedback
form.username.addEventListener('keyup', e =>{
    
    // console.log(e.target.value , form.username.value); 
    if(usernamePattern.test(e.target.value)){
        form.username.setAttribute('class', 'success');
    }else{
        form.username.setAttribute('class' , 'error');
    }
})



// // testing RegEx
// const username = '33shaunff';
// const pattern = /^[a-z]{6,}$/;

// // let result = pattern.test(username);
// // console.log(result);

// // if(result){
// //     console.log('regex test passed :)');
// // }else{
// //     console.log('regex test failed :(')
// // }

// // the answer of the result is 0 or -1 when is 0 that means true when is -1 that means false
// let result = username.search(pattern);  
// console.log(result);
