//A function which is passed as input to another function is called a callback function 
// the the other function is called as higher-order function
// function fun1() ---------> callback function
// function fun2(fun1) ---------> higher-order function

function add(a,b)
{
    return a+b;
}
function sub(a,b)
{
    return a-b;
}
function mul(a,b)
{
    return a*b;
}
function calc(a,b,callback)
{
    return callback(a,b);
}
add(10,20);
console.log(add(10,20))
console.log(sub(10,20))
console.log(mul(10,20))

console.log(calc(10,20,add))

//CALCULATER------------------------------------------

function circleArea(radius)
{
    return Math.PI * radius * radius;
}
function squareArea(side)
{
    return side * side;
}
function equilateralTriangleArea(side)
{
    return (Math.sqrt(3)/4) * side * side;
}

function calculateArea(value,callback)
{
    console.log(callback(value));
}

calculateArea(5,circleArea);
calculateArea(5,squareArea);
calculateArea(5,equilateralTriangleArea);