var person={
  fname:"virat",
  lname:"kohli",
  greet:function(){
    console.log('Hello ',this.fname+' '+this.lname);
  }
};
person.greet();

var player=Object.create(person);
player.lname="viba";
console.log(player.lname);
player.greet();
