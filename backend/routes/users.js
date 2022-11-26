const express = require("express");
const router = express.Router();
const UserController = require("../controllers/users");
const verify = require("../verifyToken");

// USER CRUD OPERATIONS
// PUT - UPDATE USER
router.put("/:id", verify, UserController.updateUser);

// DELETE USER
router.delete("/:id", verify, UserController.deleteUser);

module.exports = router;
