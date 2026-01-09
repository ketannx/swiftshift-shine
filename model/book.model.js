const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
    },
    phone: {
      type: String,
    },
    service: {
      type: String,
      required: true,
      enum: [
        "House Cleaning",
        "Condo Cleaning",
        "Apartment Cleaning",
        "Studio Cleaning",
        "Office Cleaning",
        "Deep Cleaning",
        "Steam Cleaning",
        "Power Washing"
      ]

    },
    duration: {
      type: String,
      required: true,
      enum: ["3 Hours", "4 Hours", "6 Hours", "Full Day"],
    },
    message: {
      type: String,
      required: true,
      minlength: 10,
    },
    status: {
      type: String,
      default: "pending", // pending | contacted | completed
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", bookingSchema);
