// loops
// FOR LOOP
console.log('------------FOR LOOP-------------')
let i;
for(i=1; i<=5; i++)
{
    console.log('*');
} 

//While LOOP can read it as long as ..........for understanding
 
console.log('---------------WHILE-----------')
i = 1;
while(i<=5)
{
    console.log('*');
    i++
}

console.log('------------DO WHILE LOOP----------')
i =1
do
{
    console.log('*');
    i++
}while(i<=5);

//Mastering Loops
// row = row + "*";
// row = row + "*";
// row = row + "*";
// row = row + "*";
// console.log(row);
let row;
let j;
let n = 8
for(i=1;i<=n;i++)
{
    row = "";
    for (j=1;j<=n;j++)
    {
        row =row + "*";
    }   
    console.log(row)
}
