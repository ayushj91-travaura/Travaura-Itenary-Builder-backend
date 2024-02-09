const mongoose = require('mongoose');
const CambodiaPackage = require('../CambodiaPackages.js');

const ActivitiesSchema = require('../ResultPageModels/ActivitiesSchema.js').schema;
const PackageDetailsSchema = require('./packageDetails.js').schema;
const AddonsSchema = require('../ResultPageModels/Addons.js').schema;  
const TravelerDetailsSchema = require('../ResultPageModels/travellersDetails.js').schema;  
const SelectedHotelSchema = require('../ResultPageModels/SelectedHotel.js').schema;  
const SelectedTransferSchema = require('../ResultPageModels/SelectedTransfers.js').schema;
const busSchema = require('../ResultPageModels/busSchema.js').schema;
const trainSchema = require('../ResultPageModels/trainSchema.js').schema;



const DayActivitiesSchema = new mongoose.Schema({
    day: Number,
    region: String,
    city: String,
    Activities: ActivitiesSchema
});

const DayHotelsSchema = new mongoose.Schema({
    city: String,
    day: Number,
    numberOfRooms: Number,
    numberofSupplements: Number,
    region: String,
    selectedHotel: SelectedHotelSchema
});

const DayTransfersSchema = new mongoose.Schema({
    city: String,
    day: Number,
    noOfTransfer: Number,
    region: String,
    transfer: SelectedTransferSchema
});

const BaliICTransferSchema= new mongoose.Schema({
    day: Number,
    source: String,
    arrival: String,
    seater: Number,
    priceInr: Number,
    numberOfTransfers: Number

});



const HotelSchema = new mongoose.Schema({
    Name: String,
    Images: String,
    RoomType: String,
    Category: String,
    Region: String,
    City: String,
});

const selectedCambodiaHotelsSchema = new mongoose.Schema({
    day: Number,
    hotel: HotelSchema
});






const packageSchema = new mongoose.Schema({
    _id: String,
    agentEmail: String,
    isPackage: Boolean,
    agentUID: String,
    createdAt: String,
    country: String,
    packageDetails: PackageDetailsSchema,
    selectedActivities: [DayActivitiesSchema],
    selectedHotels: [DayHotelsSchema],
    selectedTransfers: [DayTransfersSchema],
    selectedAddons: [AddonsSchema],
    selectedBuses: [busSchema],
    selectedTrains: [trainSchema],
    selectedBaliICTransfers: [BaliICTransferSchema],
    selectedCambodiaPackage: [CambodiaPackage.schema],
    CambodiaWhen: String,
    CambodiaAccomodationType: String,
    selectedCambodiaHotels: [selectedCambodiaHotelsSchema],
    selectedAirportTransferCities: [String],
});

const Package = mongoose.model('Package', packageSchema);

module.exports = Package;