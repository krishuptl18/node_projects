
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req,res)=>{
  try{
    const {name,email,password,role,managerId} = req.body;
    const hash = await bcrypt.hash(password,10);
    const user = new User({name,email,password:hash,role,managerId});
    await user.save();
    res.json({message:"User registered"});
  }catch(err){
    res.status(400).json({message: err.message});
  }
}

exports.login = async (req,res)=>{
  const {email,password} = req.body;
  const user = await User.findOne({email});
  if(!user) return res.status(400).json({message:"User not found"});

  const match = await bcrypt.compare(password,user.password);
  if(!match) return res.status(400).json({message:"Wrong password"});

  const token = jwt.sign({id:user._id, role:user.role}, process.env.JWT_SECRET || "supersecret");
  res.json({token});
}
