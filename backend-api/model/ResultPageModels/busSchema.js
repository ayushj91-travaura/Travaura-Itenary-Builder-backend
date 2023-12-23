const mongoose = require('mongoose');

const busTransferSchema = new mongoose.Schema({
    arrival: String,
    day: Number,
    price: Number,
    source: String,
    
    
});

const BusTransfer = mongoose.model('BusTransfer', busTransferSchema);

module.exports = BusTransfer;
