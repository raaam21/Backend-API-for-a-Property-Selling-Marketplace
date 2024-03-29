const express=require("express");
const router = express.Router();

const {registerUser,loginUser} = require('../auth/userAuth');
const { tokenValidate } = require("../middlewares/tokenHandler");
const {allUser ,buyProperty} = require("../controllers/userControllers");


router.post('/signUp',registerUser);

router.get('/login',loginUser);

router.get('/',tokenValidate,allUser);

router.get('/buy',tokenValidate,buyProperty);



module.exports = router;