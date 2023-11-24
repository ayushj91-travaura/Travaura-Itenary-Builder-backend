const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ActivitySpotSchema = new Schema({ name: String }, { _id: false });

const CitySchema = new Schema({
    name: String,
    activitySpots: [ActivitySpotSchema]
}, { _id: false });

const RegionSchema = new Schema({
    name: String,
    cities: [CitySchema]
});

const VietnamCityStructureSchema = new Schema({
    regions: [RegionSchema]
});

const VietnamCityStructure = mongoose.model('VietnamCityStructure', VietnamCityStructureSchema);

module.exports = VietnamCityStructure;
