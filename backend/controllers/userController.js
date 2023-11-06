const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/User")

const getUser = asyncHandler(async(req,res)=>{

        const user = await User.findById(req.params.id);
        const { password, ...userInfos } = user._doc;
        res.status(200).json(userInfos);
     
})

const updateUser = asyncHandler(async(req,res)=>{
   
        if (req.body.password) {
          const salt = await bcrypt.genSalt(10);
          req.body.password = await bcrypt.hash(req.body.password, salt);
        }
     
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
              $set: req.body,
            },
            { new: true }
          );
        res.status(200).json(updatedUser);
     
})

const deleteUser = asyncHandler(async(req,res)=>{
 
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted...");
         
})




module.exports = {getUser,deleteUser,updateUser}
