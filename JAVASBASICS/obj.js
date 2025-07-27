// obj are declare  by literals and constructors
// singleton
//object.create


//object literals
const mysym= Symbol("key1")
const user={
    name:"hargun",
    [mysym]:"mykey1",             //we use [] because at type of checking datatype its gives as string when we not use []
    age:18,
    location:"jammu",
    email:"hargun@gmail.com",
    isloggedin: true
}
// console.log(user.email);        //using dot operator and some times  square brackets when we want o/p as string datatype
// console.log(user["email"]);
// console.log(typeof user[mysym]);  // gives undefined
// console.log(typeof user.mysym);   // gives string
 
// value changed
 user.email="singh@gmail.com"
// Object.freeze(user)  // to remain a same value 

//  console.log(user)
 user.greeting=function(){
    console.log("hello user");
 }

 user.greeting2=function() {
    console.log('hello user , ${this.name}' );
 }
 console.log(user.greeting());
 console.log(user.greeting2());

 
