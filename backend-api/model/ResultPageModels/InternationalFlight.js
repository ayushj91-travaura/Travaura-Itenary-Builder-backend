const mongoose = require('mongoose');

const internationalFlightSchema = new mongoose.Schema({
  departureCity: String,
  arrivalCity: String,
  carrier: String,
  baggage: String,
  journeyDate: Date,
  departureTime: String, 
  arrivalTime: String,  
  price: Number,
  noOfStops: Number
});

const InternationalFlight = mongoose.model('InternationalFlight', internationalFlightSchema);

module.exports = InternationalFlight;
