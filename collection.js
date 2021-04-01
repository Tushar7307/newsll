const mongo = require("mongodb");
var url = "mongodb://localhost:27017";
mongo.connect(url, function(err,db)
{
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.createCollection("customer", function(err, res)
{
  if(err) throw err;
  console.log("collection created");
});
});
