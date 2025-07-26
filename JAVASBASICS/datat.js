const { useImperativeHandle } = require("react")

let name="hargun"
let age=20
let isloggedin=true

/* ranges 
1.number => 2 to power 52
2.bigint when use use or initialise big numbers
3.string=>""
4.boolean=true/false
5.null=> standard value
6.undefined=>
7.symbol=> to find unique ness

 object

*/

console.log(typeof "hargun")
// console.log(typeof null) -----> obj
console.log(typeof undefined)


///****************DATATYPES **************************///
/*PRIMITIVE
7 types: Sting,Number,Boolean,Null,undefined,symbol,BigInt

REFERENCE TYPES(NON -PRIMITIVE)
Arrays,Obejects,functions
*/


//*****************************MEMORY USED
// in  STACK ALWAYS U GET COPY
//(PRIMITIVE) AND  IN HEAP  (NON -PRIMITIVE) WE ALWAYS GET A REFERNCE

let MYNAME = "HARGUNS"

let anotherMYNAME= MYNAME
anotherMYNAME="SINGH"

console.log(MYNAME)
console.log(anotherMYNAME)
//UPPER FOR STACK IN THIS WE GET COPY AS OP

// THIS IS FOR UNDERSTANDING THE HEAP MEMORY CONCEPT IN THIS WE GET REFRENCE AS OP

let user1={
    email:"hargun@gmail.com",
    name:"hargun"
   
}

let user2=user1
 
user2.email="singh@gmail.com"
console.log(user1.email);
console.log(user2.email);


