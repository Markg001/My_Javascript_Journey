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
console.log('------------Mastering Loops----------')
// print a box with no middle section use k for row and m for column and x for number

// ********************
// **       ***      **
// * *     * * *    * *
// *  *   *  *  *  *  *
// *   * *   *   **   *
// *    *    *   **   *
// *   * *   *  *  *  *
// *  *   *  * *    * *
// * *     * **      **
// **       **        *
// ********************
// **      * **      **
// * *    *  * *    * *
// *  *  *   *  *  *  *
// *   **    *   **   *
// *   **    *   **   *
// *  *  *   *  *  *  *
// * *    *  * *    * *
// **      * **      **
// ********************
let k;
let x = 20;
for(k=0;k<x;k++)
{
    row = "";
    let m;
    for(m=0;m<x;m++)
    {
        if(k==0 || k==x-1 || m==0 || m ==x-1 || m== Math.floor(x/2) || k== Math.floor(x/2) || k==m || k+m ==x-1 || k+m == Math.floor(x/2) 
        || k-m == Math.floor(x/2) || k+m== (x-1) + Math.floor(x/2) || m-k== Math.floor(x/2))
        {
            row = row + "*";
        }
        else
        {
            row = row + " ";
        }
    }
    console.log(row);
}


