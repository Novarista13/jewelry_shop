const router = require("express").Router();
const {getJews,postJews} = require("../controllers/jewelleryController");

router.route('/').get(getJews).post(postJews);


module.exports = router;