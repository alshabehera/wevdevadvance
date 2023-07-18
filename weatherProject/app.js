const express= require("express");
const https= require("https");
const bodyParser= require("body-parser");
const app= express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
res.sendFile(__dirname+"/index.html")
    
})

app.post("/",function(request,res){
 console.log(request.body.city);
 const query=request.body.city;
 const id=request.body.key;
 const URL="https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+id+"";
 https.get(URL,function(response){
     console.log(response.statusCode);
     response.on("data",function(data){
         const weatherdetail= JSON.parse(data);
         const temp= weatherdetail.main.temp;
         const desc = weatherdetail.weather[0].description;
         const icon= weatherdetail.weather[0].icon;
         const iconURl="https://openweathermap.org/img/wn/"+icon+"@2x.png"

         console.log(desc);

         console.log(temp);
         res.write("<h1>The temperature of city "+query+" is " +temp+" .</h1>");
         res.write("<h1>The description of city "+query+" is " +desc+" .</h1>");
         res.write("<img src="+iconURl+">");
         res.send();
     })
 })
})




app.listen(3000,function(){
    console.log("server is on port 3000")
})