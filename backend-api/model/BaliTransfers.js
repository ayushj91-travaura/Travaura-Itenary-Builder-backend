const mongoose = require('mongoose');

// Define a combined schema that represents both cities and components
const baliTransferSchema = new mongoose.Schema({
    city: String,
    vehicleType: String,
    seater: Number,
    priceUSD: Number,
    price: Number,
    additionalInfo: String
});

// Create a model for the combined schema
const BaliTransferModel = mongoose.model('BaliTransfer', baliTransferSchema);

module.exports = BaliTransferModel;
