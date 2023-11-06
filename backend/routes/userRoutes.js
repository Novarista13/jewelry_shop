const router = require("express").Router();
const {getUser,deleteUser,updateUser} = require("../controllers/userController");

router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);


module.exports = router;