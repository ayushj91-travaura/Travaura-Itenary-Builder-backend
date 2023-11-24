const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transportSchema = new Schema({
  Source: {
    type: String,
    required: true
  },
  Arrival: {
    type: String,
    required: true
  },
  Time: {
    type: String, // Use String if you plan to store time as a string; otherwise, Date or Number might be more appropriate depending on the format.
    required: false
  },
  Type: {
    type: String,
    required: true,
    enum: ['Bus', 'Train'] // Restrict to 'Bus' and 'Train' types only
  },
  Price: {
    type: Number,
    required: true
  }
});

const Transport = mongoose.model('Transport', transportSchema);

module.exports = Transport;
