var event=require('events');
var obj=require('./config');

var e=new event();

e.on(obj.greet,function(){
  console.log('hi');
});
e.on(obj.greet,function(){
  console.log('hello');
});
e.emit(obj.greet);
