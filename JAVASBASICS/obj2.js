//   const user1= new Object()  both gives same o/p same as {}
 const user1={}
// console.log(user1);
user1.name="hargun"
user1.id="211"
user1.isloggedin=false
// console.log(user1);
const user2={
    email:"singh@gmail.com",
    fullname:{
        userfullname:{
            firstname:"har",
            lastname:"sin"

        }
    }
}
// console.log(user2.fullname);
// console.log(user2.fullname.userfullname);

// object merging or combine
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
// const obj3={obj1,obj2}
// const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}     //most simple and appropriated way tp combine the objects
// console.log(obj3);

// console.log(Object.keys(user1));
// console.log(Object.values(user1));
/// console.log(Object.hasOwnProperty('rollno'));   //false

const course={
    cname:"java",
    price:"3223",
    cid:"2122322"
}
// course.name
//  const {cname}=course      
 const {cname:cName}=course     //this is called objct destructor

console.log(cName);
 //////////////////JASON API///////////////////
// {
    // "name1" ; "hargun",          //it is created as json and we not give any object name
    // "courseName";"javascript",
    // "prices";"paid"
// }



[
    {},
    {},
    {}
]



