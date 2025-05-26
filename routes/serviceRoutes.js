const express = require("express")
const {getAllServices,updateServiceStatus,getAllUsers,getAllShops}  = require("../controllers/serviceController");

const router = express.Router()

router.get('/',getAllServices);

router.get('/shops',getAllShops);

router.get('/users', getAllUsers)

router.patch('/:id',updateServiceStatus);



module.exports = router