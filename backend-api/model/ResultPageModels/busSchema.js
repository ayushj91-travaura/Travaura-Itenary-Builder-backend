const mongoose = require('mongoose');

const busTransferSchema = new mongoose.Schema({
    day: Number,
    price: Number,
    // You can add more fields here as needed, for example:
    sourceCity: String,
    arrivalCity: String,
    
});

const BusTransfer = mongoose.model('BusTransfer', busTransferSchema);

module.exports = BusTransfer;
