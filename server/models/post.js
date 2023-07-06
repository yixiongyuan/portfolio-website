const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  time: { type: Date, required: true },
  location: { type: String, required: true },
  content: { type: String, required: true },
  imagePath: { type: String, required: true },

});

module.exports = mongoose.model('Post', postSchema);
