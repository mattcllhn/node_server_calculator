var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({extended:false});


app.listen('3000','localhost',function(){
  console.log('server is listening on port 3000');
  });//app.listen

app.get('/', function(req,res){
  console.log('Base url hit, yo');
  res.sendFile(path.resolve('public/index.html'));
});//app.get
app.use(express.static('public'));
