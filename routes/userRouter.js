const express=require("express");
const router = express.Router();

const {registerUser,allUser,loginUser} = require('../controllers/userController');

router.route('/signUp').post(registerUser);

router.route('/').get(allUser);

router.route('/login').get(loginUser);


module.exports = router;