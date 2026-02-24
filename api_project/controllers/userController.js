
const User = require("../models/User");

exports.getAllUsers = async (req,res)=>{
  const users = await User.find().select("-password");
  res.json(users);
}

exports.getEmployeesForManager = async (req,res)=>{
  const employees = await User.find({managerId: req.user.id}).select("-password");
  res.json(employees);
}

exports.getProfile = async (req,res)=>{
  const user = await User.findById(req.user.id).select("-password");
  res.json(user);
}

exports.updateUser = async (req,res)=>{
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {new:true}).select("-password");
  res.json(user);
}

exports.deleteUser = async (req,res)=>{
  await User.findByIdAndDelete(req.params.id);
  res.json({message:"User deleted"});
}
