var express = require('express');
var mongose = require('mongoose');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var url = 'mongodb://localhost/mydb';
mongose.connect(url);

var movieSchema = new mongose.Schema({
    name:String,
    email:String,    
}, {collection:'movie'});

var movie = mongose.model('movie', movieSchema);

app.get('/', function(req,res){
    res.sendFile(__dirname+"/signup.html");
});

app.post('/userDetails', function (req, res) {
    console.log(req.body);
    var signup = new movie({ name: req.body.username, email: req.body.Email });
    signup.save();
    res.json(signup);
});


app.get('/GetuserDetails', function (req, res) {
    movie.find({},function (err, db) {
        console.log(db)
        res.json(db);
    })
    
});

app.post('/updateUserDetails', function (req, res) {
    console.log(req.body);
    movie.update({ name: req.body.updatedusername }, { $set: { email: req.body.updatedusermail } }, function (err, db) {
        console.log(db)
        res.json(db);
    })

});


app.post('/removeUserDetails', function (req, res) {
    console.log(req.body);
    movie.remove({ name: req.body.removeByusername }, function (err, db) {
        console.log(db)
        res.json({ "stat": "NotOk", "msg": db });
    })

});

app.listen(909);
console.log('working in 909..')