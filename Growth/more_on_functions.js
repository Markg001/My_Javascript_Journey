//Types of functions
//Function Declaration
function add(a,b)
{
    return a+b;
}
console.log(add(10,9));
// FUNCTION EXPRESSION
let add = function(a,b)
{
    return a+b
}
console.log(add(10,8))

//ARROW FUNCTION
let add = (a,b) =>
{
    return a+b;
}
console.log(add(50,10));
//can also be writen in 1 line
let add = (a,b) => a+b;
console.log(add(10,200));

// IIFE FUNCTION
//immediately invoked function expression
// it is similar to function expression but a bit different 
(function()
{
    console.log('I run when called')
})()

