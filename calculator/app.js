var express = require('express');

var app = express();
var server = app.listen(8080);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

app.use(express.static('public'));
