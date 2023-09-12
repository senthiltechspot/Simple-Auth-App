const router = require("express").Router();
const { UpdateUser, getUserDetails } = require("../Controller/User.controller");
const { verifyToken } = require("../middlewares/Auth.middleware");


router.put("/update", [verifyToken], UpdateUser);
router.get("/get", [verifyToken], getUserDetails);


module.exports = router;
