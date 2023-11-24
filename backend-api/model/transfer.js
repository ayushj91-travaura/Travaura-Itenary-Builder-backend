const mongoose = require('mongoose');

// Define a combined schema that represents both cities and components
const combinedSchema = new mongoose.Schema({
    City: String,
    Components: [
        {
            "Vehicle Type": String,
            Seater: Number,
            "Price $": Number,
            Price: Number,
            // Add other fields if needed
        },
    ],
});

// Create a model for the combined schema
const CombinedModel = mongoose.model('Combined', combinedSchema);

module.exports = CombinedModel;
