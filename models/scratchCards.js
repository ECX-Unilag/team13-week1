const mongoose = require('mongoose');

const {
  Schema
} = mongoose;

const regCard = new Schema({
  pin: {
    type: String,
    required: true
  },
  serial: {
    type: String,
    required: true
  }

});

module.exports = mongoose.model('RegCard', regCard);