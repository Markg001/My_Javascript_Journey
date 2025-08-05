// Understanding scope
// 
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

function outer(){
    let outer = 'Kimeria'
    console.log(outer);
    console.log(inner);
    console.log(firstName);
    function inner(){
        let inner =  'Kagumba';
        console.log(inner);
        console.log(firstName);
        console.log(outer);
    }
    inner();
};
outer();