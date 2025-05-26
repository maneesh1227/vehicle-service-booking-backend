const jwt = require("jsonwebtoken");

const validateShopToken = async (req,res,next) =>{
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;

    if(authHeader && authHeader.startsWith("Bearer")){
        token = authHeader.split(" ")[1]
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRETE, (err, decoded) =>{
            if(err){
                res.status(400)
                throw new Error("Shop is not Authorized")
            }
            req.shop = decoded.shop;
            next();
        });
        if(!token){
            res.status(401);
            throw new Error("Shop is not verified");
        }
    }
}

module.exports = validateShopToken