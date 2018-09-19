const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

//connect configurations
const mc = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'schoolstudio'
});

mc.connect();

//default route
app.get('/',function(req,res){
    return res.send({error: true,message : 'hello'})
});

//port must be set to 8080 incoming http requests are rounted from port 80 
app.listen(8080,function(){
    console.log('Node app is running on port 8080');
});