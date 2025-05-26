const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please add name."],
    },
    userName:{
        type:String,
        required:[true, "Plaese add username."],
    },
    password:{
        type:String,
        required:[true, "Plaese add password."]
    }
},{
    timestamps:true,
});

module.exports = mongoose.model("user", userSchema);