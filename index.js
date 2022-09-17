const express =require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const UserHandler = require("./handler/UserHandler");

app.use(express.json());
let port = process.env.port;
let clusterUrl = 'netfilxbackend.i9rughl.mongodb.net';
let username = process.env.MONGO_USERNAME;
let password = process.env.MONGO_PASSWORD;
let dbname = 'netfilx';
let dburl = `mongodb+srv://${username}:${password}@${clusterUrl}/${dbname}`;

mongoose.connect(dburl)
    .then(()=>{console.log("Mongo db Connection sucessfull")})
    .catch(error =>{console.log(`unable to conect mongodb because of error ${error}`)});

app.get('/', function(req,res){
    res.send("Hello world from netfilx backend");
});

app.post('/user', UserHandler.signupHandler)

app.listen(port,function(){
    console.log("Server started at port no 3000")
});
