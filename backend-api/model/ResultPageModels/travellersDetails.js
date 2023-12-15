const mongoose = require('mongoose');

const travelerDetailsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    tripType: {
        type: String,
        enum: ['Solo Travel', 'Couple Travel', 'Honeymoon', 'Family Trip', 'Cousins Trip', 'Bachelors', 'Group Trip', 'Private Trip'],
        required: true
    },
    accommodationType: {
        type: String,
        enum: ['Mixed Accommodation', 'Budgeted Hotel', '3 Star Hotel', '4 Star Hotel', '5 Star Hotel', 'Homestay', 'Villa', 'Resort', 'Camps'],
        required: true
    },
    dateOfTravel: {
        type: Date,
        required: true
    },
    adults: {
        type: Number,
        required: true,
        min: 0
    },
    child: {
        type: Number,
        required: true,
        min: 0
    },
    infants: {
        type: Number,
        required: true,
        min: 0
    },
    internationalFlights: {
        type: String,
        enum: ['Included', 'Excluded', 'Not Required in this Itinerary'],
        required: true
    },
    domesticFlights: {
        type: String,
        enum: ['Included', 'Excluded', 'Not Required in this Itinerary'],
        required: true
    },
    visa: {
        type: String,
        enum: ['Included', 'Excluded', 'Visa on Arrival', 'Visa Free Destination', 'Not Required in this Itinerary'],
        required: true
    },
    duration: {
        type: Number,
        required: true,
        min: 0
    },
    nights: {
        type: Number,
        required: true,
        min: 0
    }
});

const TravelerDetails = mongoose.model('TravelerDetails', travelerDetailsSchema);

module.exports = TravelerDetails;
