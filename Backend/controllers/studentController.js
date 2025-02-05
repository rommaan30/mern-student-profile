// const Student = require("../models/studentModel");
// const mongoose = require("../models/studentModel");
// exports.addStudent = async (req, res) => {
//   const newStudent = new Student(req.body);
//   await newStudent.save();
//   res.status(201).json({ message: "Student profile created successfully" });
// };

// exports.getStudents = async (req, res) => {
//   const students = await Student.find();
//   res.json(students);
// };

// exports.getStudentById = async (req, res) => {
//   try {
//     // Validate if ID is a valid ObjectId
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return res.status(400).json({ error: "Invalid student ID" });
//     }
//     const student = await Student.findById(req.params.id); //  Problem here
//     if (!student) {
//       return res.status(404).json({ message: "Student not found" });
//     }
//     res.json(student);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// exports.getMyProfile = async (req, res) => {
//   try {
//     const userId = req.user.id; // Get user ID from the authenticated token
//     const student = await Student.findById(userId);
//     if (!student) return res.status(404).json({ message: "Student not found" });
//     res.status(200).json(student);
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// };

// exports.updateStudent = async (req, res) => {
//   try {
//     const { id } = req.params;

//     // Ensure the ID is a valid MongoDB ObjectId
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return res.status(400).json({ message: "Invalid student ID" });
//     }

//     const updatedStudent = await Student.findByIdAndUpdate(id, req.body, {
//       new: true,
//     });

//     if (!updatedStudent) {
//       return res.status(404).json({ message: "Student not found" });
//     }

//     res.json(updatedStudent);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// exports.deleteStudent = async (req, res) => {
//   await Student.findByIdAndDelete(req.params.id);
//   res.json({ message: "Student deleted successfully" });
// };
exports.getProfile = async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ message: "Unauthorized" }); // User not logged in
  }

  try {
    // Fetch user data from MongoDB based on session user ID
    const user = await User.findById(req.session.user.id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user); // Send user data as response
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Update Profile Data
exports.updateProfile = async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.session.user.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    ).select("-password"); // Exclude password

    res.json({ message: "Profile updated successfully", updatedUser });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
