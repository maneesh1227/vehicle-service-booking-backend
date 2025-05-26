const mongoose = require("mongoose");

const shopSchema = mongoose.Schema({
    shopName:{
        type:String,
        required:["true", "Please Enter Shop Name"]
    },
    email:{
        type:String,
        required:["true", "Please Enter Email"]
    },
    location:{
        type:String,
        required:["true", "Please Enter Location"]
    },
    contact:{
        type:String,
        required:["true", "Please Enter Mobile Number"]
    },
    password:{
        type:String,
        required:["true", "Please Enter Password"]
    }
},{timestamps:true})

module.exports = mongoose.model("Shop", shopSchema)