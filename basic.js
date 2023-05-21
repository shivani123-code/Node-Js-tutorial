/*var a= 10;
var b= 20;
var c =30;
console.log(a+b+c);
console.log(a*b*c);
console.log(b/a);
console.log(b%c);
var s = "shivani jaiswal";
console.log(s);
*/

//program of import file form another file 
/*const  app = require('./app')
console.log(app.z())
console.log(app.x);
console.log(app.y);
console.log(app);
*/

// LOOP IN array using filter
/*const arr= [2,3,57,8,99,0];
arr.filter((item)=>{
    console.log(item)
})
*/

// print paticular elemnt in array
const arr= [1,4,3,7,3,6,3];
let result = arr.filter((item)=>{
    //return item===3
    return item>4
})
console.warn(result)
