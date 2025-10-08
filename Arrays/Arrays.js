
// How to access multiple variables in 1 variables
let a = "Mark";
console.log(a);
let arr = ["Mark", "John", "Allan", "Pesh", "Alvin"];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
//Can also Store Number also
let ar =  [20,20,30,50.6,70,600];
console.log(ar[0]);
//Can store sequentially
let arra = ["Mark", true, 45, 60.9, 345];
console.log(arra[1]);

let b = new Array(5);
b[0] = 10;
b[1] = 20;
b[2] = 30;
b[3] = 40;
b[4] = 50;

let i;

for (i=0 ;i<5 ;i++)
{
    console.log(b[i]);
}

//for of loop

for (i=b.length -1 ;i>=0 ;i--)
{
    console.log(b[i]);
}
// This will pick the first ellement [0]
for(let x of b)
{
    console.log(x);
}
//DISTADVANTAGES OF FOR OF LOOP 
//You dont have control over it
// goes only in one dirrection that is ==> start[0]
//Cant jump element or increment by 2 or 3

// Adding an element to an array we use 
// .push  to add from the beginning we us 
// .unshift
let arrr = [10, 20, 30, 40];
console.log(arrr);
arrr.push(50);
console.log(arrr);
arrr.unshift(70);
console.log(arrr);

// to remove an element in an a array we use
// .pop  
// to remove from the beging we will use 
// .shift
arrr.pop(50);
console.log(arrr);
arrr.shift(70);
console.log(arrr);

//................SPLICE..............//
// Accepts 3 element splice(startindex, deleteCount, items)
arrr.splice(2,3,10,10);
console.log(arrr);
arrr.splice(2,1,100,100);
console.log(arrr);

//..............Sorting and finding the array ......................//
//to find .indexOf(element); This will give you the first element
//to find .lastIndexOf(element); This will give you the last element
//to know if something is in an array  .include(element); This will give you the last element


