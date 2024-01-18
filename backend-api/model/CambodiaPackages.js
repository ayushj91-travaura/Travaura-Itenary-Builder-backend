const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  Day: String,
  Title: String,
  Stay: String,
  Meal: String,
  FeaturedImage: String,
  ShortDescription: String,
  LongDescription: String
});

const hotelOptionSchema = new mongoose.Schema({
  HotelName: String,
  PriceUSD: Number,
  PriceINR: Number,
  Images: String // assuming this is a comma-separated list of image URLs
});

const cambodiaPackageSchema = new mongoose.Schema({
  PackageName: String,
  City: String,
  Activities: [activitySchema],
  Hotels: {
    '3Star': [hotelOptionSchema],
    '4Star': [hotelOptionSchema],
    '5Star': [hotelOptionSchema]
  }
});

const CambodiaPackage = mongoose.model('CambodiaPackage', cambodiaPackageSchema);

module.exports = CambodiaPackage;
