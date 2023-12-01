const mongoose = require('mongoose');

const trainRouteSchema = new mongoose.Schema({
  source: {
    type: String
  },
  destination: {
    type: String
  },
  mode_of_transport: {
    type: String,
    default: 'Train'
  },
  price: {
    type: Number
  }
});

const TrainRoute = mongoose.model('TrainRoute', trainRouteSchema);

module.exports = TrainRoute;
