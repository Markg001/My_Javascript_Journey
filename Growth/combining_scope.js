// Understanding scope
// NESTED FUNCTIONF
let userName = 'Mark';
let userRole = 'Admin'

function Access(){
    let hasAccess = 'false';
    if (userRole === 'Admin'){
        let welcomeMsg = `${userName}, You have admin priviledge`;
        hasAccess =  'True'
        console.log(welcomeMsg);
    }
    console.log("Has Access", hasAccess);
}
Access();

let firstName =  'kim';

function outer(){// Outer function  will have access to the globla scope but no access to innerscope
    let outer = 'Kimeria'
    console.log(outer);
    console.log(inner);
    console.log(firstName);
    function inner(){//  Inner function does have access to only what is within the function  but doesnt have access to outerfunction and global scope
        let inner =  'Kagumba';
        console.log(inner);
        console.log(firstName);
        console.log(outer);
    }
    inner();
};
outer();

