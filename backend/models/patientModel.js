const db = require("../database/db");

const createPatient = (patientData, callback) => {
  const {
    name,
    age,
    gender,
    mobile,
    address,
    department,
    token,
  } = patientData;

  const query = `
    INSERT INTO patients
    (name, age, gender, mobile, address, department, token)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  db.run(
    query,
    [name, age, gender, mobile, address, department, token],
    function (err) {
      callback(err, this.lastID);
    }
  );
};

const getAllPatients = (search, department, callback) => {
  let query = "SELECT * FROM patients WHERE 1=1";
  let params = [];

  if (search) {
    query += " AND name LIKE ?";
    params.push(`%${search}%`);
  }

  if (department) {
    query += " AND department = ?";
    params.push(department);
  }

  query += " ORDER BY created_at DESC";

  db.all(query, params, callback);
};

const getPatientById = (id, callback) => {
  db.get(
    "SELECT * FROM patients WHERE id = ?",
    [id],
    callback
  );
};

module.exports = {
  createPatient,
  getAllPatients,
  getPatientById,
};