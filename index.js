const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const app = express();
const puppeteer = require('puppeteer');
const multer = require('multer');
const upload = multer();
const FormData = require('form-data');
app.use(cors());


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

require('dotenv').config();

const bodyParser = require('body-parser');
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
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const url = req.body.url;

    await page.goto(url, { waitUntil: 'networkidle0' });

    // Set screen size and generate PDF
    const height = await page.evaluate(() => Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight
    ));
    await page.setViewport({ width: 1080, height: height });

    await page.waitForSelector('img');

    const pdfPath = path.join(__dirname, 'resultPage.pdf');
    await page.pdf({
      width: '1350px',
      height: `${height}px`,
      path: pdfPath,
      printBackground: true
    });

    console.log('PDF generated!');
    await browser.close();

    // Send the PDF as a response
    res.download(pdfPath);
  } catch (error) {
    console.error('Error:', error.body);
    res.status(500).send('Error generating PDF');
  }
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

app.put('/api/updateHotel/:id', async (req, res) => {
  const { id } = req.params;
  const { day, selectedHotel } = req.body;

  try {
    const updatedDocument = await user.findByIdAndUpdate(id, {
      $set: {
        "selectedHotels.$[elem].selectedHotel": selectedHotel
      }
    }, {
      arrayFilters: [{ "elem.day": day }],
      new: true
    });

    res.json(updatedDocument);
  } catch (error) {
    res.status(500).send(error);
  }
}
);
  

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

const domesticFlight = require('./backend-api/model/ResultPageModels/DomesticFlight');
const internationalFlight = require('./backend-api/model/ResultPageModels/InternationalFlight');
const activities = require('./backend-api/model/ResultPageModels/ActivitiesSchema');
const addons = require('./backend-api/model/ResultPageModels/Addons');
const travellersDetails = require('./backend-api/model/ResultPageModels/travellersDetails');
const selectedHotel = require('./backend-api/model/ResultPageModels/SelectedHotel');
const selectedTransfer = require('./backend-api/model/ResultPageModels/SelectedTransfers');
const user = require('./backend-api/model/ResultPageModels/Users');

app.post('/api/user', async (req, res) => {
  try {
    const userdata = new user({
      _id: req.body.id,
      travellerDetails: req.body.travellerDetails,
      country: req.body.country,
      selectedActivities: req.body.selectedActivities,
      selectedHotels: req.body.selectedHotels,
      selectedTransfers: req.body.selectedTransfers,
      selectedDomesticFlights: req.body.selectedDomesticFlights,
      selectedInternationalFlights: req.body.selectedInternationalFlights,
      selectedAddons: req.body.selectedAddons,
    });
    await userdata.save();
    res.send(userdata);
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/user/:id', async (req, res) => {
  try {
    const userdata = await user.findById(req.params.id);
    res.send(userdata);
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.put('/updateActivity/:id', async (req, res) => {
  const { id } = req.params;
  const { day, selectedActivity } = req.body;

  try {
    const updatedDocument = await user.findByIdAndUpdate(id, {
      $set: {
        "selectedActivities.$[elem].Activities": selectedActivity
      }
    }, {
      arrayFilters: [{ "elem.day": day }],
      new: true
    });

    res.json(updatedDocument);
  } catch (error) {
    res.status(500).send(error);
  }
});





const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  
});




