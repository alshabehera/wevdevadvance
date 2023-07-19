const express = require("express");
const bodyParser = require("body-parser");
const request = require("request")
const app =express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));



app.get("/",function(req,res){
res.sendFile(__dirname+"/signUp.html")
})

app.post("/success",function(req,res){
    
    var fname= req.body.first;
    var lname=req.body.second;
    var  email=req.body.email;
    res.write("<h1>subscribed user: "+fname+" "+lname+".</h1>");
    res.write(fname+" "+lname+"'s Email: "+email+".");
    res.send();
})

app.listen(3000,function(){
    console.log("server is started in port 3000")
})