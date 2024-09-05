const Router = require("express");
const router = new Router();
const UserController = require("../controller/user.controller");

router.post("/createuser", UserController.createUser);
router.post("/login", UserController.logIn);
module.exports = router;