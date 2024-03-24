const express=require("express");
const router = express.Router();

const {addProperty,
    getProperty, 
    deleteProperty,
    updateProperty} = require("../controllers/propControllers");

router.route('/add').post(addProperty);
router.route('/').get(getProperty);
router.route('/:id').delete(deleteProperty).patch(updateProperty);

module.exports = router;