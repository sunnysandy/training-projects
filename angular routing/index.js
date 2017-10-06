var express=require("express");
var app=express();
var path=require("path")
app.use(express.static(path.join(__dirname, 'public')))
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")

})

app.listen(8585, function(){
    console.log("app listening at port number 8585")
})
