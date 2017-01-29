const request=require('request');

var geocodeAddress=(addressEncode,callback)=>{
  const encodedAddress=encodeURIComponent(addressEncode);
request({
  url:`http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
  json:true
},(error,response,body)=>{
if(error){
    callback('Unable to connect to google servers');
}else if (body.status==="ZERO_RESULTS") {
    callback('Unable to fetch the location');
}else if(body.status==="OK"){
    callback(undefined,{
      address:body.results[0].formatted_address,
      lattitude:body.results[0].geometry.location.lat,
      longitude:body.results[0].geometry.location.lng
    });
}else{
  callback('Unable to fetch the location');
}
});
}

module.exports={
  geocodeAddress
};
