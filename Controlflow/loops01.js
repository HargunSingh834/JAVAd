//loops or Iterations
//for loop
for (let i = 0; i <=10; i++) {
    const element = i;
    // console.log(element);
    
}

for (let i = 1; i <=10 ; i++) {
    // console.log(`outer loop value:${i}`);
    
    for (let j = 1; j <=10; j++) {
        // console.log(`inner loop value;${j} and inner loop ${i}`);
        // console.log(i + '*' + j + '=' + i*j );  
    }
    
}
//for with arrays
let array=['hrgun',"singh","sons","fgdfwetg"]
// console.log(array.length);


for (let i = 1; i < array.length; i++) {
    const element = array[i];
    // console.log(element);
}

//break and continue keyword 
// for (let i = 0; i <= 20; i++) {
//     if (i==5) {
//         console.log('5 is found');
//         break       //it breaks the control flow when the consition is true
//     }
//     console.log(`value of i is ${i}`);

// }
for (let i = 0; i <= 20; i++) {
    if (i==5) {
        console.log('5 is found');
        continue    //1 condition is skipped
    }
    console.log(`value of i is ${i}`);

}