// var c=30999                                  //{}-------> this is scope
a=334444         //global scope
if(true){    //local scope values under this scope cannot changed untilll we go outside
let a=23
var b=32
// console.log(("inner:",a));

}
// console.log(a); 
// 
// console.log(c);

//nested scope with nested functions

function one(param) {
    const username="hargun"
    function two() {
        const age=3232                  //2nd function excess 1st function variables but 1st cannot
        // console.log(username);
        
    }
    // console.log(age);
    two() 
}
one()
if(true){
    const username = "hargun"
    if(username==="hargun"){
        const age=32
        // console.log(username+age);
        
    }
    // console.log(age);
    
}
// console.log((username));

//************interesting concepts****************//

console.log(addone(5));


function addone(num) {
    return num + 1
    
}
addone(5)
// console.log(5);
addtwo(6)                             //exceptional case and error

const addtwo= function(num){         //functuion with variables declaration
    return num+2
}

