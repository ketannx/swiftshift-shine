require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const connectDb = require("./db/db");
const bookRoutes = require("./routes/book.routes");
const AdminRoutes = require("./routes/admin.routes");

const app = express();
const port = process.env.PORT || 3000;

// Connect DB
connectDb();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes first
app.use("/api/bookings", bookRoutes);
app.use("/api/admin", AdminRoutes);

// Serve React frontend
const clientBuildPath = path.join(__dirname, "client/dist");
app.use(express.static(clientBuildPath));

// SPA fallback using regex (Express-safe)
app.get(/^\/(?!api).*/, (req, res) => {
  res.sendFile(path.join(clientBuildPath, "index.html"));
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
