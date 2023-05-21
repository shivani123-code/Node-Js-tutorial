const express = require('express');
const app = express();
const path = require('path');
const publicpath = path.join(__dirname,'public');

//app.use(express.static(publicpath));
app.set('view engine','ejs');
/*app.get('',(_,resp)=>{
    resp.sendFile('${publicpath}\about.html')
})
*/
app.get('profile',(_,resp)=>{
    resp.render('profile');
})

app.listen(5000);
