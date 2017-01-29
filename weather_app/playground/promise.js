var asyncAdd=(a,b)=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(typeof a==="number" && typeof b==="number"){
        resolve(a+b);
      }else{
        reject("argument should be a number");
      }
    },1500);
  });
}

asyncAdd(5,'7').then((res)=>{
  console.log('success ',res);
  return asyncAdd(res,33);
}).then((res)=>{
  console.log('should be 45 ',45);
}).catch((err)=>{
  console.log(err);
});

// var somepromise=new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve('working fine');
//     reject('failed to work');
// },2500);
// });
//
// somepromise.then((success)=>{
//   console.log('success message',success);
// },(fail)=>{
//   console.log('fail message',fail);
// });
