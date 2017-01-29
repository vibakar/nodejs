var db=require('./db');

module.exports.handlesignup=(email,password)=>{
  db.saveuser({email,password});
};
