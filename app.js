const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



  const mongoAtlasDB ='mongodb+srv://travauratech:travauratech@cluster0.zqfkwop.mongodb.net/' ;
  mongoose.connect(mongoAtlasDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(() => {
      console.log('Connected to MongoDB Atlas!');
    })
    .catch((err) => {
      console.error(err);
    });

const data = require('./backend-api/model/data');

app.get('/api/data', async (req, res) => {
  try {
    const datas = await data.find();
    res.json(datas);
    console.log("mongo working fine!!");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const transfer = require('./backend-api/model/transfer');

app.get('/api/transfer', async (req, res) => {
  try {
    const transfers = await transfer.find();
    res.json(transfers);
    console.log("mongo working fine!!");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const flight = require('./backend-api/model/flight');

app.get('/api/flight', async (req, res) => {
  try {
    const flights = await flight.find();
    res.json(flights);
    console.log("mongo working fine!!");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const bustrain = require('./backend-api/model/bustrain');

app.get('/api/bustrain', async (req, res) => {
  try {
    const bustrains = await bustrain.find();
    res.json(bustrains);
    console.log("mongo working fine!!");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const hotel = require('./backend-api/model/hotel');
 
app.get('/api/hotel', async (req, res) => {
  try {
    const hotels = await hotel.find();
    res.json(hotels);
    console.log("mongo working fine!!");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// app.post('/api/hotel', async (req, res) => {
//   const hoteldata = new hotel({
//     _id: new mongoose.Types.ObjectId(),
//     Region: req.body.Region,
//     City: req.body.City,
//     Category: req.body.Category,
//     Name: req.body.Name,
//     RoomType: req.body.RoomType,
//     MAPRoomPrice: req.body.MAPRoomPrice,
//     CPRoomPrice: req.body.CPRoomPrice,
//     EPRoomPrice: req.body.EPRoomPrice,
//     PriceType: req.body.PriceType,
//     Rating: req.body.Rating
//   });
  
//   try {
//     console.log(req.body);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

app.post('/api/hotel', async (req, res) => {
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
      Rating: req.body.Rating
    });
    await hoteldata.save();
    res.send(hoteldata);
    console.log(req.body);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



const vietnamCityStructure = require('./backend-api/model/vietnamCityStructure');

app.get('/api/vietnamCityStructure', async (req, res) => {
  try {
    const vietnamCityStructures = await vietnamCityStructure.find();
    res.json(vietnamCityStructures);
    console.log("mongo working fine!!");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
);

const globalCityStructure = require('./backend-api/model/GlobalCityStructure');

app.get('/api/globalCityStructure', async (req, res) => {
  try {
    const globalCityStructures = await globalCityStructure.find();
    res.json(globalCityStructures);
    console.log("mongo working fine!!");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  
});


// /_id: mongoose.Schema.Types.ObjectId,
// Region: String,
// City: String,
// Category: String,
// Name: String,
// RoomType: String,
// MAPRoomPrice: Number,
// CPRoomPrice: Number,
// EPRoomPrice: Number,
// PriceType: String,
// Rating: Number