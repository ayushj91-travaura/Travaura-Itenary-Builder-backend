const mongoose = require('mongoose');

// Define a combined schema that represents both cities and components
const combinedSchema = new mongoose.Schema({
    city: String,
    vehicleType: String,
    seater: Number,
    priceUSD: Number,
    price: Number,
    additionalInfo: String
});

// Create a model for the combined schema
const CombinedModel = mongoose.model('Combined', combinedSchema);

module.exports = CombinedModel;
