function Greet(){
    this.name="viba";
    this.greeting=function(){
      console.log('hello ',this.name);
    }
}

module.exports=new Greet();
