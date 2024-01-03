const mongoose = require('mongoose');


const SegmentSchema = new mongoose.Schema({
    departure: {
        iataCode: String,
        terminal: String,
        at: Date
    },
    arrival: {
        iataCode: String,
        terminal: String,
        at: Date
    },
    carrierCode: String,
    number: String,
    aircraft: {
        code: String
    },
    operating: {
        carrierCode: String
    },
    duration: String,
    id: String,
    numberOfStops: Number,
    blacklistedInEU: Boolean
});

const ItinerarySchema = new mongoose.Schema({
    duration: String,
    segments: [SegmentSchema]
});

const FareDetailsBySegmentSchema = new mongoose.Schema({
    segmentId: String,
    cabin: String,
    fareBasis: String,
    brandedFare: String,
    brandedFareLabel: String,
    class: String,
    includedCheckedBags: {
        weight: Number,
        weightUnit: String
    },
    amenities: [
        {
            description: String,
            isChargeable: Boolean,
            amenityType: String,
            amenityProvider: {
                name: String
            }
        }
    ]
});

const TravelerPricingSchema = new mongoose.Schema({
    travelerId: String,
    fareOption: String,
    travelerType: String,
    price: {
        currency: String,
        total: mongoose.Types.Decimal128,
        base: mongoose.Types.Decimal128
    },
    fareDetailsBySegment: [FareDetailsBySegmentSchema]
});
const LocationSchema = new mongoose.Schema({
    cityCode: String,
    countryCode: String
});

const AircraftSchema = new mongoose.Schema({
    code: String,
    name: String
});

const CurrencySchema = new mongoose.Schema({
    code: String,
    name: String
});

const CarrierSchema = new mongoose.Schema({
    code: String,
    name: String
});

const DictionariesSchema = new mongoose.Schema({
    locations: { type: Map, of: LocationSchema },
    aircraft: { type: Map, of: String },
    currencies: { type: Map, of: String },
    carriers: { type: Map, of: String }
});

const FlightOfferSchema = new mongoose.Schema({
    type: String,
    id: String,
    source: String,
    instantTicketingRequired: Boolean,
    nonHomogeneous: Boolean,
    oneWay: Boolean,
    lastTicketingDate: Date,
    lastTicketingDateTime: Date,
    numberOfBookableSeats: Number,
    itineraries: [ItinerarySchema],
    price: {
        currency: String,
        total: mongoose.Types.Decimal128,
        base: mongoose.Types.Decimal128,
        fees: [
            {
                amount: mongoose.Types.Decimal128,
                type: String
            }
        ],
        grandTotal: mongoose.Types.Decimal128
    },
    pricingOptions: {
        fareType: [String],
        includedCheckedBagsOnly: Boolean
    },
    validatingAirlineCodes: [String],
    travelerPricings: [TravelerPricingSchema],
    dictionaries: DictionariesSchema
});

module.exports = mongoose.model('FlightOffer', FlightOfferSchema);
