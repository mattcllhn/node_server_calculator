var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({extended:false});


app.listen(process.env.PORT || 3000,function(){
  console.log('server is listening on port 3000');
  });//app.listen

app.get('/', urlEncodedParser,function(req,res){
  console.log('Base url hit, yo');
  res.sendFile(path.resolve('public/index.html'));
});//app.get
app.use(express.static('public'));
var objectoMundo={};
app.post( '/results', urlEncodedParser,function ( req, res){
  var objIn= req.body.aNumber;
    console.log('--------------------------------------------------------------------->req:',objIn);
  var number = eval(objIn);
  console.log(number);
objectoMundo={res:number};




    res.send(objectoMundo);
});
