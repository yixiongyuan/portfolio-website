const mongoose = require('mongoose');

const postSchema = mongoose.Schema({

  title: { type: String, required: true },
  location: { type: String, required: true },
  time: { type: Date, required: true },
  imagePath: { type: String, required: true },

});

module.exports = mongoose.model('Post', postSchema);
