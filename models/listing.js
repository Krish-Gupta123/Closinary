const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default: "https://unsplash.com/photos/modern-skyscraper-with-glass-facade-against-cloudy-sky-lEsfGOaF4nY",
        set(v) {
            v === ""
                ? "https://unsplash.com/photos/a-pool-of-water-surrounded-by-rocks-and-trees-zo_udYMcaVc"
                : v
        },
        get(v) { return v || "https://unsplash.com/photos/modern-skyscraper-with-glass-facade-against-cloudy-sky-lEsfGOaF4nY" }
    },
    price: Number,
    location: String,
    country: String,
})

const Listings = mongoose.model('Listings', listingSchema);
module.exports = Listings;