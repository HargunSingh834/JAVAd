const name=["har","gun","singh"]
const name2=["gun","samar","adil"]
// name.push(name2) // it considered a 2nd array as a new object or element
// console.log(name)
// console.log(name[3][2])
 const fullname=name2.concat(name)
// console.log(fullname);

// spread method using dots

const allfullname=[...name,...name2]
// console.log(allfullname);    //this is most useful and imp mathod to merge a array


const anotherarray=[1,2,3[4,5,5],4,[4,3,[3,2]]]
const realarray=anotherarray.flat(Infinity)
console.log(realarray);
//  to convert into an array by using of and from
let n1=21
let n2=300
let n3=577
console.log(Array.of(n1,n2,n3));

console.log(Array.from("hargun"));
console.log(Array.from({rollno:"21"}))  //interesting case


