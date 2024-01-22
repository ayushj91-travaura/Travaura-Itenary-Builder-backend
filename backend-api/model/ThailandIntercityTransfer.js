const mongoose = require('mongoose');

const thailandIntercityTransfersSchema = new mongoose.Schema({
    source: {
        type: String,
        default: ''
    },
    arrival: {
        type: String,
        default: ''
    },
    seater: {
        type: Number,
        default: 0
    },
    priceUSD: {
        type: Number,
        default: 0
    },
    priceInr: {
        type: Number,
        default: 0
    }
}, {
    collection: 'Thailand Intercity Transfers' // Set the collection name
});

const ThailandIntercityTransfers = mongoose.model('ThailandIntercityTransfers', thailandIntercityTransfersSchema);

module.exports = ThailandIntercityTransfers;
