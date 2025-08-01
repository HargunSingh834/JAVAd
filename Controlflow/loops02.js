//while and do-while

let i=1
while (i<=32) {
    console.log(`value of i is ${i}`);
    i=i+2
    
}

let myarray=["hajha","sjdhuj","shdgsh","dfgyfdyt"]
console.log(myarray.length);

let a=1
while (a< myarray.length) {
    console.log(`value of a is ${a}`);
    a=a+1
    
}

//do-while loop

let score=1   //if score is 11 then they give o/p of 11 beacuse in do-whilw firstl do statement is running before 
              //checking the condition
do {
    console.log(`score is ${score}`);
    score++    
} while (score<=10);