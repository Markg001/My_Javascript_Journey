// Dimension means the amount of data or information required to access the contents inside the array
let ar = ["Joe", "Jack", "Jim", "Jill", "Jiffy"]; // This is a One dimensional array ? Give me a name of a student in index 3? 
let arr = [
    [25,30,22],
    [23,31,24],
    [26,30,20]
]; //Creating an Array inside anaother array known as Multidimensional array, or nested array
let i;
let j;
for(i=0;i<arr.length;i++)
{
    for(j=0;j<arr[i].length;j++)
    {
        console.log(arr[i][j]);
    }
}
console.log('--------------------------------------------------------------------------------------------------------------------')
// three dimension array.....................................//

let a = [
    [
        [50,70],
        [65,87]
    ],
    [
        [90,45],
        [80,30]
    ]
];

let x;
let y;
let z;
for(x = 0;x<a.length;x++)
{
    for(y=0;y<a[x].length;y++)
    {
        for(z=0;z<a[x][y].length;z++)
        {
            console.log(a[x][y][z]);
        }
    }
}
console.log('--------------------------------------------------------------------------------------------------------------------')
//..............Practice............................
//Task:
// Write a JavaScript program using three nested for loops to:

// Print each number in the array.

// Calculate and display the sum of all numbers in the array.
let sum = 0;
let numbers = [
    [
        [2, 4, 6],
        [8, 10, 12]
    ],
    [
        [1, 3, 5],
        [7, 9, 11]
    ]
];
let t;
let e;
let r;
for (t=0;t<numbers.length;t++)
{
    for(e=0;e<numbers[t].length;e++)
    {
        for(r=0;r<numbers[t][e].length;r++)
        {
            sum = sum + numbers[t][e][r];
            console.log(numbers[t][e][r]);
            console.log(`numbers[${t}][${e}][${r}] = ${numbers[t][e][r]}`);

        }
    }
}
console.log("Sum =", sum);


