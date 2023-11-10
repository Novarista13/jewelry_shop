const asyncHandler = require("express-async-handler");
const Jewellery = require("../models/Jewellery");
const Category = require("../models/Category");

const getJews = asyncHandler(async(req,res)=>{
    const jews = await Jewellery.find({});
    res.status(200).json(jews);
})

const postJew = asyncHandler(async(req,res)=>{
    

        const {name,image,price,color,category_name,type,brand,size,metal,featured,is_instock} = req.body;

        console.log(req.body);

        if(!name,!color,!price,!category_name,!type,!brand,!size,!metal){
            res.status(400).json({msg:"All fields are mandatory to create a jewellery!"});
        }
        else{
        
            const selectedCategory = await Category.find({name:category_name});
            
           if(selectedCategory){
            const jewellery = Jewellery.create({
                name,
                image,
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

const getJew = asyncHandler(async(req,res)=>{
    const existedJew =  await Jewellery.findById(req.params.id);
    if(existedJew){
        res.status(200).json(existedJew)
    }
    else{
        res.status(404).json({message:"Requested jewellery does not exists..."});
    }

})

const updateJew = asyncHandler(async(req,res)=>{
    const existedJew =  await Jewellery.findById(req.params.id);
    if(existedJew){

        const selectedCategory = await Category.find({name:req.body.category_name});
            
        if(selectedCategory){

        const updatedJew = await Jewellery.findByIdAndUpdate(req.params.id,{
             $set:{...req.body,category_id:selectedCategory._id}
             },{ new: true })
        res.status(200).json(updatedJew)

        }

       
    }
    else{
        res.status(404).json({message:"Requested jewellery does not exists..."});
    }
})

const deleteJew = asyncHandler(async(req,res)=>{
    const existedJew =  await Jewellery.findById(req.params.id);
    if(existedJew){
        await Jewellery.findByIdAndDelete(req.params.id)
        res.status(200).json({message:"Jewellery deleted successfully."})
    }
    else{
        res.status(404).json({message:"Requested jewellery does not exists..."});
    }
})


module.exports = {getJews,postJew,getJew,updateJew,deleteJew}


