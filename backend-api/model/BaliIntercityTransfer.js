const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const baliIntercityTransfersSchema = new Schema({
    source: { type: String},
    arrival: { type: String},
    seater: { type: Number },
    priceUsd: { type: Number},
    priceInr: { type: Number}
});

module.exports = mongoose.model('BaliIntercityTransfers', baliIntercityTransfersSchema);
