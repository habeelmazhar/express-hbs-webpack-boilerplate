var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    email: String,
    password: String,
},{
  timestamps: true
});

var User = mongoose.model('User', userSchema);

module.exports = User;