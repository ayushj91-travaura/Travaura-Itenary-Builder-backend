const mongoose = require('mongoose');

const thailandHotelsSchema = new mongoose.Schema({
    _id: {
        $oid: { type: mongoose.Schema.Types.ObjectId, auto: true }
    },
    Region: { type: String, default: "" },
    City: { type: String, default: "" },
    Category: { type: String, default: "" },
    Name: { type: String, default: "" },
    RoomType: { type: String, default: "" },
    PriceInUSD: { type: Number, default: 0 },
    CPRoomPrice: { type: Number, default: 0 },
    Images: { type: [String], default: [] },  // Default to an empty array for Images
    PriceType: { type: String, default: "" }
}, { collection: 'ThailandHotels' });

module.exports = mongoose.model('ThailandHotels', thailandHotelsSchema);
