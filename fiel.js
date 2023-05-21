// code for return directory name 
const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'file');
//console.log(dirPath);

//crate a file in folder using loop

/*for(i=0;i<4;i++){
    fs.writeFileSync(dirPath + "/demo"+ i + ".txt","this is demo file");
    //fs.writeSync('demo${i}.txt',"this is demo file");
}
*/
fs.readdir(dirPath,(err,file)=>{
//console.log(file)
file.forEach((item)=>{
    console.log("file name is ",item)
})
    })
