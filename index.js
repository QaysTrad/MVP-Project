var express = require('express');
var app = express();
let db = require('./database-mongo/index.js')
var bodyParser = require('body-parser');
var path = require("path");

app.use(express.static(__dirname + '/angular-client'));
app.use(express.static(__dirname + '/node_modules'));
app.use("/app", express.static(path.join(__dirname, '../app')));
app.use(bodyParser())

app.post('/users', function (req, res) {
	console.log(req.body)
	db.save(req.body , function (err , data) {
		if(err){res.send(err)}
			res.send(data)
	})
});
app.get('/users' , function (req , res) {
	db.User.find(function (err , data) {
		if(err){res.send(err)}
			res.send(data)
	})
})

app.get("/app", function (req,res) {
    // res.redirect('/templates/app.html');
});


port = 3000
app.listen(port, function() {
  console.log('listening on port '+ port );
});