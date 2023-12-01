const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  Region: String,
  City: String,
  Category: String,
  Name: String,
  RoomType: String,
  MAPRoomPrice: Number,
  CPRoomPrice: Number,
  EPRoomPrice: Number,
  PriceType: String,
  Rating: Number,
  Image: [String]
});


const Hoteldata = mongoose.model('Hoteldata', hotelSchema);

module.exports = Hoteldata;
