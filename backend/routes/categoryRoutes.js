const router = require("express").Router();
const {getCats,postCat} = require("../controllers/categoryController");

router.route('/').get(getCats).post(postCat);


module.exports = router;