const express =require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
require('./schema/config')
let path = require('path');


app.use(bodyParser.json());
app.use('/html',express.static(path.join(__dirname,'html')))
app.use('/api/video',require('./router/video'))

app.get('/',(req,res)=>{
    res.status(200).sendFile('index.html',{root:'./html'});
})

app.listen(3333,(req,res)=>{
    console.log('en el puerto 3333')
})
