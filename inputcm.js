//console.log('input with cmd'); //no efftect on input with data along with name.
//console.log(process);
//console.log(process.argv)
//console.log(process.argv[2]);
/*console.log(process.argv[0])
console.log(process.argv[1])
console.log(process.argv[-1])
*/

/*const fs = require('fs');
 const input = process.argv;
 fs.writeFileSync(input[2],input[3])
*/

const fs = require('fs');
const input = process.argv;
if(input[2]=='add')
{
    fs.writeFileSync(input[3],input[4])
}
else if(input[2]=='remove'){
    fs.unlinkSync(input[3])
}
else {
    console.log('invalid output');
}