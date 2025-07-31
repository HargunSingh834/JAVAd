// //switch use when we execute multiple statements
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
// const month=3
// switch (month) {
//     case 1:
//         console.log("January"); 
//         break;
//     case 2:
//         console.log("Febuary"); 
//         break;

//     case 3:
//         console.log("march"); 
//     // break;  its break control flow

//     case 4:
//         console.log("april"); 
//         break;
// }
const month="March"              //we also give it string value to check statement
switch (month) {
    case "January":
        console.log("January"); 
        break;
    case "Febuary":
        console.log("Febuary"); 
        break;

    case "March":
        console.log("march"); 
     break; 

    case "april":
        console.log("april"); 
        break;

    default:
        console.log("default case match");
        
        break;
}