console.log('im from export.js');
var add=function(){
  console.log('i will perform addition');
}

var sub=function(){
  console.log('i will perform subtraction');
}

module.exports={
  add,
  sub
};
