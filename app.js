const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Listings = require('./models/listing.js');
const path = require('path');

const MONGO_URL = 'mongodb://127.0.0.1:27017/closinary';

main()
    .then(() => { console.log("Connected to MongoDB") })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect(MONGO_URL);
}

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.send("Hi i am root")
})


// index route 
app.get('/listings', async (req, res) => {
    const allListing = await Listings.find({});
    res.render('listings/index.ejs', { allListing });
})

app.listen(8080, () => {
    console.log('Server is listening to port 8080');
})