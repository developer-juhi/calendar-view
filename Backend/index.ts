const express = require('express');
const app = express();
const port = 4000;
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const MONGO_URI = 'mongodb+srv://juhi:GyfK4mJ7b6vIRxC5@cluster0.2b6leht.mongodb.net/EventScheduler'
import EventsController from './controllers/EventsController';


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get('/', (req: any, res: any) => {
    res.send('Hello World!');
});
const corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
};

app.use(cors(corsOptions)); // Use this after the variable declaration

app.listen(port, async () => {
    if (MONGO_URI) {
        await mongoose.connect(MONGO_URI);
    }
    console.log("Server is running on Port: " + port);
    // logger.info('Express server started on port: ' + port);
});

app.get('/api/calendar', EventsController.get);
app.post('/api/calendar', EventsController.store);
