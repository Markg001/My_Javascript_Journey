//Types of scope
//  1. Global scope
// 2. Function scope
// 3. block scope
//1. GLOBAL SCOPE 
let a = 100;
console.log(a);
function fun()
{
    console.log(a);
}
fun();
// it takes the enire program as a whole hense prints 100 2 times
// 2.  FUNCTION SCOPE
// as the name suggests its a within a function
function fun()
{
    var b = 10;
    console.log(b);
}
fun();
// console.log(b);// so this will not work since its outside the function 
// also same to var
// BLOCK SCOPE

let temp = 20;
if(temp> 25)
{
    let coolingTemp = temp -25;
    console.log('Server room needs to be cooled by', coolingTemp,'%');
}
else
{
    let heatingTemp = temp -25;
    console.log('Server room needs to be heated by', heatingTemp,'%');
}

console.log(temp);
// console.log(heatingTemp)// This will bring an error since its not in the if block and else block  it is in the global scope
// in VAR in this case it works // so it only works in BLOCK SCOPE
// it will access the cooling and heating temp how beacuse of hoisting
// since it is hoisted outside its scope 

// EXAMPLE
 function printTillNum(num)
 {
    for(var i = 1;i<=num;i++)
    {
        console.log(i);
    }
    console.log('final value of i = ', i);// if it is let  it will bring and error if it is VAR no error beacuse of var breakes the block
 }
 printTillNum(5);
