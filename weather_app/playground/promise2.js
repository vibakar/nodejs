const request=require('request');

var geocodeAddress=(address)=>{
  const encodedAddress=encodeURIComponent(address);
  return new Promise((resolve,reject)=>{
    request({
      url:`http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
      json:true
    },(error,response,body)=>{
    if(error){
        reject('Unable to connect to google servers');
    }else if (body.status==="ZERO_RESULTS") {
        reject('Unable to fetch the location');
    }else if(body.status==="OK"){
        resolve({
          address:body.results[0].formatted_address,
          lattitude:body.results[0].geometry.location.lat,
          longitude:body.results[0].geometry.location.lng
        });
    }else{
      reject('Unable to fetch the location');
    }
    });
  });

}

geocodeAddress('641302').then((location)=>{
  console.log(JSON.stringify(location,undefined,2));
},(err)=>{
  console.log(err);
})
