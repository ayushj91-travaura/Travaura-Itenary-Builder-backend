const mongoose = require('mongoose');

const travelerDetailsSchema = new mongoose.Schema({
    name: {
        type: String,
        
    },
    country: {
        type: String
       
    },
    tripType: {
        type: String
     
    },
    accommodationType: {
        type: String
        
    },
    dateOfTravel: {
        type: Date
        
    },
    adults: {
        type: Number,
        default: 0,
        min: 0
    },
    child: {
        type: Number,
        default: 0,
        min: 0
    },
    infants: {
        type: Number,
        default: 0,
        min: 0
    },
    internationalFlights: {
        type: String
        
    },
    domesticFlights: {
        type: String
    },
    visa: {
        type: String
        
        
    },
    duration: {
        type: Number,
       default: 0,
        min: 0
    },
    nights: {
        type: Number,
       default: 0,
        min: 0
    }
});

const TravelerDetails = mongoose.model('TravelerDetails', travelerDetailsSchema);

module.exports = TravelerDetails;
