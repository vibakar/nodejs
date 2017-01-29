const express=require('express');

var app=express();

module.exports.app=app;

app.get("/",(req,res)=>{
  res.status(404).send({
    error:"Page not found",
    name:"testing app"
  });
});


app.get("/users",(req,res)=>{
  res.status(200).send([{
    name:"viba",
    age:23
  },{
    name:"virat",
    age:28
  }]);
});

app.listen(3000,()=>{
  console.log("Server started");
});
