const mongoose = require('mongoose');
const CambodiaPackage = require('../CambodiaPackages.js');
const { HotelSchema } = require('../CambodiaHotels.js');
const ActivitiesSchema = require('./ActivitiesSchema.js').schema;
const DomesticFlightsSchema = require('./DomesticFlight.js').schema;  
const InternationalFlightsSchema = require('./InternationalFlight.js').schema;  
const AddonsSchema = require('./Addons.js').schema;  
const TravelerDetailsSchema = require('./travellersDetails.js').schema;  
const SelectedHotelSchema = require('./SelectedHotel.js').schema;  
const SelectedTransferSchema = require('./SelectedTransfers.js').schema;
const busSchema = require('./busSchema.js').schema;
const trainSchema = require('./trainSchema.js').schema;
const FlightOfferSchema = require('./FlightOfferSchema.js').schema;


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

const BookingSelectedDomesticFlightsSchema = new mongoose.Schema({
    token: String,
    numberOfBaggages: Number,
});

const BookingSelectedInternationalFlightsSchema = new mongoose.Schema({
    token: String,
    numberOfBaggages: Number,
});

const selectedCambodiaHotelsSchema = new mongoose.Schema({
    day: Number,
    hotel: HotelSchema
});




const userSchema = new mongoose.Schema({
    _id: String,
    agentEmail: String,
    travellerDetails: TravelerDetailsSchema ,
    country: String,
    selectedActivities: [DayActivitiesSchema],
    selectedHotels: [DayHotelsSchema],
    selectedTransfers: [DayTransfersSchema],
    selectedDomesticFlights: [DomesticFlightsSchema],
    selectedInternationalFlights: [InternationalFlightsSchema],
    selectedAddons: [AddonsSchema],
    selectedBuses: [busSchema],
    selectedTrains: [trainSchema],
    selectedBaliICTransfers: [BaliICTransferSchema],
    selectedInternationalFlightOffers: [FlightOfferSchema],
    BookingSelectedDomesticFlights: [BookingSelectedDomesticFlightsSchema], 
    BookingSelectedInternationalFlights: [BookingSelectedInternationalFlightsSchema],
    selectedCambodiaPackage: [CambodiaPackage.schema],
    CambodiaWhen: String,
    CambodiaAccomodationType: String,
    selectedCambodiaHotels: [selectedCambodiaHotelsSchema],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
