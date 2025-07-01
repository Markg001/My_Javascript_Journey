const firstName = "Mark";
const lastName = "Gish";
const birthYear = 1991;
const year = 2025;
const mark = "I'am" + " " + firstName + " " + lastName + ", I am " + (year - birthYear) + " Years old.";
console.log(mark);

const markNew = `I'm ${firstName} ${lastName}, I am ${year - birthYear} Years old.`;
console.log(markNew);
//Back ticks are used for template literals, which allow for multi-line strings and string interpolation.
console.log (`Just testing if It works`);

console.log(`Multiline
string 
testing`);

//Taking a Decision
const age = 15;

if( age >= 18) {
    console.log(`Wamuyu can start Driving lessons 🚓🚓`);
} else {
    const yearLeft = 18 - age;
    console.log(`Koki is too young , wait for ${yearLeft} years to start driving lessons 🚓🚓`);
}

const birthYears = 1991;
let century; // Declare the variable outside the if-else block
if (birthYears<= 2000) {
    century = 20;
} else {
    century = 21;
}   
// console.log(century); // This will throw an error because century is not defined outside the if-else block
// after we declare the variable outside the if-else block, it will work
console.log(century); // This will now work and print the value of century

//Challenge 
// From the first question use if else
const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;
const markBMI = markWeight / (markHeight)*2;
const johnBMI = johnWeight / (johnHeight)*2


if (markBMI > johnBMI) {
    console.log(`Mark's BMI is higher ${markBMI} than John's ${johnBMI}`);
}
else {
    console.log(`John's BMI is higher ${johnBMI} than Mark's ${markBMI}`);
}

const markHigherBMI = markBMI >johnBMI;


const markWeight2 = 78;
const markHeight2 = 1.69;
const johnWeight2 = 85;
const johnHeight2 = 1.76;
const markBMI2 = markWeight2 / (markHeight2 * markHeight2);
const johnBMI2 = johnWeight2 / (johnHeight2 * johnHeight2);


const markHigherBMI2 = markBMI2 > johnBMI2;


if (markBMI2 > johnBMI2) {
    console.log(`Mark's BMI 2 is higher ${markBMI2} than John's ${johnBMI2}`);
} else {
    console.log(`John's BMI 2 is higher ${johnBMI2} than Mark's ${markBMI2}`);
}