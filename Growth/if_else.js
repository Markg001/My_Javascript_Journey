//Conditional Statements

/*if(Condition)// condition is to check where the age is greater than 18 
{

}*/
let age = 20;
if (age >= 18)
{
    console.log('Welcome to the Party!');
}

//If Else

let isVIP = false;
if (isVIP ==true)
{
    console.log('Welcome to the VIP');
}
else
{
    console.log('Welcome to the Regular');
}

// if elseif else
let ages = 12
if ( ages < 12)
{
    console.log('Child');
}
else if(ages >= 12 && ages <= 65)
{
    console.log('Adult');
}
else 
{
    console.log('Senior citizen');
}
// Switch Statement 
let useRole = "Student";
/*if (useRole == 'admin')
{
    console.log('Full Acess Granted');
}
else if( useRole =='editor')
{
    console.log('editor access granted');
}
else if(useRole == 'author')
{
    console.log('author role granted');
}
else 
{
    console.log('Student access granted')
} */
// Very lenghty hence we will look at swithc which is easier
// Now Switch
switch(useRole)
{
    case "admin":
        console.log('Full Acess Granted');
        break;
    case "editor":
        console.log('editor access granted');
        break;
    case "Author":
        console.log('author role granted');
        break;
    case "Student":
        console.log('Student access granted');
        break;
    default:
        console.log('NON MATCHED');
}

//Practise 2
let dayoftheWeek = "Tuesday";
/*switch(dayoftheWeek)
{
    case 'Monday':
        console.log('Happy Monday');
        break;
    case 'Tuesday':
        console.log('Midweek');
        break;
    case 'Wednesday':
        console.log('Midweek');
        break;
    case 'Thursday':
        console.log('Midweek');
        break;
    case 'Friday':
        console.log('Thank God its Friday');
        break;
    case 'Sarturday':
        console.log('Great weekend');
        break;
    case 'Sunday':
        console.log('Great weekend');
        break;
    default:
        console.log('You skipped a day');
}*/

switch(dayoftheWeek)
{
    case 'Monday':
        console.log('Happy Monday');
        break;
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
        console.log('Midweek');
        break;
    case 'Friday':
        console.log('Thank God its Friday');
        break;
    case 'Sarturday':
    case 'Sunday':
        console.log('Great weekend');
        break;
    default:
        console.log('You skipped a day');
}

// Ternary Operator
 let miaka = 20;
 let message;
 if (miaka >= 18) //Condition
{
    message = 'Can Vote'; //Expression 1
}
else
{
    message = 'Cannot Vote';//Expression 2
}
console.log(message)

// so
//condition? expression1: expression2

message = miaka>=18 ? 'Can Vote!' : 'Cannot vote!';
console.log(message)