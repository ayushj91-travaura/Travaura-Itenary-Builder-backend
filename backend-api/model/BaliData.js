const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const baliDataSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Country: String,
    PartofCountry: String,
    City: String,
    Cityofaccommodation: String,
    FeaturedImage: String,
    Headingofevent: String,
    PlacesCovered: String,
    SICPrice: Number,
    Breakfast: String,
    Lunch: String,
    Dinner: String,
    ShortDescription: String,
    LongDescription: String,
    Durationofevent: String,
    TimeSlot: String,
    TransferInclusion: String,
    GroupType: String,
    price2Pax$: Number,
    price2PaxRs: Number,
    price3Pax$: Number,
    price3PaxRs: Number,
    price4Pax$: Number,
    price4PaxRs: Number,
    PriceinRupees: Number,
    PriceType: String,
    Transfers: String
});

const BaliData = mongoose.model('BaliData', baliDataSchema);

module.exports = BaliData;
