const mongoose = require('mongoose');

const HotelSchema = new mongoose.Schema({
    name: String,
    images: [String],
    roomType: String
});

const CategorySchema = new mongoose.Schema({
    category: String,
    hotels: [HotelSchema]
});

const CitySchema = new mongoose.Schema({
    city: String,
    categories: [CategorySchema]
});

const CambodiaHotelsSchema = new mongoose.Schema({
    cities: [CitySchema]
});

module.exports = mongoose.model('CambodiaHotels', CambodiaHotelsSchema);
