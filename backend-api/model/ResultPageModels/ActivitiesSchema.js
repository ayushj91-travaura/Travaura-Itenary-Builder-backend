const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ActivitiesSchema = new Schema({
  Country: String,
  PartofCountry: String,
  Cityofaccommodation: String,
  FeaturedImage: String,
  EventCode: Number,
  City: String,
  Headingofevent: String,
  SICPriceUSD: Number, // Assuming "SICPrice($)" should be stored as a number
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
  MealDuringEvent: String,
  AccommodationForTheNight: String,
  StartTimeOfEvent: String,
  EndtimeOfEvent: String,
  Transfers: String,
  // Additional fields based on the JSON data
  Breakfast_: String,
  Lunch_: String,
  Dinner_1: String,
  OtherFilters: String,
  Highlightsoftheevent: String,
  Spotscovered: String,
  AddedInclusions: String,
  Conditions: String,
  ConnectingFlights: String,
  Tags: String
});

module.exports = mongoose.model('Activities', ActivitiesSchema);
