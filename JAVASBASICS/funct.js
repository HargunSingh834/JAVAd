function myname() {  // function declaration and definition
    // console.log("HARGUN");
    // console.log("SINGH");    
}
myname()  //function call
myname //function reference
function add(number1,number2) {  // when we pass a value in function definition 
                                //   its called as parameters 
// console.log(number1+number2);  
}

add("3",4) //when we pass a values in a function call its called as arguments

function add(number1,number2) {
  
    // let result=number1+number2
    // return result
    // OR 
    return number1+number2
}  
const result=add(2,4)
// console.log("Result:",result);

function myloggedin(username) {
    return username
}
// console.log(myloggedin("hargun"))

// function calculatecart(num1) {

// function calculatecart(...num1) {    ///it gives as an array of all elements
function calculatecart(val1, val2,...num1) {    /// rest or dot operator --->it gives as an array of all elements

    return num1
}
// console.log(calculatecart(200));                 
// console.log(calculatecart(200,444,544,4445));                 

//function wuth objects
const user={
    username:"hargun",
    price:"212"
}
function handlefunctobject(anyobject) {
    // console.log(`username is ${anyobject.username} and price id ${anyobject.price}`);
       
}
// handlefunctobject(user)
//OR
handlefunctobject({
    username:"harsingh",
    price:21221
})

// functions with arrays
const myarray=[100,23233,545,664]
function return2ndelement(getarray) {
    return getarray[1]
    
}
// console.log(return2ndelement(myarray));
 console.log(return2ndelement([232,32323,3213,343]));
