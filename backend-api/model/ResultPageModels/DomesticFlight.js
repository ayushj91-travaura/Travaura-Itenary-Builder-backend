const mongoose = require('mongoose');

const domesticFlightsSchema = new mongoose.Schema({
  carrier: String,
  baggage: String,
  flightPrice: Number,
  arrivalTime: String, 
  departureTime: String, 
  noOfStops: Number,
  sourceCity: String,
  arrivalCity: String,
  day: Number 
});

const DomesticFlights = mongoose.model('DomesticFlights', domesticFlightsSchema);

module.exports = DomesticFlights;
