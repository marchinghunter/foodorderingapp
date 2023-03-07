const { Router } = require("express");
const { signup, login,checkUser, logout } = require("./usercontroller");

const router = Router();
router.post("/signup", signup);
router.post("/login", login);
router.get('/checkuser', checkUser);
router.get('/logout', logout);

module.exports = router;
