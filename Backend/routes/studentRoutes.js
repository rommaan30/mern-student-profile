const express = require("express");
const router = express.Router();
const {
  getProfile,
  updateProfile,
} = require("../controllers/studentController");

// router.post("/", studentController.addStudent);
// router.get("/", studentController.getStudents);
// router.get("/:id", studentController.getStudentById);
router.get("/me", getProfile);
router.put("/update", updateProfile);
// router.put("/:id", studentController.updateStudent);
// router.delete("/:id", studentController.deleteStudent);

module.exports = router;
