//Comparison
let age = 25;
console.log(age ==18);

let userName = "Mark";
let entered_userName = "Markk";
console.log(userName == entered_userName);

console.log(5 == '5');
console.log(true == 1);
console.log(true == 13);// loose equality
console.log(true === 1); // strict equality

console.log(true == '1');// loose equality boolean with string

//Null and Undefined
console.log(null == undefined); // true
console.log(null === undefined); // false

//empty string
console.log('' == 0); // true
console.log('' === 0); // false

//boolean with empty string
console.log(true == ''); // false
console.log(true === ''); // false
console.log(false == ''); // true
console.log(false === ''); // true

//null and false
console.log(null == false); // false
console.log(null === false); // false

//undefined and zero
console.log(undefined == 0); // false
console.log(undefined === 0); // false

//NaN Comparison
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false

// String and Boolean
console.log('true' == true); // false Reason I s beause 'true' is a string converted to an Number("True") which is NaN= true which is 1 hence False
console.log('false' == false); // false
// string Numbers and Numbers
console.log('123' == 1); // false Reason is because '123' is a string converted to a Number("123") which is 123 hence False
console.log('010' === 10); // false Reason is because '010' is a string converted to a Number("010") which is 10 hence False
console.log('010' == 10); // true Reason is because '010' is a string converted to a Number("010") which is 10 hence True

//Number and Null
console.log(0 == null); // false Reason is because 0 is a number and null is not a number hence False null is a special value
console.log(0 == undefined); // false Reason is because 0 is a number and undefined is not a number hence False
