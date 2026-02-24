
const mongoose = require("mongoose");

module.exports = async function connectDB(){
  try{
    await mongoose.connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/employee_hierarchy");
    console.log("MongoDB Connected");
  }catch(err){
    console.error(err);
    process.exit(1);
  }
}
