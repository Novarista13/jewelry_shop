const mongoose = require("mongoose");


const JewellerySchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name field is required"]
    },
    image: {
        type: String,
        default: "",
      },
    price:{
        type:String,
        required:[true,"Price field is required"]
    },
    color:{
        type:String,
        required:[true,"Color field is required"]
    },
    category_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Category"
    },
    type:{
        type:String,
        required:[true,"Type field is required"]
    },
    brand:{
        type:String,
        required:[true,"Brand field is required"]
    },
    size:{
        type:String,
        required:[true,"Size field is required"]
    },
    metal:{
        type:String,
        required:[true,"Metal field is required"]
    },
    featured:{
        type: Boolean,
    },
    is_instock:{
        type: Boolean,
    }
},{
    timestamps:true
});


module.exports = mongoose.model("Jewellery",JewellerySchema);
