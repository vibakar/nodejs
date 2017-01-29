const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const setupcontroller=require('./controllers/setupcontrollers');
const apicontroller=require('./controllers/apicontrollers');

var app = express();

var port = process.env.PORT || 3000;
app.use('assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

var connect=mongoose.connect(config.getDbConnection());
setupcontroller(app);
apicontroller(app);

app.listen(port,function(){
  console.log('server started');
});
