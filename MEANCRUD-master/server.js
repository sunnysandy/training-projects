var MongoClient = require('mongodb').MongoClient;
var express = require('express');
var bodyParser = require('body-parser');
var url = "mongodb://localhost:27017/mydb";
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.post('/register', function(req,res){
    console.log(req.body.username)    
    res.send(req.body.username);
});

app.listen(8123);

//MongoClient.connect(url, function(err, db) {
//  if (err) throw err;
//  var myobj = { name: "Company Inc", address: "Highway 37" };
//    
//  db.collection("customers").insertOne(myobj, function(err, res) {
//    if (err) throw err;
//    console.log(res);
//    db.close();
//  });
//});



