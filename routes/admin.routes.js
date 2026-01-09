const express = require("express");
const {
  adminLogin,
  adminRegister,
  getAllBookings,
  getProfile,
  changeBookingStatus
} = require("../controller/admin.controller.js");
const { isAuthenticated } = require("../middleware/auth");

const router = express.Router();

router.post("/register", adminRegister); // 🔐 secret required
router.post("/login", adminLogin);

// Admin protected routes
router.get("/book", isAuthenticated, getAllBookings);
router.get("/profile", isAuthenticated, getProfile);
router.patch("/booking/:bookingId/status", isAuthenticated, changeBookingStatus);

module.exports = router;
