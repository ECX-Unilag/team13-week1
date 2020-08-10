const mongoose = require('mongoose');

const {
  Schema
} = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  currentClass: {
    type: String,
  },
  previousClass: {
    type: String,
  },
  sex: {
    type: String,
    enum: ['male', 'female'],
  },
  nationality: {
    type: String,
  },

});

module.exports = mongoose.model('Users', userSchema);