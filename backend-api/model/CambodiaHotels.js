const mongoose = require('mongoose');

const HotelSchema = new mongoose.Schema({
    name: String,
    images: String,
    roomType: String,
    priceInUSD: Number,
    CPRoomPrice: Number,
    priceType: String
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

const CambodiaHotels
= mongoose.model('CambodiaHotels', CambodiaHotelsSchema);

module.exports = CambodiaHotels;


// "Region": "North",
// "City": "Siem Reap",
// "Category": "5Star",
// "Name": "Prince Angkor\u2019 Hotel",
// "Images": "https://res.cloudinary.com/dxcq5zluj/image/upload/v1705223408/Cambodia%20Hotel/Prince%20Angkor%E2%80%99%20Hotel/owdfjfdlux7dfc1wxvyf.jpg, https://res.cloudinary.com/dxcq5zluj/image/upload/v1705223407/Cambodia%20Hotel/Prince%20Angkor%E2%80%99%20Hotel/rv7rmkwnp6zod1ieb3r3.jpg, https://res.cloudinary.com/dxcq5zluj/image/upload/v1705223407/Cambodia%20Hotel/Prince%20Angkor%E2%80%99%20Hotel/dlu5u8m9bc1tq3kmwrrj.jpg, https://res.cloudinary.com/dxcq5zluj/image/upload/v1705223407/Cambodia%20Hotel/Prince%20Angkor%E2%80%99%20Hotel/sybaemgnxaw56l7zhjny.jpg,\nhttps://res.cloudinary.com/dxcq5zluj/image/upload/v1705223407/Cambodia%20Hotel/Prince%20Angkor%E2%80%99%20Hotel/tv6ggbwyw9qpqgbffmrk.jpg",
// "Room Type": "Superior Double Room"