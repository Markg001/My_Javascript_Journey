
let a = {
    name : 'benz',
    cost : 200,
    mileage :2.9,

    start : function(){
        console.log('car is staring');
    },
    accelerate : function(){
        console.log('car is accerlerating');
    },
    stop : function(){
        console.log('car is stoping');
    }
}; // the object

console.log(a.name);
console.log(a.cost);
console.log(a.mileage);

a.start();

// /lets take an example of a student

let b = {
    name : 'Mark',
    grade : 'A',
    age : 20,

    coding : function(){
        console.log('Mark Loves to code..');
    },
    swimming : function(){
        console.log('Teaching swimming is his hobby');
    },
    skydiving : function(){
        console.log('Skydiving ! mmh sounds Interesting');
    }
}
console.log(b.name);
console.log(b.grade);
console.log(b.age);

b.coding();
b.swimming();
b.skydiving();

// PASS BY VALUE

let x = 100;
let y;
y = x; // Assignment starts from right to left in javascript.
// This is pass by value.
console.log(x);
console.log(y);

// PASS BY REFERENCE 
//This works by object 

let m = {
    name : 'boen',
    flight : 99,
    passangers: 300,
}
console.log(m.name);
let r;
r = m;
console.log(m);
console.log(r); // this is pass by reference if you look at from the memory point of view it wont allocate.
// FUCTIONS AS OBJECT OR FIRST CLASS CITIZENS
// SHOULD MEET  ALL THE 3 VALUES INODER TO BE FIRST CLASS CITIZEN 
// 1. STORED IN VARIABLE
// 2. PASSED TO FUNCTION AS OBJECT
// 3. RETURNED FROM FUNCTION
function exmp(){
    let j = {
        name : 'jet',
        cost : 100,
        milleage : 23,
    };
    return j;
};

console.log(exmp());
console.log('------------------------------ Function as an object -------------------------------');

// Function as an object 

function add1(a,b){
    console.log(a+b);
};
add1(9,8);
let add2;
add2 = add1;// creating a reference
console.log(add2(10,9)); 

console.log('--------------------------------Passing functions as arguments-------------------------------');

function exmpl(fun){// This is a higher Order function
    fun(100,200);
};

function add(a,b){// this is a call back function 
    console.log(a+b)
};

exmpl(add);

