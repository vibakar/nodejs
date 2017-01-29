console.log('starting');

setTimeout(()=>{
  console.log('it will run in 2000ms');
},2000);

setTimeout(()=>{
  console.log('it will run in 0ms');
},0);

console.log('ending');
