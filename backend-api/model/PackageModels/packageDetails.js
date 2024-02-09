const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const testimonialsRatingsSchema = new Schema({
  testimonials: [String],
  averageRating: Number,
});

const nightsInEachCitySchema = new Schema({
  city: String,
  nights: Number,
});

const guideServicesSchema = new Schema({
  available: Boolean,
  languages: [String],
});

const packageDetailsSchema = new Schema({
  packageId: String,
  country: String,
  creationDate: Date,
  lastUpdated: Date,
  language: String,
  name: String,
  days: Number,
  nights: Number,
  placesCovered: String,
  citiesCovered: String,
  seasonality: String,
  difficultyLevel: String,
  theme: String,
  maxGroupSize: Number,
  customizability: Boolean,
  tags: String,
  packageTypes: String,
  inclusions: String,
  exclusions: String,
  optionalActivities: String,
  cancellationPolicy: String,
  mealPlanDetails: String,
  healthVaccinationRequirements: String,
  visaAssistance: Boolean,
  culturalEtiquetteTips: String,
  testimonialsRatings: testimonialsRatingsSchema,
  photoGallery: [String],
  videoOverview: String,
  interactiveMap: String,
});

const accommodationsSchema = new Schema({
  hotelCategory: String,
  roomType: String,
  amenities: String,
  locationType: String,
});

const additionalFeaturesSchema = new Schema({
  nightsInEachCity: [nightsInEachCitySchema],
  itineraryDetails: [String], // Assuming this is an array of strings, adjust if it's more complex
  transportationDetails: String,
  guideServices: guideServicesSchema,
  travelInsurance: String,
  paymentOptions: [String],
  healthSafetyMeasures: String,
  sustainabilityPractices: String,
  emergencySupport: String,
  localPartners: String,
});

const packageSchema = new Schema({
  packageDetails: packageDetailsSchema,
  accommodations: accommodationsSchema,
  additionalFeatures: additionalFeaturesSchema,
});




const PackageDetail = mongoose.model('PackageDetail', packageSchema);

module.exports = PackageDetail;
