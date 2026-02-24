const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const adminRoutes = require("./routes/adminRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/admin", adminRoutes);
app.use("/products", productRoutes);

app.get("/", (req,res)=>{
    res.send("Admin Panel API Running");
});

app.listen(5000, ()=>{
    console.log("Server running on port 5000");
});
