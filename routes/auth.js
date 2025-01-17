const express = require("express");
const authController = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/logout", protect, authController.logout);

router.post("/forget-password",protect, authController.forgetPassword);
router.post("/reset-password",protect, authController.resetPassword);

module.exports = router;
