const mongoose = require('mongoose');

const trainTransferSchema = new mongoose.Schema({
    day: Number,
    price: Number,
    // You can add more fields here as needed, for example:
    sourceCity: String,
    arrivalCity: String,
    
});

const TrainTransfer = mongoose.model('TrainTransfer', trainTransferSchema);

module.exports = TrainTransfer;
