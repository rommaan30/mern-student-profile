const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  username: String,
  email: String,
  dob: String,
  education: String,
  contact: String,
  institutionName: String,
  companyName: String,
  skills: [String],
  linkedinProfile: String,
  socialHandle: String,
  aboutMe: String,
});

module.exports = mongoose.model('Student', studentSchema);
