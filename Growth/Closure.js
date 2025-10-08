function fun1()// functions are first class citizens and object hence can return another function as an output
{
    console.log('Inside fun1()');
    function fun2()
    {
        console.log('Inside fun2()');
    }
    return fun2
}

exmp = fun1();
exmp();

//CLOSURE
//Once the function is returned memory is deleted, but it forms a closure around  so that the 
// Innerfunction can access what was on the outer function 
// In the outer function the outerVar is lexical scope which is stored in the memory so that 
// the innerFunction can access it even after returning
function outerFunction()
{
    console.log('Outer function Started execution');
    let outerVar = 10;

    function innerFunction()
    {
        console.log('Inner function Started execution');
        console.log("outerVar:",outerVar);
        console.log('Inner function Finished execution');
    }
    console.log('Outer function Finished execution');// pay attection to the output and will understand what happens with closures
    return innerFunction;
}

closure = outerFunction();
closure();

console.log('--------------------------------------Practising Closure-------------------------------------')

function Out() {
    console.log('Outer function Started execution');
    console.log('Outerfunction');
    console.log('Outer function Finished execution');
    function medium() {
        console.log('Medium function Started execution');
        console.log('Center');
        console.log('Medium function Finished execution');
        function inn() {
            console.log('INN function Started execution');
            console.log('Innerfunction');
            console.log('INN function Finished execution');
        }
        return inn;
    }
    return medium;
}

let A = Out(); // A = medium
let B = A();   // B = inn
B();           // calls inn → prints "Innerfunction"