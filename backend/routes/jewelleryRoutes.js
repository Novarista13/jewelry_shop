const router = require("express").Router();
const {getJews,postJew,getJew,updateJew,deleteJew} = require("../controllers/jewelleryController");

router.route('/').get(getJews).post(postJew);
router.route('/:id').get(getJew).put(updateJew).delete(deleteJew);

module.exports = router;