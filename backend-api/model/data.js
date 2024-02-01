const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  Country: { type: String, default: "" },
  PartofCountry: { type: String, default: "" },
  Cityofaccommodation: { type: String, default: "" },
  FeaturedImage: { type: String, default: "" },
  EventCode: { type: Number, default: 0 },
  City: { type: String, default: "" },
  Headingofevent: { type: String, default: "" },
  SICPrice: { type: Number, default: 0 }, // Assuming SICPrice($) should be stored as a number without the currency sign
  Breakfast: { type: String, default: "No" },
  Lunch: { type: String, default: "No" },
  Dinner: { type: String, default: "No" },
  InclusionName: { type: String, default: "" },
  ShortDescription: { type: String, default: "" },
  LongDescription: { type: String, default: "" },
  Durationofevent: { type: String, default: "" },
  TimeSlot: { type: String, default: "" },
  TransferInclusion: { type: String, default: "" },
  GroupType: { type: String, default: "" },
  PricePerPax: { type: Number, default: 0 }, // Assuming Price(PerPax)$ should be stored as a number without the currency sign
  PriceinRupees: { type: Number, default: 0 },
  PriceType: { type: String, default: "" },
  Interests: { type: String, default: "" },
  Rating: { type: String, default: "" },
  OtherFilters: { type: String, default: "" },
  Mealduringevent: { type: String, default: "" },
  Accommodationforthenight: { type: String, default: "" },
  Starttimeoftheevent: { type: String, default: "" },
  Endtimeoftheevent: { type: String, default: "" },
  Highlightsoftheevent: { type: String, default: "" },
  Spotscovered: { type: String, default: "" },
  AddedInclusions: { type: String, default: "" },
  Conditions: { type: String, default: "" },
  Transfers: { type: String, default: "" },
  ConnectingFlights: { type: String, default: "" },
  Tags: { type: String, default: "" }
});

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;
