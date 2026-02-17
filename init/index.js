const mongoose = require('mongoose');
const initData = require('./data.js');
const Listings = require('../models/listing.js')

const MONGO_URL = 'mongodb://127.0.0.1:27017/closinary';

main()
    .then(() => { console.log("Connected to MongoDB") })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect(MONGO_URL);
}


const initDB = async () => {
    await Listings.deleteMany({});
    await Listings.insertMany(initData.data);
    console.log("Database initialized with sample data");
}

initDB();