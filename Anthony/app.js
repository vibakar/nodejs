const express=require('express');
const ejs=require('ejs');
var bodyParser = require('body-parser');

var app=express();

app.use('/assets',express.static(__dirname+'/public'));
app.set('view engine','ejs');

app.use('/',(req,res,next)=>{
  // console.log(req.url);
  next();
});

var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser=bodyParser.json();

app.get('/',(req,res)=>{
  res.render('index');
});

app.get('/api',(req,res)=>{
  res.json({name:'viba',age:22});
});

app.get('/person/:name',(req,res)=>{
  res.render('person',{name:req.params.name,age:req.query.age});
});

app.post('/person',urlencodedParser,(req,res)=>{
  res.send('Thank you');
  console.log(req.body.fname);
  console.log(req.body.lname);
});

app.post('/personjson',jsonParser,(req,res)=>{
  res.send('Thank you for Json data');
  console.log(req.body.fname);
  console.log(req.body.lname);
});

app.listen(3000,()=>{
  console.log('Server Started');
});
