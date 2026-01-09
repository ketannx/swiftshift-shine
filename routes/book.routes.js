const express = require("express");
const { createBooking } = require("../controller/book.controller");

const router = express.Router();

router.post("/", createBooking);

module.exports = router;
