var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var userSchema = mongoose.Schema({
  username: String,
  password: String,
  item: String,
  price: String
});

var User = mongoose.model('User', userSchema);

var save = function(data , callback) {
  var user = User(data)
  user.save(function(err , elem){
    if(err){callback(err , null)}
      callback(null , elem)
  })
};

module.exports.save = save;
module.exports.User = User;