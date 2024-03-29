const express=require("express");
const router = express.Router();

const {addProperty,
    searchProperty,
    getAllProperty, 
    deleteProperty,
    updateProperty} = require("../controllers/propControllers");

const { tokenValidate } = require("../middlewares/tokenHandler");

router.use(tokenValidate);
router.route('/add').post(addProperty);
router.route('/').get(getAllProperty);
router.route('/search').get(searchProperty);
router.route('/:id').delete(deleteProperty).patch(updateProperty);

module.exports = router;