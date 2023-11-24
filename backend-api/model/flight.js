const mongoose = require('mongoose');

// Define a schema for the data
const travelSchema = new mongoose.Schema({
  Source: {
    Children: [String],
  },
  Arrival: {
    Children: [String],
  },
  Time: {
    Children: [String],
  },
  Type: {
    Children: [String],
  },
  Carrier: {
    Children: [String],
  },
  Baggage: {
    Children: [String],
  },
});

// Create a Mongoose model based on the schema
const Travel = mongoose.model('Travel', travelSchema);

module.exports = Travel;
