// const useremail="hargun.ai"            //in this we not compare any value and assume it as a truthy value
// if (useremail) {                       // and  assuming as a string is true
//   console.log("we got useremail");
// } else{
//     console.log("we dont have a email");
    
// }

//falsy values-----> false,0,-0,Bigint 0n,null,undefined,Nan
 
//truthy values------> "0","false","_",any value inside a string is truthy values,{},[],function(){}

//checking an empty array
// const useremail=[]
// if (useremail.length===0) {
//     console.log("empty array");
// }
//checking empty object
const emptyobj={}
if (Object.keys(emptyobj).length===0) {

    console.log("empty object");
    
}

//Nullish Coalescing operator(??): based on null and undefined;
let val1;
 val1=10 ?? 2 ?? 430 ??323
 val1=null ?? null ?? 20
 val1=undefined?? 33
console.log(val1);

//Terniary Operator ---> it is different from above 
//syntax--> condition ?? true : false
const price = 100
price>=8120 ? console.log("price less than 100") : console.log("price more than 100");


