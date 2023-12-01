const mongoose = require('mongoose');

const busRouteSchema = new mongoose.Schema({
  source: {
    type: String
  },
  destination: {
    type: String
  },
  mode_of_transport: {
    type: String,
    default: 'Bus'
  },
  price: {
    type: Number
  }
});

const BusRoute = mongoose.model('BusRoute', busRouteSchema);

module.exports = BusRoute;
