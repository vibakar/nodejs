var add=(a,b)=> a+b;
var asyncAdd=(a,b,callback)=>{
  setTimeout(()=>{
    callback(a+b);
  },1000);

};
var asyncSquare=(x,callback)=>{
  setTimeout(()=>{
    callback(x*x);
  },1000);
};

var square=(a)=> a*a;
var setname=(user,fullname)=>{
  var name=fullname.split(" ");
  user.firstname=name[0];
  user.lastname=name[1];
  return user;
};


module.exports={
  add,
  square,
  setname,
  asyncAdd,
  asyncSquare
};
