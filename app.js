// //api key
// // 349bd11f9eb9adbff1fd32f19efa029b-us20
//
// //list id - 4cc20dedc7
const express = require("express");
const bodyparser = require("body-parser");
const request = require("request");
const app = express();
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get('/', function(req,res)
{
  res.sendFile(__dirname+"/signup.html");
});

app.post("/", function(req, res)
{
  var firstname = req.body.fname;
  var lastname = req.body.lname;
  var email = req.body.email;

var data =
{
  members:
  [
    {
      email_address:email,
      status:"subscribed",
      merge_fields:
      {
        FNAME : firstname,
        LNAME : lastname
      }
    }
  ]
};
var json_data = JSON.stringify(data);
  var options =
{
  url:"https://us20.api.mailchimp.com/3.0/lists/4cc20dedc7",
  method:"POST",
  headers:
  {
    "authorization":"Tushar 349bd11f9eb9adbff1fd32f19efa029b-us20"
  },
   body:json_data,
};
request(options, function(error, response, body)
{

  if(response.statusCode=="200")
  {
    res.sendFile(__dirname+"/success.html");
  }
  else {
    res.sendFile(__dirname+"/failure.html");
  }
});
});
app.post("/failure",function(req,res)
{
  res.redirect("/");
});
app.listen(process.env.PORT || 3000, function()
{
  console.log("server is started on port 3000");
});
