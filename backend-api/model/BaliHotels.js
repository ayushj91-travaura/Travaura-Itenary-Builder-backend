const mongoose = require('mongoose');

const baliHotelsSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  Region: String,
  City: String,
  Category: String,
  Name: String,
  RoomType: String,
  PriceInUSD: Number,
  CPRoomPrice: Number,
  Images: [String], // Assuming Images is an array of image URLs
  PriceType: String
});

const BaliHotels = mongoose.model('BaliHotels', baliHotelsSchema);

module.exports = BaliHotels;
