const express = require("express");
const router = express.Router();
const UserController = require("../controllers/auth");
const jwtCheck = require("../jwtCheck");

router.post("/", UserController.addUser);
router.get("/:email", UserController.getUser);
router.put("/:email", UserController.addToFavorite);
router.put("/:email/delete", UserController.deleteFavorite);
// router.post("/register", UserController.registerUser);
// router.post("/login", UserController.loginUser);

module.exports = router;
