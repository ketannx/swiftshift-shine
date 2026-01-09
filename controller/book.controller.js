const Booking = require("../model/book.model");

const createBooking = async (req, res) => {
  try {
    const { fullName, email, phone, service, duration, message } = req.body;

    // Basic validation
    if (!fullName || !email || !service || !duration || !message) {
      return res.status(400).json({
        success: false,
        message: "All required fields must be filled",
      });
    }

    // Create booking
    const booking = await Booking.create({
      fullName,
      email,
      phone,
      service,
      duration,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Booking created successfully. We will contact you soon.",
      data: booking,
    });
  } catch (error) {
    console.error("Booking Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }
};  

module.exports = { createBooking };