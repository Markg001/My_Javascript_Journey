// ............MAP method.............................//
// What is a callback in jabvascript ==> it is a function which is passed as input to another function.
let numbers = [1,4,9,16];

function squareRooot(x) // let result = numbers.map( x => Math.sqrt(x) );    can also be written like this using function express
{
    return Math.sqrt(x);
}

let result= numbers.map(squareRooot)
console.log(numbers)
console.log(result)

//......................FILTER....................//
//
let ages = [32,15,19,12];
function checkAge(q) // in one line let answer = ages.filter(q => {
                                                                //     if (q>18)
                                                                //     {
                                                                //         return true
                                                                //     }
                                                                //     else{
                                                                //         return false
                                                                //     }
                                                                // })
{
    if (q>18)
    {
        return true
    }
    else{
        return false
    }
}
let answer = ages.filter(checkAge);
console.log(answer);
//........................REDUCE METHOD........................//
//WILL REDUCE THE WHOLE ARRAY IN TO A SINGLE VALUE
// we will use let numbers= [1,4,9,16];

let res = numbers.reduce((total,x) => total + x, 0);
console.log(res);

let score = [85,72,90,67];
let hasGradeA = score.some((x) => x>85); // once it finds it will cancle the execution atleast somebody should satisy this condition
console.log(hasGradeA);
let hasPassed = score.every((x) => x>55); // checks everybody 
console.log(hasPassed);

//.............................Sort..........................//
let fruits = ["banana", "apple", "pear", "kiwi"];
fruits.sort();
console.log(fruits); // also works for numbers