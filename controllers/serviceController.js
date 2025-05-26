const Service = require('../models/serviceModel')
const Shop = require('../models/shopModel')
const user = require('../models/userModel')



// get all shops

const getAllShops = async (req,res) => {
    const getShops = await Shop.find()
    res.status(200).json(getShops)
}

//get all users

const getAllUsers = async (req,res) => {
    const getUsers = await user.find()
    res.status(200).json(getUsers)
}

//Get all services

const getAllServices = async (req, res) =>{
    const getServices = await Service.find();
    res.status(200).json(getServices);
}

//update services status

const updateServiceStatus = async (req, res)=>{
    const {id} = req.params
    const {newStatus} = req.body
    const isServiceExists = await Service.findById(id)
    if (!isServiceExists){
        return res.status(400).json({msg:"Service not exists"});
    }

    const updatedService = await Service.findByIdAndUpdate(id,{
        status:newStatus,
    },{ new: true });

    res.status(200).json({msg:"Service status updated successfully",updatedService})
    
}

module.exports = {getAllShops,getAllUsers,getAllServices,updateServiceStatus} 