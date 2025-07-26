//DATE

let mydate = new Date()
console.log(mydate);
console.log(mydate.toDateString());
console.log(mydate.getMonth());
console.log(typeof mydate);   //object

//let myowndate = new Date(2023,0,29)// create date 
let myowndate = new Date(2025,6,4,5,6,7)
// console.log(myowndate.toLocaleString()); this for creating both date and time

let mytimestamp = Date.now()
console.log(mytimestamp);

