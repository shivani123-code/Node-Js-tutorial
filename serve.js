/*const http = require('http');
http.createServer((req,resp)=>{
    resp.write("hello this is shivani");
    resp.end();
}).listen(4500);
*/

// create a functon and run over the server

/*function datacontrol(req,resp){
    resp.write("hello shivani");
resp.end();
}
http.createServer(datacontrol).listen(4500);
*/

//function using arrow function to create a function

/*const datacontrol=(req,resp)=>{
    resp.write("hello coder");
resp.end();
}
http.createServer(datacontrol).listen(4500);

*/


const http = require('http');
const data = require('C:\\Users\\hp\\Desktop\\node-tut\\app.js');
http.createServer((req,resp)=>{
    resp.writeHead(200,{'Content-Type':'application\json'});
    resp.write(JSON.stringify(data));
    resp.end();
}).listen(4500);
