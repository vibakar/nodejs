const request=require('request');
const yargs=require('yargs');

const geocode=require('./geocode/geocode');
const weather=require('./weather/weather');
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

geocode.geocodeAddress(argv.address,(errorMessage,result)=>{
  if(errorMessage){
    console.log(errorMessage);
  }else {
    console.log(result.address);
    weather.getweather(result.lattitude,result.longitude,(errorMessage,result)=>{
      if(errorMessage){
        console.log(errorMessage);
      }else {
        console.log(`Temperature is ${result.temperature}, But it feels like ${result.apparentTemperature}`);
      }
    });
  }
});
