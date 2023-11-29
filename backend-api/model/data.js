
const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  Country: String,
    PartOfCountry: String,
    CityOfAccommodation: String,
    EventCode: Number,
    City: String,
    HeadingOfEvent: String,
    SICPrice: Number,
    Breakfast: String,
    Lunch: String,
    Dinner: String,
    ShortDescription: String,
    LongDescription: String,
    DurationOfEvent: String,
    TimeSlot: String,
    TransferInclusion: String,
    GroupType: String,
    PricePerPax: Number,
    PriceInRupees: Number,
    PriceType: String,
    MealDuringEvent: String,
    AccommodationForTheNight: String,
    StartTimeOfEvent: String,
    EndTimeOfEvent: String,
    Transfers: String
}
);

module.exports = mongoose.model('Data', dataSchema);
