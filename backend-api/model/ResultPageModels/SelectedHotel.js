const mongoose = require('mongoose');

const selectedHotelSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  Region: String,
  City: String,
  Category: String,
  Name: String,
  RoomType: String,
  CPRoomPrice: Number,
  PriceType: String,
  Image: [String]
});


const SelectedHoteldata = mongoose.model('SelectedHoteldata', selectedHotelSchema);

module.exports = SelectedHoteldata;
