require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const MongoStore = require("connect-mongo");
const authRoutes = require("./routes/authRoutes");
const studentRoutes = require("./routes/studentRoutes");
const User = require("./models/userModel"); // ✅ Import User model

const app = express();

app.use(express.json()); // For handling JSON requests
// Middleware
app.use(bodyParser.json());

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cookieParser());
// Session Middleware
app.use(
  session({
    secret: "romman123",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl:
        process.env.MONGO_URI || "mongodb://localhost:27017/STUDENTPROFILEDB",
      collectionName: "sessions",
    }),
    cookie: { secure: false, httpOnly: true }, // Set secure: true for HTTPS
  })
);

// Route to set session data
app.post("/set-session", (req, res) => {
  req.session.user = req.body.user; // Store user data in session
  res.send("Session data set!");
});

// // Route to get session data
app.get("/get-session", (req, res) => {
  if (req.session.user) {
    res.json({ user: req.session.user });
  } else {
    res.json({ message: "No session data found" });
  }
});


// Routes
app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((err) => console.log("MongoDB Connection Failed:", err));

const PORT = 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
