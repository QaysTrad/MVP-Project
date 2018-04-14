var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/angular-client'));
app.use(express.static(__dirname + '/node_modules'));




port = 3000
app.listen(port, function() {
  console.log('listening on port '+ port );
});