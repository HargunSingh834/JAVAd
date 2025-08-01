//for of loop

//["","",""]     //iterator ----> obj,str,arr accesible on any
            
//[{},{},{}]
const arr =[1,12,34,55,3]
for (const num of arr) {
    console.log(num);   
}

const score="more than hundread numbers"
for (const num of score) {
    
    console.log(`each alphabet is ${num}`);
    
}

//Maps--> obj taht holds key value pair and no duplicate values in it. omly unique values

const map= new Map()
map.set('IN','INDIA')
map.set('CAN','CANADA')
map.set('PAK','PAKISTAN')
// console.log(map);
for (const [key,value] of map) {
    console.log(key,':', value);
    
}

//for of with object

const myobject={
    'game1':'pubg',
    'game2':'ff',
    'game3':'gta'
}
// for (const [key,value] of myobject) {  this for of loop synatx is not work for objects here.
//     console.log(key,':',value);
    
// }

