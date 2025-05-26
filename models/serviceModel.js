const mongoose = require("mongoose");

const serviceSchema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"user",
    },
    shopId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Shop",
    },
    vehicle:{
        type:String,
        required:[true,"Please add vehicle type"]
    },
    services:{
        type:[String],
        required:[true, "Please enter required services"]
    },
    status: {
        type: String,
        enum: ["pending", "in progress", "completed", "cancelled"],
        default: "pending"
    }
},{timestamps:true,})

module.exports = mongoose.model("Service", serviceSchema)