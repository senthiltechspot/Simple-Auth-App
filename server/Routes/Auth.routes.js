const router = require("express").Router();
const { register, login } = require("../Controller/Auth.controller");
const {
  ValidateAuthRegister,
  ValidateAuthLogin,
} = require("../middlewares/Auth.middleware");

router.post("/register", [ValidateAuthRegister], register);
router.post("/login", [ValidateAuthLogin], login);

module.exports = router;
