const mongoose = require("mongoose");


const CategorySchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name field is required"]
    },
    
},{
    timestamps:true
});


module.exports = mongoose.model("Category",CategorySchema);
