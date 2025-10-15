//Asynchronous and Synchronous  Scope.
// Java script executes synchronous
//...................Synchronous..............................
// It meaans line by line execution
let a = 10; // first 
let b = 20 // Second 
let result = a + b; // Thirrd 

console.log(result); // Fouth Meaning it follows a systematic process 1 by 1
console.log("-------------------------------------------------------");

function task1()
{
    console.log("Task1 Started...");

    let start = Date.now();
    let delay = 5000;
    let end = start + delay;

    console.log('Task1 executing..');
    while(Date.now() <= end) //You read .....as long as ..........this condition is met it will run if it doesnt it wont run
    {

    }
    console.log('Task1 Completing..');
}

function task2()
{
    console.log("Task2 Started...");

    let start = Date.now();
    let delay = 3000;
    let end = start + delay;

    console.log('Task2 executing..');
    while(Date.now() <= end) //You read .....as long as ..........this condition is met it will run if it doesnt it wont run
    {

    }
    console.log('Task2 Completing..');
}
function task3()
{
    console.log("Task3 Started...");

    let start = Date.now();
    let delay = 1000;
    let end = start + delay;

    console.log('Task3 executing..');
    while(Date.now() <= end) //You read .....as long as ..........this condition is met it will run if it doesnt it wont run
    {

    }
    console.log('Task3 Completing..');
}

task1();
task2();
task3();
console.log('---------------------------------------------------------------------')
console.log('---------..................Asynchronous.............-----------------')
console.log('---------------------------------------------------------------------')

//...................Asynchronous................ FEATURES FROM THE BROWSER SAME AS NODE JS BUT OUTSIDE THE BROWSER.............
// WEB API Its a set of functions and toolswhich you can use, which js cant provide
// one of the web API IS THE ................DOM ...............feature 
// one of the web API IS THE ..................TIMER ..................feature 
// one of the web API IS THE ..................FETCH ..................feature Interaction with other API


function fun1(){
    console.log("Fun1 execution Started");
    console.log("Fun1 execution Completed");
}
function fun2(){
    console.log("Fun2 execution Started");
    let start = Date.now();
    let delay = 5000;
    let end = start + delay;

    while(Date.now() <= end)
    {

    }
    console.log("Fun2 execution Completed");
}
function fun3(){
    console.log("Fun3 execution Started");
    console.log("Fun3 execution Completed");
}
fun1()
setTimeout(fun2,2000)
fun3()


// More complex example 2 function synchronously and 2 function asychronously
console.log('---------------------------------------------------------------------')
console.log('------------------------More Practice on callbacks ------------------')
console.log('---------..................Asynchronous.............-----------------')
console.log('---------------------------------------------------------------------')

function funA()
{
    console.log("FunA is Starting Execution...");
    console.log("FunA is Ending Execution...");
}
function funB()
{
    console.log("FunB is Starting Execution...");
    let start = Date.now();
    let delay = 5000;
    let end = start + delay;
    while(Date.now <= end)
    {

    }
    console.log("FunB is Ending Execution...");
}
function funC()
{
    console.log("FunC is Starting Execution...");
    let start = Date.now();
    let delay = 5000;
    let end = start + delay;
    while(Date.now <= end)
    {

    }
    console.log("FunC is Ending Execution...");
}
function funD()
{
    console.log("FunD is Starting Execution...");
    console.log("FunD is Ending Execution...");
}
funA();
setTimeout(funB,5000);
setTimeout(funC,2000);
funD();
// Settimeout is only called when the call stack is empty but 
// setInterval is called even when the stack is empty   
//clearInterval is to break the interval 

function fan()
{
    console.log("Fecthing Data...");
}
let intervalD = setInterval(fan,2000);
setTimeout(() => clearInterval(intervalD),10000);
















