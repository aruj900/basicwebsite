const express = require("express");
const app = express();


app.get("/", function(req, res){
  res.send("<h1>Hello world</h1>")
});

app.get("/contact", function(req, res){
  res.send("Contact me")
});

app.get("/about", function(req, res){
  res.send("I am a programmer")
});

app.get("/hobbies", function(req, res){
  res.send("I like reading and writing")
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
