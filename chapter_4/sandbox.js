// **the diference between function declaration and function expression is that we can call the function declaration before it declares and this works because it is hoisting the function but in function expression is difference

//function expression
// *anything that declares in variable we call it expression and at the needs semicolon
const speak =function(){
    console.log('good day!');
};

greet();

speak();

// function declaration
// *this function is not an expression that is why it does'nt need semicolon
function greet(){
    console.log('hello there');
}