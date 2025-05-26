const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const user = require("../models/userModel");
const Service = require("../models/serviceModel");


const userRegister = async (req, res) =>{
    const {name,userName,password} = req.body;
    console.log(req.body)
    if(!userName || !password || !name){
        res.status(400)
        throw new Error("All fields are required!");
    }
    const userExists = await user.findOne({userName});
    if(userExists){
        return res.status(400).json({msg:"User already exists."})
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = await user.create({name,userName,password:hashedPassword})

    res.status(200).json({msg:"user registered successfuly",newUser});
}

const userLogin = async (req, res) => {
    const { userName, password } = req.body;

    if (!userName || !password) {
        return res.status(400).json({ msg: "All fields are required" }); 
    }

    const userExists = await user.findOne({ userName });

    if (!userExists) {
        return res.status(401).json({ msg: "Invalid credentials" });
    }

    const isPasswordVerified = await bcrypt.compare(password, userExists.password);

    if (isPasswordVerified) {
        const accessToken = jwt.sign(
            {
                user: {
                    userName: userExists.userName,
                    id: userExists._id,
                },
            },
            process.env.ACCESS_TOKEN_SECRETE,
            { expiresIn: "1h" }
        );

        return res.status(200).json({ accessToken });
    } else {
        return res.status(401).json({ msg: "Email or Password is not valid." });
    }
};


const getUserBookings = async (req,res) =>{
    const userId = req.user.id;
    const myBookings = await Service.find({userId}) 
    res.status(200).json(myBookings);
}

const createBookings = async (req,res) =>{
    const {vehicle,services,shopId} = req.body;
    if (!vehicle || !services){
        return res.status(400).json({msg:"All fields are required."})
    }
    const newService = {
        vehicle,
        services,
        status:"pending",
        userId:req.user.id,
        shopId
    }
    const addNewService = await Service.create(newService);
    res.status(200).json({msg:"Booking Created Successfuly"});
}


const deleteBookings = async (req,res) =>{
    const {id} = req.params;
    const deleteBookings = await Service.findByIdAndDelete(id);
    res.status(200).json({msg:"service deleted"},deleteBookings);
}

module.exports = {userRegister,
                    userLogin,
                    getUserBookings,
                    createBookings,
                    deleteBookings
}