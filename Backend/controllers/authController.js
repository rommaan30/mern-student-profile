// const User = require("../models/userModel");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

// exports.register = async (req, res) => {
//   const { username, email, password } = req.body;

//   const hashedPassword = await bcrypt.hash(password, 10);
//   const newUser = new User({ username, email, password: hashedPassword });

//   await newUser.save();
//   res.status(201).json({ message: "User registered successfully" });
// };

// exports.login = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ message: "User not found" });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch)
//       return res.status(400).json({ message: "Invalid credentials" });

//     req.session.user = { id: user._id, email: user.email, name: user.name };  // Store user ID in session
//     req.session.save(); // Save session
// console.log("data stored in session")
//     res.json({ message: "Login successful", user: req.session.user});
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server Error" });
//   }
// };

// // Logout Route
// exports.logout = async (req, res) => {
//   req.session.destroy(() => {
//     res.json({ message: "Logged out successfully" });
//   });
// };
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

// Register User
exports.register = async (req, res) => {
  try {
    const {
      name,
      username,
      email,
      dob,
      education,
      contact,
      institutionName,
      companyName,
      skills,
      linkedinProfile,
      socialHandle,
      aboutMe,
      password,
    } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and Password are required" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      username,
      email,
      dob,
      education,
      contact,
      institutionName,
      companyName,
      skills,
      linkedinProfile,
      socialHandle,
      aboutMe,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Login User
exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    // Store user data in the session
    req.session.user = {
      id: user._id,
      username: user.username,
      email: user.email, // You can store other user info as well
    };
    res.json({ message: "Login successful", user: req.session.user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
