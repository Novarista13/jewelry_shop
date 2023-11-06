const router = require("express").Router();
const asyncHandler = require("express-async-handler");
const User = require("../models/User");
const bcrypt = require("bcrypt");


//register user
router.post('/register',asyncHandler(async(req,res)=>{

        const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(req.body.password,salt);
        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:hashPass
        })
        const user = await newUser.save();
        res.status(201).json(user)
      
}))


//login user
router.post('/login',asyncHandler(async(req,res)=>{

    const existedUser = await User.findOne({email:req.body.email});
        !existedUser && res.status(400).json({message:"Wrong credentials!"});

        const validatedPwd = await bcrypt.compare(req.body.password,existedUser.password);
        !validatedPwd && res.status(400).json({message:"Wrong credentials!"});

        const {password,...userInfos} = existedUser._doc;
        res.status(200).json(userInfos)
  
}))



module.exports = router;