// 1. store Mark's and John's mass and height in variables
// 2. calculate both their BMIs using the formula (you can even implement both versions)
//create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
//TEST DATA 1: Mark's weights 78 kg and height 1.69 m, 
// John's weights 92 kg and height 1.95 m tall.
// TEST DATA 2: Mark's weights 95 kg and height 1.88 m tall,
// John's weights 85 kg and height 1.76 m tall.
// BMI = mass / height ** 2

const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;
const markBMI = markWeight / (markHeight)*2;
const johnBMI = johnWeight / (johnHeight)*2
console.log(`Mark's BMI: ${markBMI}`);
console.log(`John's BMI: ${johnBMI}`);

const markHigherBMI = markBMI >johnBMI;
console.log(`Is Mark's BMI higher than John's? ${markHigherBMI}`);

const markWeight2 = 78;
const markHeight2 = 1.69;
const johnWeight2 = 85;
const johnHeight2 = 1.76;
const markBMI2 = markWeight2 / (markHeight2 * markHeight2);
const johnBMI2 = johnWeight2 / (johnHeight2 * johnHeight2);
console.log(`Mark's BMI 2: ${markBMI2}`);
console.log(`John's BMI 2 : ${johnBMI2}`);

const markHigherBMI2 = markBMI2 > johnBMI2;
console.log(`Is Mark's BMI 2 higher than John's? ${markHigherBMI2}`);