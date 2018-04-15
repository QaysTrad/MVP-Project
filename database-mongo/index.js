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
  password: String
});

var itemSchema = mongoose.Schema({
  item: String,
  price: String
});

var User = mongoose.model('User', userSchema);
var Item = mongoose.model('Item', userSchema);

var saveUser = function(data , callback) {
  var user = User(data)
  user.save(function(err , elem){
    if(err){callback(err , null)}
      callback(null , elem)
  })
};
var saveItem = function(data , callback) {
  var user = User(data)
  user.save(function(err , elem){
    if(err){callback(err , null)}
      callback(null , elem)
  })
};

module.exports.saveUser = saveUser;
module.exports.saveItem = saveItem;

module.exports.User = User;
module.exports.Item = Item;
