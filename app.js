const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Listings = require('./models/listing.js')

const MONGO_URL = 'mongodb://127.0.0.1:27017/closinary';

main()
    .then(() => { console.log("Connected to MongoDB") })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect(MONGO_URL);
}


app.get('/', (req, res) => {
    res.send("Hi i am root")
})

app.get('/testListing', async (req, res) => {
    const sampleListing = new Listings({
        title: "test listing",
        description: "my beach side villa",
        price: 1000,
        location: "beach",
        country: "italy"
    })

    await sampleListing.save();
    console.log("sample was saved");
    res.send("successfully tested");

})

app.listen(8080, () => {
    console.log('Server is listening to port 8080');
})