const yargs=require('yargs');
const axios=require('axios');

const argv=yargs
  .options({
    a:{
      demand:true,
      alias:'address',
      description:'Address to get weather',
      string:true
    }
  })
  .help()
  .alias('help','h')
  .argv;

var encodedAddress=encodeURIComponent(argv.address);
var geocodeurl=`http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeurl).then((response)=>{
  if(response.data.status==="ZERO_RESULTS"){
    throw new Error('Unable to fetch location');
  }
    var lat=response.data.results[0].geometry.location.lat;
    var lng=response.data.results[0].geometry.location.lng;
    var weatherurl=`https://api.darksky.net/forecast/8359da61931cfb6d126f300a498bb5f3/${lat},${lng}`;
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherurl);

}).then((response)=>{
  var temperature=response.data.currently.temperature;
  var apparentTemperature=response.data.currently.apparentTemperature;
  console.log(`Temperature is ${temperature}, But it feels like ${apparentTemperature}`);
}).catch((e)=>{
  if(e.code==="ENOTFOUND"){
    console.log("Unable to connect to google server");
  }else{
      console.log(e.message);
  }

});
