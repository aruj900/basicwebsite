const express = require("express");
const app = express();
const https = require("https")
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){

  res.sendFile(__dirname + "/index.html")

});

app.post("/", function(req, res){
  const query = req.body.cityName
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&units=metric&appid=2867bc286fef728c1b093cfd0743a36f";
  https.get(url,function(response){
    response.on("data", function(data){
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDiscription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageURL = "http://openweathermap.org/img/wn/" +  icon + "@2x.png";
      res.write("<p>The weather is currently " + weatherDiscription + "</p>");
      res.write("<h1>The Temperature in " + query + " is " + temp + " degrees celcius.</h1>");
      res.write("<img src=" + imageURL + ">");
      res.send();
    });
  });
});






app.listen(3000, function(){
  console.log("Server is running on port 3000")
});
