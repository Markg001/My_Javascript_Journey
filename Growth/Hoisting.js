// hoisting is moving forward the declared varible
let a = 100; // this is declaration + initialization 
let b; // this is declaration
b =100 // this is initialization
console.log(a);
// when we put the print first in let in will bring an error
console.log(t);
let t = 100; // an error will occur called reference error saying you first need to declare before initializing 

// we can declare a variable also by using var
var v = 100
console.log(v); // 100

console.log(u);
var v=100; // undefined since javascript gives var an undefined name unlike let whuch is left blank

//DIFFERENCE 
console.log(s);
let s = 100;
console.log(s);
// when Hoisting will become
let x;// I will use another letter to remove the error but it is basically s
console.log(s);
s=100;
console.log(s);
// Output will bring a reference error 

//when using Var
console.log(n);
var n = 100;
console.log(n);
// Hoisting happens 
var n;
console.log(n);
n=100;
console.log(n);// This will work result undefined and 100 as the output
