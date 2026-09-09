// Scope       node 03_basics/02_scopes.js

let a = 300
if(true){
    let a = 10
    const b = 20
    //console.log("Inner: ", a)     // Block Scope
}


//console.log(a);     // Global Scope
//console.log(b);
//console.log(c);

//Nested scope

function one(){
    const name = "Sangam"

    function two(){
        website = "IdeologicalArena"
        console.log(name);
    }

    two()
}
//one()


//+++++++++++++++++++++++ intresting ++++++++++++++++
//Declaration of function should be done in a way so that we can access the functions

console.log(addone(2));
function addone(num1){
    return num1 + 1
}



const addTwo = function(num2){
    return num2 + 5
}
 console.log(addTwo(8));