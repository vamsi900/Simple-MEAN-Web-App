var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/post',{useNewUrlParser:true});

const postSchema = new mongoose.Schema({
  id: { type: String },
  title: { type: String},
  content: { type: String},
}, { versionKey: false, timestamps: true });

module.exports = mongoose.model('post', postSchema);