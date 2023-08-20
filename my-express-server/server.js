const express =require("express");
const app = express();
app.get("/",function(req,res){
  res.send("hello");
});
app.get("/contact",function(req,res){
  res.send("contact me at:shyamtejag3@gmail.com");
});
app.get("/about",function(req,res){
  res.send("My name is Shyam. I am an Engineer");
});
app.get("/hobbies",function(req,res){
  res.send("<ul><li>Cricket</li><li>dance</li></ul>");
});
app.listen(3000,function(){
  console.log("port  started at 3000");
});
