// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   username: String,
//   email: String,
//   password: String, // Make sure to hash passwords using bcrypt
// });

// module.exports = mongoose.model('User', userSchema);
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  username: String,
  email: String,
  dob: String,
  education: String,
  contact: String,
  institutionName: String,
  companyName: String,
  skills: String,
  linkedinProfile: String,
  socialHandle: String,
  aboutMe: String,
  password: String, // Hashed password
});

module.exports = mongoose.model("User", UserSchema);
