const request=require('request');

var getweather=(lat,lng,callback)=>{
request({
  url:`https://api.darksky.net/forecast/8359da61931cfb6d126f300a498bb5f3/${lat},${lng}`,
  json:true
},(error,response,body)=>{
  if(error){
    callback('unable to connect to forecast server');
  }else {
    callback(undefined,{
      temperature:body.currently.temperature,
      apparentTemperature:body.currently.apparentTemperature
    });
}
});

};

module.exports={
  getweather
};
