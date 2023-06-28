const mongoose=require("mongoose")
const laptopSchema=new mongoose.Schema({
    manufacturer:{
        type:String,
        lowercase:true,
        trim:true
    }
})
module.exports=mongoose.model("Laptop",laptopSchema)