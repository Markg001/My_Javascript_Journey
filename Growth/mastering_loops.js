// Practise Practice makes Perfect today I will be revising my for loop expertise to gain more understanding
// we will create all various types of patterns box single line  box triangle and the lastly the all in one
// lets begin 
//first we make a line then a vertical line 
console.log("-----------------------Horizontal----------------------------------------")
let n = 20
let a;
a = ""
for(i=1;i<=n;i++)
{
   a = a + "*";
}
console.log(a)
console.log("-----------------------Vertical----------------------------------------")
let b = " ";
for(b=1;b<=n;b++)
{
    console.log("*")
}

console.log("-----------------------Combination----------------------------------------")
for(b=1;b<=n;b++)
{
    a = " "
    for(i=1;i<=n;i++)
    {
        a = a + "*";
    }
    
    console.log(a);
}

console.log("-----------------------square----------------------------------------")
for(b=1;b<=n;b++)
{
    a = " "
    for(i=1;i<=n;i++)
    {
        a = a + "*";
    }
    
    console.log(a);
}
console.log("-----------------------line square----------------------------------------")
for(b=1;b<=n;b++)
{
    a = " "
    for(i=1;i<=n;i++)
    {
        if(i == n || b == n || b ==1 || i == 1)
        {
            a = a + "*";
        }
        else
        {
            a = a +" ";
        }
    }
    
    console.log(a);
}
console.log("-----------------------all in one----------------------------------------")
for(b=1;b<=n;b++)
{
    a = " "
    for(i=1;i<=n;i++)
    {
        if(i == n || b == n || b ==1 || i == 1 || i==10 || b == 10 || b==i || b+i==n)
        {
            a = a + "*";
        }
        else
        {
            a = a +" ";
        }
    }
    
    console.log(a);
}
console.log("-----------------------Triangle----------------------------------------")