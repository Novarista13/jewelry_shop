const asyncHandler = require("express-async-handler");
const Jewellery = require("../models/Jewellery")
const Category = require("../models/Category");

const getJews = asyncHandler(async(req,res)=>{
    const jews = await Jewellery.find({});
    res.status(200).json(jews);
})

const postJews = asyncHandler(async(req,res)=>{
    
        const {name,price,color,category_name,type,brand,size,metal,featured,is_instock} = req.body;
        if(!name,!color,!price,!category_name,!type,!brand,!size,!metal){
            res.status(400).json({msg:"All fields are mandatory to create a jewellery!"});
        }
        else{
        
            const selectedCategory = await Category.find({name:category_name});
            
           if(selectedCategory){
            const jewellery = Jewellery.create({
                name,
                price,
                color,
                category_id:selectedCategory[0]._id,
                type,
                brand,
                size,
                metal,
                featured:featured,
                is_instock
                })

                res.status(201).json(jewellery);
           }

            // await jewellery.save();
           
        }
   
})


module.exports = {getJews,postJews}


