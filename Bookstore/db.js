const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost:27017/bookstore")
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("DB Error:", err));

module.exports = mongoose;
    
