//for each loop
const coding=["js","python","cpp","java","C++"]

// coding.forEach( function(value) {    -------------->for each loop
//     console.log(value);
// })

// coding.forEach( (item) => {    //arrow funct
//     console.log(item);
    
// })

const mynum=[1,2,3,4,5,6,7,8,9,10]
// const newnum=mynum.filter( (num) => num >4)
 //when we use filter we have a callback func() and eaxh value is access and then the condition is checked
// console.log(newnum);
const newnum=mynum.filter( (num) => {
    return num >4            // when we open this scope we have use return
})
console.log(newnum);

//filter using to access value from database

const city=[
    {Name: "jammu",add:"satwari",pincode:"181101"},
    {Name: "poonch",add:"fgg",pincode:"1811501"},
    {Name: "doda",add:"rerfrf",pincode:"1811201"},
    {Name: "udhampur",add:"fggg",pincode:"1841101"},
    {Name: "punjab",add:"fdgh",pincode:"1811201"},
    {Name: "kashmir",add:"dfdff",pincode:"1831101"},
    {Name: "haryana",add:"hisar",pincode:"181151"},
    {Name: "jammu",add:"fdf",pincode:"181101"},
    {Name: "jammu",add:"dff",pincode:"181151"}
];
let usercity=city.filter( ( ct) =>ct.Name==="jammu" &&  ct.pincode==="181151")


console.log(usercity);

//in filter which is true ohi pass hoyegi