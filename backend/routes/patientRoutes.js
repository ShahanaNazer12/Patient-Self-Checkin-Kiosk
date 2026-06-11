const express = require("express");

const router = express.Router();

const {
  createPatient,
  getAllPatients,
  getPatientById,
} = require("../controllers/patientController");
const validatePatient = require("../middleware/validation");

router.post("/", validatePatient, createPatient);

router.get("/", getAllPatients);

router.get("/:id", getPatientById);

module.exports = router;