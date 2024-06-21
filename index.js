const express = require("express");
const { admin, fetchUserData, verifyUserToken } = require('./Firebase_auth/firebase_auth');
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const app = express();
const puppeteer = require("puppeteer");
const multer = require("multer");
const upload = multer();
const FormData = require("form-data");
const Api2Pdf = require("api2pdf");
const fs = require('fs');





app.use(cors());



app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

require("dotenv").config();

const bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

const mongoAtlasDB =
  "mongodb+srv://travauratech:travauratech@cluster0.zqfkwop.mongodb.net/";
mongoose
  .connect(mongoAtlasDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB Atlas!");
  })
  .catch((err) => {
    console.error(err);
  });

//firebase auth



app.get("/user", async (req, res) => {
  const { uid} = req.headers;
let name;
  admin.auth().getUser(uid)
    .then(userRecord => {
      console.log('Successfully fetched user data:', userRecord.toJSON());
      name = userRecord.displayName;
      console.log(name);
      if (userRecord.email === 'ayushjha@travaura.com') {
      
        console.log('User is an admin');
        dd.then((result) => {
          res.json(result);
        }
        );
      }
      else{
        console.log('User is an user');
        res.send(name);
      }
        
      
    })
    .catch(error => {
      console.error('Error fetching user data:', error);
    }
  );
});
  

const data = require("./backend-api/model/data");

const dd = new Promise((resolve, reject) => {
  data.find().then((result) => {
    resolve(result);
  });
} 
);

app.get("/api/data", async (req, res) => {
  
  try {
    const datas = await data.find();
    res.json(datas);
    console.log("mongo working fine!!");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const BaliData = require("./backend-api/model/BaliData");

app.get("/api/BaliData", async (req, res) => {
  try {
    const BaliDatas = await BaliData.find();
    res.json(BaliDatas);
    console.log("mongo working fine!!");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const transfer = require("./backend-api/model/transfer");

app.get("/api/transfer", async (req, res) => {
  try {
    const transfers = await transfer.find();
    res.json(transfers);
    console.log("mongo working fine!!");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const BaliTransfer = require("./backend-api/model/BaliTransfers");

app.get("/api/BaliTransfer", async (req, res) => {
  try {
    const BaliTransfers = await BaliTransfer.find();
    res.json(BaliTransfers);
    console.log("mongo working fine!!");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const flight = require("./backend-api/model/flight");

app.get("/api/flight", async (req, res) => {
  try {
    const flights = await flight.find();
    res.json(flights);
    console.log("mongo working fine!!");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const hotel = require("./backend-api/model/hotel");

app.get("/api/hotel", async (req, res) => {
  try {
    const hotels = await hotel.find();
    res.json(hotels);
    console.log("mongo working fine!!");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const BaliHotelsModel = require("./backend-api/model/BaliHotels");

app.get("/api/BaliHotels", async (req, res) => {
  try {
    const hotels = await BaliHotelsModel.find();
    res.json(hotels);
    console.log("Mongo working fine!!");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.put("/api/updateHotel/:id", async (req, res) => {
  const { id } = req.params;
  const { day, selectedHotel, numberOfRooms, numberofSupplements } = req.body;

  try {
    const updatedDocument = await user.findByIdAndUpdate(
      id,
      {
        $set: {
          "selectedHotels.$[elem].selectedHotel": selectedHotel,
          "selectedHotels.$[elem].numberOfRooms": numberOfRooms,
          "selectedHotels.$[elem].numberofSupplements": numberofSupplements,
        },
      },
      {
        arrayFilters: [{ "elem.day": day }],
        new: true,
      }
    );

    res.json(updatedDocument);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/api/hotel", async (req, res) => {
  try {
    const hoteldata = new hotel({
      _id: new mongoose.Types.ObjectId(),
      Region: req.body.Region,
      City: req.body.City,
      Category: req.body.Category,
      Name: req.body.Name,
      RoomType: req.body.RoomType,
      MAPRoomPrice: req.body.MAPRoomPrice,
      CPRoomPrice: req.body.CPRoomPrice,
      EPRoomPrice: req.body.EPRoomPrice,
      PriceType: req.body.PriceType,
      Rating: req.body.Rating,
      Image: req.body.Image,
    });
    await hoteldata.save();
    res.send(hoteldata);
    console.log(req.body);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const bus = require("./backend-api/model/bus");

app.get("/api/bus", async (req, res) => {
  try {
    const buses = await bus.find();
    res.json(buses);
    console.log("mongo working fine!!");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const train = require("./backend-api/model/train");

app.get("/api/train", async (req, res) => {
  try {
    const trains = await train.find();
    res.json(trains);
    console.log("mongo working fine!!");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const globalCityStructure = require("./backend-api/model/GlobalCityStructure");

app.get("/api/globalCityStructure", async (req, res) => {
  try {
    const globalCityStructures = await globalCityStructure.find();
    res.json(globalCityStructures);
    console.log("mongo working fine!!");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const domesticFlight = require("./backend-api/model/ResultPageModels/DomesticFlight");
const internationalFlight = require("./backend-api/model/ResultPageModels/InternationalFlight");
const activities = require("./backend-api/model/ResultPageModels/ActivitiesSchema");
const addons = require("./backend-api/model/ResultPageModels/Addons");
const travellersDetails = require("./backend-api/model/ResultPageModels/travellersDetails");
const selectedHotel = require("./backend-api/model/ResultPageModels/SelectedHotel");
const selectedTransfer = require("./backend-api/model/ResultPageModels/SelectedTransfers");
const user = require("./backend-api/model/ResultPageModels/Users");

// app.post('/api/user', async (req, res) => {
//   try {
//     const userdata = new user({
//       _id: req.body.id,
//       travellerDetails: req.body.travellerDetails,
//       country: req.body.country,
//       selectedActivities: req.body.selectedActivities,
//       selectedHotels: req.body.selectedHotels,
//       selectedTransfers: req.body.selectedTransfers,
//       selectedDomesticFlights: req.body.selectedDomesticFlights,
//       selectedInternationalFlights: req.body.selectedInternationalFlights,
//       selectedAddons: req.body.selectedAddons,
//       selectedBuses: req.body.selectedBuses,
//       selectedTrains: req.body.selectedTrains,
//       selectedBaliICTransfers: req.body.selectedBaliICTransfers
//     });
//     await userdata.save();
//     res.send(userdata);

//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

app.get("/api/user/:id", async (req, res) => {
  try {
    const userdata = await user.findById(req.params.id);
    res.send(userdata);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/api/user", async (req, res) => {
  const id = req.body.id;

  try {
    let userdata = await user.findById(id);
    if (userdata) {
      // Update existing document
      userdata = await user.findByIdAndUpdate(id, req.body, { new: true });
    } else {
      // Create a new document
      userdata = new user({
        _id: req.body.id,
        agentEmail: req.body.agentEmail,
        agentUID: req.body.agentUID,
        travellerDetails: req.body.travellerDetails,
        country: req.body.country,
        selectedActivities: req.body.selectedActivities,
        selectedHotels: req.body.selectedHotels,
        selectedTransfers: req.body.selectedTransfers,
        selectedDomesticFlights: req.body.selectedDomesticFlights,
        selectedInternationalFlights: req.body.selectedInternationalFlights,
        selectedAddons: req.body.selectedAddons,
        selectedBuses: req.body.selectedBuses,
        selectedTrains: req.body.selectedTrains,
        selectedBaliICTransfers: req.body.selectedBaliICTransfers,
        selectedInternationalFlightOffers:
          req.body.selectedInternationalFlightOffers,
        BookingSelectedDomesticFlights: req.body.BookingSelectedDomesticFlights,
        BookingSelectedInternationalFlights:
          req.body.BookingSelectedInternationalFlights,
        selectedCambodiaPackage: req.body.selectedCambodiaPackage,
        CambodiaWhen: req.body.CambodiaWhen,
        CambodiaAccomodationType: req.body.CambodiaAccomodationType,
        selectedCambodiaHotels: req.body.selectedCambodiaHotels,
        createdAt: req.body.createdAt,
      });
      await userdata.save();
    }
    res.send(userdata);
    console.log(req.body);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.put("/updateActivity/:id", async (req, res) => {
  const { id } = req.params;
  const { day, selectedActivity } = req.body;

  try {
    const updatedDocument = await user.findByIdAndUpdate(
      id,
      {
        $set: {
          "selectedActivities.$[elem].Activities": selectedActivity,
        },
      },
      {
        arrayFilters: [{ "elem.day": day }],
        new: true,
      }
    );

    res.json(updatedDocument);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/addActivity/:id", async (req, res) => {
  const { id } = req.params;
  const { day, selectedActivity } = req.body;

  try {
    const updatedDocument = await user.findByIdAndUpdate(
      id,
      {
        $push: {
          selectedActivities: { day: day, Activities: selectedActivity },
        },
      },
      {
        new: true,
      }
    );

    res.json(updatedDocument);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete("/deleteActivity/:id", async (req, res) => {
  const { id } = req.params;
  const { day, selectedActivity } = req.body;

  try {
    const updatedDocument = await user.findByIdAndUpdate(
      id,
      {
        $pull: {
          selectedActivities: { day: day, Activities: selectedActivity },
        },
      },
      {
        new: true,
      }
    );

    res.json(updatedDocument);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete("/deleteInternationalFlight/:id/:ind", async (req, res) => {
  const { id, ind } = req.params;

  try {
    let userDoc = await user.findById(id);

    if (!userDoc) {
      return res.status(404).send("User not found");
    }

    // Remove the element at index 'ind'
    userDoc.selectedInternationalFlightOffers.splice(ind, 1);

    // Save the updated document
    const updatedDocument = await userDoc.save();

    res.json(updatedDocument);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete("/deleteInternationalFlightManual/:id/:ind", async (req, res) => {
  const { id, ind } = req.params;

  try {
    let userDoc = await user.findById(id);

    if (!userDoc) {
      return res.status(404).send("User not found");
    }

    // Remove the element at index 'ind'
    userDoc.selectedInternationalFlights.splice(ind, 1);

    // Save the updated document
    const updatedDocument = await userDoc.save();

    res.json(updatedDocument);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete("/deleteDomesticFlightManual/:id/:ind", async (req, res) => {
  const { id, ind } = req.params;

  try {
    let userDoc = await user.findById(id);

    if (!userDoc) {
      return res.status(404).send("User not found");
    }

    // Remove the element at index 'ind'
    userDoc.selectedDomesticFlights.splice(ind, 1);

    // Save the updated document
    const updatedDocument = await userDoc.save();

    res.json(updatedDocument);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete("/deleteBookingInternationalFlight/:id/:token", async (req, res) => {
  const { id, token } = req.params;

  try {
    let userDoc = await user.findById(id);

    if (!userDoc) {
      return res.status(404).send("User not found");
    }

    userDoc.BookingSelectedInternationalFlights =
      userDoc.BookingSelectedInternationalFlights.filter(
        (flight) => flight.token !== token
      );

    // Save the updated document
    const updatedDocument = await userDoc.save();

    res.json(updatedDocument);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete("/deleteBookingDomesticFlight/:id/:token", async (req, res) => {
  const { id, token } = req.params;

  try {
    let userDoc = await user.findById(id);

    if (!userDoc) {
      return res.status(404).send("User not found");
    }

    userDoc.BookingSelectedDomesticFlights =
      userDoc.BookingSelectedDomesticFlights.filter(
        (flight) => flight.token !== token
      );

    // Save the updated document
    const updatedDocument = await userDoc.save();

    res.json(updatedDocument);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.put("/updateInternationalFlight/:id", async (req, res) => {
  const { id } = req.params;
  const { selectedInternationalFlight } = req.body;

  console.log(selectedInternationalFlight);

  try {
    const updatedDocument = await user.findByIdAndUpdate(
      id,
      {
        $push: {
          selectedInternationalFlights: selectedInternationalFlight,
        },
      },
      {
        new: true,
      }
    );

    res.json(updatedDocument);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete("/deleteDomesticFlight/:id/:ind", async (req, res) => {
  const { id, ind } = req.params;

  try {
    let userDoc = await user.findById(id);

    if (!userDoc) {
      return res.status(404).send("User not found");
    }

    // Remove the element at index 'ind'
    userDoc.selectedDomesticFlights.splice(ind, 1);

    // Save the updated document
    const updatedDocument = await userDoc.save();

    res.json(updatedDocument);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.put("/updateDomesticFlight/:id", async (req, res) => {
  const { id } = req.params;
  const { selectedDomesticFlight } = req.body;
  console.log(selectedDomesticFlight);
  try {
    const updatedDocument = await user.findByIdAndUpdate(
      id,
      {
        $push: {
          selectedDomesticFlights: selectedDomesticFlight,
        },
      },
      {
        new: true,
      }
    );

    res.json(updatedDocument);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete("/deleteHotel/:id", async (req, res) => {
  const { id } = req.params;
  const { day, selectedHotel } = req.body;

  try {
    const updatedDocument = await user.findByIdAndUpdate(
      id,
      {
        $pull: {
          selectedHotels: { day: day, selectedHotel: selectedHotel },
        },
      },
      {
        new: true,
      }
    );

    res.json(updatedDocument);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/addHotel/:id", async (req, res) => {
  const { id } = req.params;
  const { day, selectedHotel, numberOfRooms, numberofSupplements } = req.body;

  try {
    const updatedDocument = await user.findByIdAndUpdate(
      id,
      {
        $push: {
          selectedHotels: {
            day: day,
            selectedHotel: selectedHotel,
            numberOfRooms: numberOfRooms,
            numberofSupplements: numberofSupplements,
          },
        },
      },
      {
        new: true,
      }
    );

    res.json(updatedDocument);
  } catch (error) {
    res.status(500).send(error);
  }
});

const baliIntercityTransfersSchema = require("./backend-api/model/BaliIntercityTransfer");

app.get("/api/baliIntercityTransfersSchema", async (req, res) => {
  try {
    const baliIntercityTransfersSchemas =
      await baliIntercityTransfersSchema.find();
    res.json(baliIntercityTransfersSchemas);
    console.log("mongo working fine!!");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const cambodiaPackageSchema = require("./backend-api/model/CambodiaPackages");

app.get("/api/cambodiaPackageSchema", async (req, res) => {
  try {
    const cambodiaPackageSchemas = await cambodiaPackageSchema.find();
    res.json(cambodiaPackageSchemas);
    console.log("mongo working fine!!");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const cambodiaHotelsSchema = require("./backend-api/model/CambodiaHotels");

app.get("/api/cambodiaHotelsSchema", async (req, res) => {
  try {
    const cambodiaHotelsSchemas = await cambodiaHotelsSchema.find();
    res.json(cambodiaHotelsSchemas);
    console.log("mongo working fine!!");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.put("/addCambodiaHotels/:id", async (req, res) => {
  const { id } = req.params;
  const { selectedCambodiaHotels } = req.body;
  console.log(selectedCambodiaHotels);
  console.log(id);

  try {
    const updatedDocument = await user.findByIdAndUpdate(
      id,
      {
        $push: {
          selectedCambodiaHotels: selectedCambodiaHotels,
        },
      },
      {
        new: true,
      }
    );

    res.json(updatedDocument);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete("/deleteCambodiaHotel/:id/:day", async (req, res) => {
  const { id, day } = req.params;

  try {
    const updatedDocument = await user.findByIdAndUpdate(
      id,
      {
        $pull: {
          selectedCambodiaHotels: { day: day },
        },
      },
      {
        new: true,
      }
    );

    res.json(updatedDocument);
  } catch (error) {
    res.status(500).send(error);
  }
});

const ThailandActivitiesSchema = require("./backend-api/model/ThailantActivities");

app.get("/api/ThailandActivitiesSchema", async (req, res) => {
  try {
    const ThailandActivitiesSchemas = await ThailandActivitiesSchema.find();
    res.json(ThailandActivitiesSchemas);
    console.log("mongo working fine!!");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const ThailandHotels = require("./backend-api/model/ThailandHotels");

app.get("/api/ThailandHotelsSchema", async (req, res) => {
  try {
    const ThailandHotelsSchemas = await ThailandHotels.find();
    res.json(ThailandHotelsSchemas);
    console.log("mongo working fine!!");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const ThailandAirportTransfersSchema = require("./backend-api/model/ThailandAirportTransfer");

app.get("/api/ThailandAirportTransfersSchema", async (req, res) => {
  try {
    const ThailandAirportTransfersSchemas =
      await ThailandAirportTransfersSchema.find();
    res.json(ThailandAirportTransfersSchemas);
    console.log("mongo working fine!!");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const ThailandIntercityTransfersSchema = require("./backend-api/model/ThailandIntercityTransfer");
const Travel = require("./backend-api/model/flight");
const { reverse } = require("dns");

app.get("/api/ThailandIntercityTransfersSchema", async (req, res) => {
  try {
    const ThailandIntercityTransfersSchemas =
      await ThailandIntercityTransfersSchema.find();
    res.json(ThailandIntercityTransfersSchemas);
    console.log("mongo working fine!!");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.put("/updateTravellerDetails/:id", async (req, res) => {
  const { id } = req.params;
  const { travellerDetails } = req.body;
  console.log(travellerDetails);
  console.log(id);

  try {
    const updatedDocument = await user.findByIdAndUpdate(
      id,
      {
        $set: {
          travellerDetails: travellerDetails,
        },
      },
      {
        new: true,
      }
    );

    res.json(updatedDocument);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.put("/updateSelectedHotels/:id", async (req, res) => {
  const { id } = req.params;
  const { selectedHotels } = req.body;
  console.log(selectedHotels);
  console.log(id);

  try {
    const updatedDocument = await user.findByIdAndUpdate(
      id,
      {
        $set: {
          selectedHotels: selectedHotels,
        },
      },
      {
        new: true,
      }
    );

    res.json(updatedDocument);
  } catch (error) {
    res.status
    (500).
    send(error
    );
  }
});

app.get("/itineraries", async (req, res) => {
  const { agentUID, email } = req.query;
  const isAdmin = req.query.isAdmin === "true";

  try {
    let query = [];

    // Check for admin access
    if (isAdmin) {
      // If the request is from an admin, aggregate data grouped by agentEmail
      const itineraries = await user.aggregate([
        {
          $match: {
            $or: [
              { agentEmail: { $exists: true, $ne: "" } }, // Ensure agentEmail exists and is not an empty string
              { agentUID: { $exists: true, $ne: "" } }, // Ensure agentUID exists and is not an empty string
            ],
          },
        },
        {
          $group: {
            _id: "$agentEmail", // Group by agentEmail. Change this to "$agentUID" to group by agentUID instead
            itineraries: {
              $push: {
                _id: "$_id",
                name: "$travellerDetails.name",
                Days: "$travellerDetails.duration",
                ActivitiesCount: { $size: "$selectedActivities" },
                FLightsIncluded: {
                  $add: [
                    { $size: "$selectedDomesticFlights" },
                    { $size: "$selectedInternationalFlights" },
                    { $size: "$BookingSelectedDomesticFlights" },
                    { $size: "$BookingSelectedInternationalFlights" },
                  ],
                },
                country: "$travellerDetails.country",
                agentUID: "$agentUID",
                createdAt: "$createdAt",
                visa: "$travellerDetails.visa",
                TravelDate: "$travellerDetails.dateOfTravel",
                adults: "$travellerDetails.adults",
                children: "$travellerDetails.child",
                infants: "$travellerDetails.infants",
              },
            },
          },
        },
        { $sort: { _id: 1 } }, // Sort groups by agentEmail or agentUID
      ]);

      res.json(itineraries);
    } else {
      // For non-admin users, add conditions to the query array if agentUID and email are provided
      if (agentUID) {
        query.push({ agentUID: agentUID });
      }
      if (email) {
        query.push({ agentEmail: email });
      }

      const itineraries = await user.find(query.length ? { $or: query } : {});
      let itinerariesWithNameAndID = itineraries.map((itinerary) => ({
        _id: itinerary._id,
        name: itinerary.travellerDetails.name,
        Days: itinerary.travellerDetails.duration,
        ActivitiesCount: itinerary.selectedActivities.length,
        FLightsIncluded:
          itinerary.selectedDomesticFlights.length +
          itinerary.selectedInternationalFlights.length +
          itinerary.BookingSelectedDomesticFlights.length +
          itinerary.BookingSelectedInternationalFlights.length,
        country: itinerary.travellerDetails.country,
        agentUID: itinerary.agentUID,
        agentEmail: itinerary.agentEmail,
        createdAt: itinerary.createdAt,
        visa: itinerary.travellerDetails.visa,
        TravelDate: itinerary.travellerDetails.dateOfTravel,
        adults: itinerary.travellerDetails.adults,
        children: itinerary.travellerDetails.child,
        infants: itinerary.travellerDetails.infants,
      }));
      itinerariesWithNameAndID = itinerariesWithNameAndID.reverse();
      res.json(itinerariesWithNameAndID);
    }
  } catch (error) {
    console.error("Error during database fetch:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// try {
//   const response = await fetch(
//     `http://localhost:5001/Updatehotels/${selectedHotel._id}`,
//     {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(updatedHotel),
//     }
//   );

//   if (!response.ok) throw new Error("Failed to update hotel");

//   // Optionally, fetch the updated list of hotels from the server
// } catch (error) {
//   console.error("Error updating hotel:", error);
// }

app.put("/Updatehotels/:id", async (req, res) => {
  const { id } = req.params;
  const updatedHotelData = req.body; // Assuming this is the updated hotel data object
  console.log(updatedHotelData);
  // Define your three collections/models
  const models = [BaliHotelsModel, hotel, ThailandHotels];

  try {
    // Promise.all will execute all the findByIdAndUpdate operations in parallel
    const updates = await Promise.all(
      models.map((Model) => {
        // findByIdAndUpdate to update the document in each collection
        return Model.findByIdAndUpdate(id, updatedHotelData, { new: true });
      })
    );

    // Filter out null responses (in case the ID wasn't found in some collections)
    const updatedDocuments = updates.filter((update) => update !== null);

    if (updatedDocuments.length > 0) {
      console.log(updatedDocuments);
      res.json(updatedDocuments); // Send back the updated documents
    } else {
      console.log("not working");
      res.status(404).send("Document not found in any collection");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

app.put("/UpdateActivities/:id", async (req, res) => {
  const { id } = req.params;
  const updatedActivityData = req.body; // Assuming this is the updated hotel data object
  console.log(updatedActivityData);
  // Define your three collections/models
  const models = [ThailandActivitiesSchema, BaliData, data];

  try {
    // Promise.all will execute all the findByIdAndUpdate operations in parallel
    const updates = await Promise.all(
      models.map((Model) => {
        // findByIdAndUpdate to update the document in each collection
        return Model.findByIdAndUpdate(id, updatedActivityData, { new: true });
      })
    );

    const updatedDocuments = updates.filter((update) => update !== null);

    if (updatedDocuments.length > 0) {
      console.log("document updated");
      // console.log(updatedDocuments);
      console.log(updates);
      res.json(updatedDocuments); // Send back the updated documents
    } else {
      console.log("not working");

      res.status(404).send("Document not found in any collection");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

const packageSchema = require("./backend-api/model/PackageModels/Package");
const { error } = require("console");

app.get("/api/packages", async (req, res) => {
  
  try {
    const packageSchemas = await packageSchema.find();
    res.json(packageSchemas);
    console.log("mongo working fine!!");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  } 
}
);

app.get('/health', async (req, res) => {
  try {
    const dbStatus = await checkDatabaseConnectivity();

    const healthStatus = {
      database: dbStatus ? 'Healthy' : 'Unhealthy',
      // Include more components as needed
    };

    const isHealthy = dbStatus; 

    res.status(isHealthy ? 200 : 503).json(healthStatus);
  } catch (error) {
    console.error('Health check failed', error);
    res.status(503).send('Service Unavailable');
  }
});
 
async function checkDatabaseConnectivity() {
  try {
    await mongoose.connection.db.admin().ping();
    return true;
  } catch (error) {
    console.error('Database connectivity check failed', error);
    return false;
  }
}



 



app.post("/api/package/:id", async (req, res) => {
  const id = req.body.id;
  try {
    let packageInstance = await packageSchema.findById(id); // Changed variable name
    if (packageInstance) {
      // Update existing document
      packageInstance = await packageSchema.findByIdAndUpdate(id, req.body, { new: true });
    } else {
      // Create a new document
      packageInstance = new packageSchema({ // Changed variable name
        _id: req.body.id,
        agentEmail: req.body.agentEmail,
        createdAt: req.body.createdAt,
        agentUID: req.body.agentUID,
        country: req.body.country,
        isPackage: req.body.isPackage,
        packageDetails: req.body.packageDetails,
        selectedActivities: req.body.selectedActivities,
        selectedHotels: req.body.selectedHotels,
        selectedTransfers: req.body.selectedTransfers,
        selectedAddons: req.body.selectedAddons,
        selectedBuses: req.body.selectedBuses,
        selectedTrains: req.body.selectedTrains,
        selectedCambodiaPackage: req.body.selectedCambodiaPackage,
        CambodiaWhen: req.body.CambodiaWhen,
        CambodiaAccomodationType: req.body.CambodiaAccomodationType,
        selectedCambodiaHotels: req.body.selectedCambodiaHotels,
        selectedAirportTransferCities: req.body.selectedAirportTransferCities,
      });
      await packageInstance.save(); // Changed variable name
    }
    res.send(packageInstance); // Changed variable name
    console.log(req.body);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/package/:id", async (req, res) => {
  try {
    const packageInstance = await packageSchema.findById(req.params.id);
    res.send(packageInstance);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

      
app.get("/api/check/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const userInstance = await user.findById(id);
    if (userInstance) {
      res.json({ message: "ID exists" });
    } else {
      res.json({ message: "ID does not exist" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
);

const FLightVoucher = require("./backend-api/model/FlightVoucher");
// agentUID: currentUser.uid || "",
//     agentEmail: currentUser.email || "",
//     agentName: currentUser.displayName || "",
//     createdAt: new Date().toISOString(),
app.post("/api/flightVoucher", async (req, res) => {
  const details = req.body;
  try {
    const flightVoucherData = new FLightVoucher({
     name: details.name,
      bookingID: details.bookingID,
      VoucherLink: details.VoucherLink,
      agentUID: details.agentUID,
      agentEmail: details.agentEmail,
      agentName: details.agentName,
    });
    await flightVoucherData.save();
    res.send(flightVoucherData);
    console.log(req.body);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
  }
);

app.get("/api/getFlightVoucher", async (req, res) => {
  try {
    const flightVoucherData = await FLightVoucher.find();
    res.json(flightVoucherData);
    console.log("mongo working fine!!");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
);



const PORT = process.env.PORT || 5001; 
 
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`); 
});
