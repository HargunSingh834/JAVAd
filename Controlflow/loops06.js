//CHAINING METHOD
const mynumers=[1,2,3,4,5,6,7,8,910]
// const Newnums= mynumers.map( (num) => num+10 )
const Newnums= mynumers
               .map( (num) => num*10 )
               .map( (num) => num**2 )
               .filter( (num) =>num>=60)  //filter used for accesing only true conditions
console.log(Newnums);
//this is called chaining when we use multiple methods.

//reduced method


const my=[1,3,4]
// const total=my.reduce( function(acc,currentval){
//  console.log(`acc:${acc} and currrn:${currentval}`);
//     return acc+currentval
// },0) //initialising a value   

//using arrow func
const total=my.reduce((acc,currentval) => acc+currentval,0)

console.log(total);
