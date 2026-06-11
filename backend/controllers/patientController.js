const patientModel = require("../models/patientModel");

const generateToken = () => {
  return `TKN${Date.now()}`;
};

const createPatient = (req, res) => {
  const { name, age, gender, mobile, address, department, } = req.body;

  const token = generateToken();

  patientModel.createPatient(
    {
      name,
      age,
      gender,
      mobile,
      address,
      department,
      token,
    },
    (err, id) => {
      if (err) {
        return res.status(500).json({
          message: "Error creating patient",
        });
      }

      res.status(201).json({
        id,
        name,
        department,
        token,
        timestamp: new Date(),
      });
    }
  );
};

const getAllPatients = (req, res) => {
  const { search, department } = req.query;

  patientModel.getAllPatients(
    search,
    department,
    (err, rows) => {
      if (err) {
        return res.status(500).json({
          message: "Error fetching patients",
        });
      }

      res.json(rows);
    }
  );
};

const getPatientById = (req, res) => {
  patientModel.getPatientById(
    req.params.id,
    (err, row) => {
      if (err) {
        return res.status(500).json({
          message: "Error fetching patient",
        });
      }

      if (!row) {
        return res.status(404).json({
          message: "Patient not found",
        });
      }

      res.json(row);
    }
  );
};

module.exports = {
  createPatient,
  getAllPatients,
  getPatientById,
};