const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const app = express();
const puppeteer = require('puppeteer');
require('dotenv').config();

const bodyParser = require('body-parser');
// app.use(express.json());



app.use(cors());

app.use(bodyParser.json({ limit: '100mb' })); 
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));



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

    
    app.post('/generate-pdf', async (req, res) => {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
    
      // Set content and wait for page to load all resources
      await page.setContent(req.body.html, { waitUntil: 'networkidle0' });
    
      // Evaluate the height of the content on the page
      const height = await page.evaluate(() => {
        return Math.max(
          document.body.scrollHeight,
          document.body.offsetHeight,
          document.documentElement.clientHeight,
          document.documentElement.scrollHeight,
          document.documentElement.offsetHeight
        );
      });
    
      // Set the viewport to A4 width and calculated height
      await page.setViewport({ width: 1350, height });
    
      // Generate the PDF with custom dimensions
      const pdf = await page.pdf({
        width: '1350px',
        height: `${height}px`,
        printBackground: true
      });
    
      await browser.close();
      res.contentType('application/pdf');
      res.send(pdf);
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
      Rating: req.body.Rating,
      Image: req.body.Image

    });
    await hoteldata.save();
    res.send(hoteldata);
    console.log(req.body);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const bus = require('./backend-api/model/bus');

app.get('/api/bus', async (req, res) => {
  try {
    const buses = await bus.find();
    res.json(buses);
    console.log("mongo working fine!!");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const train = require('./backend-api/model/train');

app.get('/api/train', async (req, res) => {
  try {
    const trains = await train.find();
    res.json(trains);
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