// Characters are strings
// A string is a sequence of Characters
// There are 3 ways of writing a string 
//.........................ONE...........................
// 1. "Javascript" // Using Double quoates
// 2. 'Javascripts' // Using Single Quoates
//3. `Javascripts`// Using Backticks [`]
// Using back ticks you can create Sting Literal Template
let s1 = 'is best Marks Language';
let s2 = `Javascript, ${s1}`;
console.log(s2);

//...........................STRING INTERNING.....................
let s3 = 'Mark';
let s4 = 'Mark';
let s5 = new String('Mark');
console.log(s3 == s4);//true
console.log(s3 == s5);//true
console.log(s3 === s4);//true
console.log(s3 === s5); //false
console.log(typeof s3); //string
console.log(typeof s5);// object
//Strings In Javascripts are Immutabel

// Lets assume we have a front end to collect the name email and a short bio 

let userInput = " Alice Johnson |  Alicejohnsom@gmail.COM | I love javascript and looking forward to understanding strings !";
let parts = userInput.split("|");
console.log(parts);
let name = parts[0].trim();
console.log(name);
let email = parts[1].trim();
console.log(email);
let bio = parts[2].trim();
console.log(bio);

name = name.toUpperCase();
email = email.toLowerCase();
console.log(email);
// To check of the bio data includes a specific word 
let check = bio.includes("javascript");
let checkJS = bio.includes("coffee");
console.log(check);
console.log(checkJS);
console.log('--------------------------------------------------------------------')
// To check where javascript is
console.log(bio.indexOf("Javascript"));
console.log(bio.lastIndexOf("Javascript"));
