const express = require("express");

const {userRegister,
                    userLogin,
                    getUserBookings,
                    createBookings,
                    deleteBookings} = require('../controllers/userController');
const {validateToken} = require("../middleware/validateToken")

const router = express.Router();

router.post('/register',userRegister);

router.post('/login', userLogin);

router.use(validateToken)

router.get('/',getUserBookings);

router.post('/',createBookings);

router.delete('/:id',deleteBookings);

module.exports = router 