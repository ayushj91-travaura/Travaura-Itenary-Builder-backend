const mongoose = require('mongoose');

const addonsSchema = new mongoose.Schema({
  earlyCheckIn: {
    type: Boolean,
    default: false
  },
  lateCheckOut: {
    type: Boolean,
    default: false
  },
  addonBreakfast: {
    type: Number,
    min: 0,
    default: 0
  },
  addonLunch: {
    type: Number,
    min: 0,
    default: 0
  },
  addonDinner: {
    type: Number,
    min: 0,
    default: 0
  },
  TATAAIGInsurance: {
    type: Boolean,
    default: false
  },
  Cancellation: {
    type: Boolean,
    default: false
  },
  visa: {
    type: String,
    enum: ['Included', 'Excluded', 'Visa on Arrival', 'Visa Free Destination', 'Not Required in this Itinerary'],
    default: ''
  },
  peakSeasonMarkup: {
    type: Number,
    min: 0,
    default: 0
  },
});

const Addons = mongoose.model('Addons', addonsSchema);

module.exports = Addons;
