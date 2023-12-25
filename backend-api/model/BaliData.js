const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const baliDataSchema = new mongoose.Schema({
    Country: String,
    PartofCountry: String,
    Cityofaccommodation: String,
    FeaturedImage: String,
    EventCode: Number,
    City: String,
    Headingofevent: String,
    SICPrice: Number,
    Breakfast: String,
    Lunch: String,
    Dinner: String,
    InclusionName: String,
    ShortDescription: String,
    LongDescription: String,
    Durationofevent: String,
    TimeSlot: String,
    TransferInclusion: String,
    GroupType: String,
    PricePerPax: Number,
    PriceinRupees: Number,
    PriceType: String,
    Interests: String,
    Rating: String,
    OtherFilters: String,
    Mealduringevent: String,
    Accommodationforthenight: String,
    Starttimeoftheevent: String,
    Endtimeoftheevent: String,
    Highlightsofthevent: String,
    Spotscovered: String,
    AddedInclusions: String,
    Conditions: String,
    Transfers: String,
    ConnectingFlights: String,
    Tags: String,
    // Add other fields as needed
});

const BaliData = mongoose.model('BaliData', baliDataSchema);

module.exports = BaliData;
