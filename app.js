const express = require('express')
const bodyParser = require("body-parser");

const app = express();
var items=[];
var workItems=[];
var sportItems=[];

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
//First we need to tell that using of EJS..
app.set('view engine','ejs');

app.get("/",function(req,res){
    var today = new Date();
    const days = {
        weekday:"long",
        day:"numeric",
        month:"long",
    }; 
    var count = today.toLocaleDateString("en-US",days);
    res.render("list",{kindOfDay:"Home List",dateAndTime:count,newListItem:items});
})

app.get("/work",function(req,res){
    var today = new Date();
    const days = {
        weekday:"long",
        day:"numeric",
        month:"long",
    }; 
    var count = today.toLocaleDateString("en-US",days);
    res.render("list",{kindOfDay:"Work List",dateAndTime:count,newListItem:workItems});
})

app.get("/sports",function(req,res){
    var today = new Date();
    const days = {
        weekday:"long",
        day:"numeric",
        month:"long",
    }; 
    var count = today.toLocaleDateString("en-US",days);
    res.render("list",{kindOfDay:"Sports List",dateAndTime:count,newListItem:sportItems});
})
// app.post("/",function(req,res){
//     var item = req.body.navitem;
//     items.push(item);
//     // console.log(item);
    
   
//     res.redirect("/");
// })



app.post("/",function(req,res){
    // console.log(req.body.button);
    var item = req.body.navitem;
    if(req.body.button ==="Work List"){
    workItems.push(item);
    res.redirect("/work");
    }
    else if(req.body.button=="Home List"){
        items.push(item);
        res.redirect("/");
}
    else{
        sportItems.push(item);
        res.redirect("/sports")
    }
})



app.listen(3000,function(){
    console.log("Server running on port 3000");
})
