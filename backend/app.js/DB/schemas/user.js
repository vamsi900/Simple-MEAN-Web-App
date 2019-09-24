var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/post',{useNewUrlParser:true});

const userSchema = new mongoose.Schema({
  email: String,
  password: String
}, { versionKey: false, timestamps: true });

module.exports = mongoose.model('user', userSchema);