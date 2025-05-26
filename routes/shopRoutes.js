const express = require("express");
const router = express.Router() 

const {registerShop,loginShop,getShopOrders,updateShopOrder} = require("../controllers/shopController")

const validateShopToken = require("../middleware/validateShopToken")

router.post("/register", registerShop);
router.post("/login", loginShop);

router.use(validateShopToken)

router.get("/",getShopOrders);
router.patch("/:id",updateShopOrder);

module.exports = router;