const express = require("express")
const app = express();
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", function(req, res){
  res.sendFile(__dirname + "/signup.html")
});

app.post("/", function(req, res){
  const firstName = req.body.fname;
  const lastName = req.body.lname;
  const email = req.body.email;

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fiels: {
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  };

  const jasonData = JSON.stringify(data);
  const url = "https://us1.api.mailchimp.com/3.0/lists/9317115ea2";
  const options = {
    method: "POST",
    auth: "aruj900:faffd2975e7d3a7a62d192d81a9cbbab4-us1"
  }
  const request = https.request(url, options , function(response){
    if (response.statusCode === 200){
      res.sendFile(__dirname + "/sucess.html")
    } else {
      res.sendFile(__dirname + "/failure.html")
    }
    response.on("data", function(data){
      console.log(JSON.parse(data));
    })
  })

  request.write(jasonData);
  request.end();
});

app.post("/failure", function(req, res){
  res.redirect("/")
});

app.listen(3000, function(){
  console.log("server is up and running")
});


// list id - 9317115ea2
// API keys - faffd2975e7d3a7a62d192d819cbbab4-us1
