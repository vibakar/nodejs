const configValues=require('./config');

module.exports={
  getDbConnection:function(){
    return 'mongodb://'+configValues.username+':'+configValues.password+'@ds115798.mlab.com:15798/todo';
  }
};
