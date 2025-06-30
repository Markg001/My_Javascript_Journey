let js = 'amazing';

console.log (40 + 9 + 34 - 10);
// Values and Variables
console.log ('Jabaa');
console.log (51);

//Value Is the smallest Unit of information that we have.
//We can store values in varisbles so That we can reuse them over and over again
//Lets Declare a variable
let firstName = 'Mark';
console.log(firstName);
console.log(firstName);
console.log(firstName);
//Naming Variables
//Camelcase Notation start with lowercase then uppercase eg ; firstName
//cannot start with a Number but can contain Numbers Letters underscore_ and a dollarsigh $
// Cannot use Revered Keywords like New or function to fix we can start with _ or $
// we can start a variable with an Uppercase but are reseverd for Object Oriented Programming or for real constants 

// LET THEM BE DESCRIPTIVE
// Example 
let myFirstjob = 'Programmer';
let myCurrrentJob = 'Teacher';

console.log (myFirstjob);
// To Highlight code without deleteing it we use (/* Miiror to get various lines )

//DATA TYPES
//INTERGERS
let ages = (87);
console.log(ages);

// STRINGS

let lastNames = ("Kim");
console.log(lastNames);
// BOOLEAN
let javaScriptIsFun = true;
console.log(javaScriptIsFun);
// TYPEOFF
console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof 'mark');

javaScriptIsFun = 'YES!';
console.log(typeof javaScriptIsFun);
//  UNDEFIND
let year;
console.log(year);
console.log(typeof year);
year = 1911
console.log(year)
console.log(typeof year)
// nul
console.log(typeof null)

// HOW TO dECLARE VARIABLES
// There are three ways to declare variables in JavaScript: `var`, `let`, and `const`.
// `var` is the oldest way and has function scope, while `let` and `const` are block-scoped.
// `let` allows you to reassign values, while `const` is used for variables that should not change.
let age = 30; // Number
age = 31; // Reassigning a variable or Mutatting a variable good for UNDEFINED variables

const birthYear = 1991; // Constant, cannot be reassigned
// birthYear = 1992; // This will throw an error because birthYear is a constant
const job = 'Teaacher'

var lastName = 'Kim'; // Old way, function-scoped
lastName = 'mzae'; // Reassigning a variable declared with var
console.log(lastName);

//OPERATORS Hwlps us to combine Values.
// Arithmetic Operators +*-/
const now = 2025;
const ageMark = now - 2001
const ageJohn = now - 2000
const ageMzae = now - 1999
console.log (ageMark, ageJohn, ageMzae);

console.log(ageJohn*2 + ageMzae / ageMark);

const firstNam = 'Mark';
const lastNam = 'Kim';
console.log(firstNam + ' ' + lastNam)

// Assignment Operators
let y =10+5;
y+=10;
y *=4
y/=2;
y++;
y--;
console.log(y)

// Comparison Operators We use this to produce a boolean value
console.log(ageMark > ageJohn);
console.log(ageMzae > ageJohn);
console.log(ageMzae >= 25);
console.log(ageMzae <= 25);

const isFullAge = ageMark >= 18;
console.log(isFullAge);

























