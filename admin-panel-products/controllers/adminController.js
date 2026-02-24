const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");

exports.registerAdmin = async (req,res)=>{

    const {email,password} = req.body;

    const hash = await bcrypt.hash(password,10);

    const admin = new Admin({email,password:hash});

    await admin.save();

    res.json({message:"Admin registered"});
}

exports.loginAdmin = async (req,res)=>{

    const {email,password} = req.body;

    const admin = await Admin.findOne({email});

    if(!admin){
        return res.status(400).json({message:"Admin not found"});
    }

    const match = await bcrypt.compare(password, admin.password);

    if(!match){
        return res.status(400).json({message:"Invalid password"});
    }

    res.json({message:"Login successful"});
}
