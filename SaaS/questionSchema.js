const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  _id:{
    type: String,
    require:true
  },
  question: {
    type: String,
    require: true
  },
  yes:{
    type: Number,
    default: 0,
  },
  no:{
    type: Number,
    default: 0
  }
}, {collection : 'question'});

module.exports = mongoose.model('questions', questionSchema);
