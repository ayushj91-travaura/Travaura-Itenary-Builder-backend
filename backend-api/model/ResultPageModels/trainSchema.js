const mongoose = require('mongoose');

const trainTransferSchema = new mongoose.Schema({
    arrival: String,
    day: Number,
    price: Number,
    source: String,
});

const TrainTransfer = mongoose.model('TrainTransfer', trainTransferSchema);

module.exports = TrainTransfer;
