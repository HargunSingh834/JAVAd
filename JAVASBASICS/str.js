const name="hargun"

const age=12

// console.log(name+age+"hello") 
// console.log('HELLO my name is ${name} and my age is ${}')
//   declaration of String
const gamename = new String('harguns')
console.log(gamename);
console.log(gamename[0]);
console.log(gamename.__proto__);
console.log(gamename.length);
console.log(gamename.toLowerCase());
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2))  //for positing op based//
console.log(gamename.indexOf('h'))

const newString= gamename.substring(1,6)
console.log(newString);
const anotherstring=gamename.slice(5,-1)
console.log(anotherstring);

const String1= "   harugn     "
console.log(String1);
console.log(String1.trim());    //trim  is used in deleting spaces or removed the spaces

const rollno="2222222222221-"
console.log(rollno.replace('1','5'));

