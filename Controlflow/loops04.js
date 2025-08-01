//for in loop for object
const myobject={
    js:'javascript',
    cpp:'c',
    py:'python'
}
for (const key in myobject) {
    console.log(`${key} shortcut is for ${myobject[key]}`);
    
}
//for array
const programming=["python","java","c","c++"]
for (const key in programming) {
    console.log(programming[key]);
    
}
//for in loop used for object and for of loop mainly use in array