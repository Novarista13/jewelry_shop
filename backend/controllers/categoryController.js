const asyncHandler = require("express-async-handler");
const Category = require("../models/Category");

const getCats = asyncHandler(async(req,res)=>{
    const categories = await Category.find({});
    res.status(200).json(categories);
})

const postCat = asyncHandler(async(req,res)=>{
    
        const {name} = req.body;
        if(!name){
            res.status(400).json({msg:"All fields are mandatory to create a category!"});
        }
        else{
        
            let category = Category.create({
            name:name
            })

            // await category.save();
            res.status(201).json(category);
        }
   
})


module.exports = {getCats,postCat}


