const mongoose = require('mongoose');

const thailandAirportTransfersSchema = new mongoose.Schema({
  city: {
    type: String,
    default: ''
  },
  arrivalDropOffAirport: {
    type: String,
    default: ''
  },
  vehicleType: {
    type: String,
    default: 'Taxi'
  },
  seater: {
    type: String,
    default: ''
  },
  priceUSD: {
    type: Number,
    default: 0
  },
  price: {
    type: Number,
    default: 0
  },
  pickupDropoff: {
    type: String,
    default: 'Pick up'
  }
});

const ThailandAirportTransfers = mongoose.model('ThailandAirportTransfers', thailandAirportTransfersSchema);

module.exports = ThailandAirportTransfers;
