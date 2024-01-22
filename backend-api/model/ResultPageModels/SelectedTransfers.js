const mongoose = require('mongoose');


const selectedTransferSchema = new mongoose.Schema({
    city: String,
    vehicleType: String,
    seater: Number,
    Seater: String,
    priceUSD: Number,
    price: Number,
    additionalInfo: String,
    arrivalDropOffAirport: String,
});

// Create a model for the combined schema
const SelectedTransfer = mongoose.model('SelectedTransfer', selectedTransferSchema);

module.exports = SelectedTransfer;
