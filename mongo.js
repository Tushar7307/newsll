const mongo = require("mongodb");
var url = "mongodb://localhost:27017/mydb";
mongo.connect(url, function(err,db)
{
  if(err) throw err;
  console.log("database created");
  db.close();
});
