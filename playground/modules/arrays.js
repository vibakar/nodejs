var arr=[];
arr.push(function(){
    console.log('hi');
});

arr.push(function(){
  console.log('hello');
})

arr.push(function(){
  console.log('hola');
});

arr.forEach(function(item){
  item();
});

// for(item in arr){
//   arr[item]();
// }

var obj={
  name:"viba",
  age:22
}
var prop='name';
console.log(obj.name);
console.log(obj['name']);
console.log(obj[prop]);
