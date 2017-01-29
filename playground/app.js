console.log("hi");

function greet(){
  console.log("hi viba");
}
greet();

var person=function(){
  console.log("hello");
}
person();

function call(func){
  func();
}
call(person);//sending the person function as an arugument
function game(){
  console.log("player information");
}
var player=function(fname,lname,jno){
  this.fname=fname,
  this.lname=lname,
  this.jno=jno,
  this.detail=function(){
    console.log(this.fname+' '+this.lname);
  }
}
player.prototype.info=game;
var cricket=new player('virat','kohli',18);
cricket.detail();
console.log(cricket.fname);
cricket.info();
var cric=new player('M S','Dhoni',7);
cric.detail();
cric.info();
