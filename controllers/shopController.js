const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const Shop = require("../models/shopModel")
const Service = require("../models/serviceModel")


const registerShop = async (req,res)=>{
    const {shopName,location,contact,email,password} = req.body;
    const isShopExists = await Shop.findOne({email});
    if (isShopExists){
        return res.status(200).json({msg:"Shop already exists."})
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const createShop = await Shop.create({shopName,location,contact,email,password:hashedPassword});
    res.status(200).json({msg:"shop registered successfully.",createShop})
}

const loginShop = async(req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
        return req.status(401).json({msg:"All fields are required"})
    }
    const isShopExists = await Shop.findOne({email})
    if(!isShopExists){
        return req.status(400).json({msg:"Enter Valid details"})
    }
    const isPasswordMatched = await bcrypt.compare(password,isShopExists.password);
    if(!isPasswordMatched){
        return req.status(400).json({msg:"Email or password is invalid"})
    }
    const accessToken = await jwt.sign(
            {
                shop: {
                    email: isShopExists.email,
                    id: isShopExists._id,
                },
            },
            process.env.ACCESS_TOKEN_SECRETE,
            { expiresIn: "1h" }
    )

    return res.status(200).json({ accessToken });    
}

const getShopOrders = async (req,res)=>{
    const shopId = req.shop.id 
    const getOrders = await Service.find({shopId})
    res.status(200).json(getOrders);
}

const updateShopOrder = async (req,res)=>{
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

module.exports = {registerShop,loginShop,getShopOrders,updateShopOrder}