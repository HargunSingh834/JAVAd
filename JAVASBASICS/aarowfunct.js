
//this keyword refers current context(values that a variable holds).
const user={
    username:"hargun",
    price:212,

    welcomeMessage: function() {
        oconsole.log(`${this.username} , welcome to urs website`);
        console.log(this);
        
    }

}
// user.welcomeMessage()           //untill this context is same
// user.username="singh"              //but in this we chnage the values or context
// user.welcomeMessage()
//  console.log(this);                      //{}

// function code(){                
// let username="harguns"
//     console.log(this.username);              //method 1------->o/p undefined
    
// }
// code()

// const code= function(){                  //method 2 using this inside the function and same o/p
    // let username="hargun"
    // console.log(this.username);
    

// const code= () => {                       //3. using arrow function 
//     let username="hargun"
//     console.log(this.username);  
// }

// code()

//syntax odf arrow function
//() =>{}


// const addone=(num1,num2) =>{
    // return num1-num2               method 1 when use {curly braces} we need to write return statement
// }
// console.log(addone(7,1));        this is called explicit return in this we use return

// const addone=(num1,num2) => num1-num2      //method 2 in this we not use {} and return 
const addone=(num1,num2) => (num1-num2)       //in this we use (paranthesis)

console.log(addone(7,1));          //this is called implicit return when we don not use return 
