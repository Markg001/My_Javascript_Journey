// shallow copy => Creatinga a copy  there are 2 methods 
// 1.  spread Operator[...]
//2. Slice Method 
// They are both shallow copy 
//Takong an example of both shallow copy

let a = [10,20,30,40,50];
let a1 = [...a];
console.log(a)
console.log(a1)
let b1 = a.slice();
console.log(b1) // both instances created a copy of a

let ar1 = [[10,20],[30,40]];
console.log(ar1);
let ar2=ar1.slice()
console.log(ar2);
ar1[1].push(99);
console.log(ar1);
console.log(ar2);
console.log(".............................................................................................")
//Note that when we change ar1 also ar2 changes unlike the first time. In nested array it copies the reference of the ar1 an not the actual content or rather number hence called the shallow copy 
// very important for future coding
//...........................................................
//...........DEEP COPY....................................
//...........................................................
// WE WILL USE THE SAME EXAMPLE 
//we will use a function called structureClone a build in function
let ar3 = structuredClone(ar1);
console.log(ar3);
ar1[1].push(77);
console.log(ar3);
console.log(ar1);

console.log(".............................................................................................")
let b = [{name: "Ann"}, {name:"Ben"}];
console.log(b);
let bB = [...b];
console.log(bB);
let b2 = structuredClone(b);
console.log(b2);
b2.push({name:'Rohit'});
console.log(b2)
console.log(b)