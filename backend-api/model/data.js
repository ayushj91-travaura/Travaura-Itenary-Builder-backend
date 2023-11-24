
const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  "Country": "string",
  "PartOfCountry": "string",
  "EventCode": "number",
  "HeadingOfEvent": "string",
  "ShortDescription": "string",
  "LongDescription": "string",
  "DurationOfEvent": "string",
  "TransferInclusion": "string",
  "GroupType": "string",
  "PricePerPax": "number",
  "MealDuringEvent": "string",
  "AccommodationForTheNight": "string",
  "CityOfAccommodation": "string",
  "StartTimeOfEvent": "string",
  "EndTimeOfEvent": "string",
  "Transfers": "string"
}
);

module.exports = mongoose.model('Data', dataSchema);
