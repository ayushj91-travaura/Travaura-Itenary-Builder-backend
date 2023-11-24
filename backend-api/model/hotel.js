const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  category: String,
  name: String,
  images: [String],
  roomType: String,
  mapRoomPrice: Number,
  cpRoomPrice: Number,
  epRoomPrice: Number,
  rating: Number,
});

const citySchema = new mongoose.Schema({
  hotels: [hotelSchema],
});

const regionSchema = new mongoose.Schema({
  cities: {
    type: Map,
    of: citySchema,
  },
});

const hoteldataSchema = new mongoose.Schema({
  regions: {
    type: Map,
    of: regionSchema,
  },
});

const Hoteldata = mongoose.model('Hoteldata', hoteldataSchema);

module.exports = Hoteldata;
