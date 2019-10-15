var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors'); 
var apiRouter = require('./router/api');

const PORT = process.env.PORT | 3000; 
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); 
app.use(cors());

 
app.use('/api',apiRouter); 
 
 
app.listen(PORT, function () {
  console.log('Your server is up running on port: '+PORT)
});