const mongoose = require('mongoose');


const selectedTransferSchema = new mongoose.Schema({
    city: String,
    vehicleType: String,
    seater: Number,
    priceUSD: Number,
    price: Number,
    additionalInfo: String
});

// Create a model for the combined schema
const SelectedTransfer = mongoose.model('SelectedTransfer', selectedTransferSchema);

module.exports = SelectedTransfer;
