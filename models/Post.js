const mongoose = require('mongoose');


const PostSchema = mongoose.Schema({
  title:{
    type: String, 
    requred: true
  }, 
  description: {
    type: String, 
    required: true
  },
  date: {
    type: Date, 
    default: Date.now
  }
});

module.exports = mongoose.model('Post', PostSchema);
