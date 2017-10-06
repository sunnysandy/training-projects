//var http = require('http');
var express = require('express');
var formidable = require('formidable');
//var mongod = require('mongodb').MongoClient;
var fs = require('fs');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json 
app.use(bodyParser.json())


var url = 'mongodb://localhost/mydb';
mongoose.connect(url); 


    // Before running we should be in mydb(DB) and we should be collections.

    var kittySchema = new mongoose.Schema({  // Setting Scehema For Collections..
       name: { type: String, unique: true }
    });


var Kitten = mongoose.model('Kitten', kittySchema);  // create New Collections
// var blacky = new Kitten({name:"Blacky"}); // Create New Value For Collections.


//var Tommy = new Kitten({name:"Tommy"});
//    Tommy.save();
//    blacky.save(); // Save Collections


app.get('/demo', function(req,res){
    res.sendFile(__dirname+'/index.html');
})


app.post('/demo', function(req,res){
console.log(req.body);
    
    var Add = new Kitten({name:req.body.name})
        Add.save();    
    
     res.json(Add);
    /*Kitten.find(function(err,db){
        console.log(db);
        console.log(err);
        res.json(db);
    });*/
});







/*
app.get('/:name', function(req,res){


    
//    console.log(req.params);
//    var Tommy = new Kitten({name:req.params.name});
//    Tommy.save();    
    
    
        res.send('Hey You are in my landing page...')
});*/

app.listen('8013')
console.log('i am Working...');



//http.createServer(function (req, res) {
//  if (req.url == '/fileupload') {
//    var form = new formidable.IncomingForm();
//    form.parse(req, function (err, fields, files) {
//      var oldpath = files.filetoupload.path;
//      var newpath = 'C:/Users/shivaprasad.aluri/Desktop/Nodejs/InsertMONGO/images/' + files.filetoupload.name;
//      fs.rename(oldpath, newpath, function (err) {
//        if (err) throw err;
//        res.write('File uploaded and moved!');
//        res.end();
//      });
// });
//  } else {
//    res.writeHead(200, {'Content-Type': 'text/html'});
//    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
//    res.write('<input type="file" name="filetoupload"><br>');
//    res.write('<input type="submit">');
//    res.write('</form>');
//    return res.end();
//  }
//}).listen(8080);