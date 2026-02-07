const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    releaseYear: {
        type: Number
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    language: {
        type: String
    }
}, { timestamps: true });

module.exports = mongoose.model("Movie", movieSchema);
