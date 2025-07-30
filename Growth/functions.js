//functions  no output no input
let a = 200;
let b = 100;

function add()
{
    let c;
    c = a + b;
    console.log(c);
}
add();
//functions  no input but their is output
function add()
{
    let c;
    c = a + b;
    return c;
}
let result = add()
console.log(result);
//functions  their is input but their is no output

function add(x,y)
{
    let c;
    c = x+y;
    console.log(c)
}
//let a =100
//let b = 200
//add(a,b)
//or
add(100,200)
//functions  their is input but their is no output
function add(x,y)
{
    let c;
    c = x+y;
    return c;
}
//let a =100
//let b = 200
//add(a,b)
//or
let res = add(100,200);
console.log(res)

// Why do we need functions 
//example
function studGrade(studentMax,totalMax)
{
    let totalPercentage= (studentMax/totalMax)*100
    if(studentMax>=90)
    {
        totalPercentage = 'A'
    }
    else if(studentMax>=80)
    {
        totalPercentage = 'B'
    }
    else if(studentMax>=70)
    {
        totalPercentage = 'C'
    }
    else if(studentMax>=60)
    {
        totalPercentage = 'D'
    }
    else if(studentMax<=50)
    {
        totalPercentage = 'F'
    }
    console.log(totalPercentage)
}
studGrade(67,100)
