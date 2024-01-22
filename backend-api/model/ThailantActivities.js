const mongoose = require('mongoose');

const thailandActivitiesSchema = new mongoose.Schema({
    _id: {
        $oid: { type: mongoose.Schema.Types.ObjectId, required: true }
    },
    Country: { type: String, default: "" },
    PartofCountry: { type: String, default: "" },
    City: { type: String, default: "" },
    Cityofaccommodation: { type: String, default: "" },
    FeaturedImage: { type: String, default: "" },
    EventCode: { type: Number, default: 0 }, // Assuming this is a number
    Headingofevent: { type: String, default: "" },
    PlacesCovered: { type: String, default: "" },
    SICPrice$: { type: Number, default: 0 },
    Breakfast: { type: String, default: "" },
    Lunch: { type: String, default: "" },
    Dinner: { type: String, default: "" },
    ShortDescription: { type: String, default: "" },
    LongDescription: { type: String, default: "" },
    Durationofevent: { type: String, default: "" },
    TimeSlot: { type: String, default: "" },
    TransferInclusion: { type: String, default: "" },
    GroupType: { type: String, default: "" },
    price2Pax$: { type: Number, default: 0 },
    price2PaxRs: { type: Number, default: 0 },
    price3Pax$: { type: Number, default: 0 },
    price3PaxRs: { type: Number, default: 0 },
    price4Pax$: { type: Number, default: 0 },
    price4PaxRs: { type: Number, default: 0 },
    PriceinRupees: { type: Number, default: 0 },
    PriceType: { type: String, default: "" },
    Transfers: { type: String, default: "" },
    Interests: { type: String, default: "" },
    Rating: { type: String, default: "" },
    OtherFilters: { type: String, default: "" },
    Accommodationforthenight: { type: String, default: "" },
    Highlightsoftheevent: { type: String, default: "" },
    Spotscovered: { type: String, default: "" },
    AddedInclusions: { type: String, default: "" },
    Conditions: { type: String, default: "" },
    ConnectingFlights: { type: String, default: "" },
    Tags: { type: String, default: "" }
}, { collection: 'ThailandActivities' });

module.exports = mongoose.model('ThailandActivities', thailandActivitiesSchema);
