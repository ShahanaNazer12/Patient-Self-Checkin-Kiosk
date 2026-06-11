const validatePatient = (req, res, next) => {
  const {
    name,
    age,
    gender,
    mobile,
    department,
  } = req.body;

  const allowedDepartments = [
    "General Medicine",
    "Cardiology",
    "Orthopedics",
    "Dermatology",
    "Pediatrics",
  ];

  if (!name || name.trim() === "") {
    return res.status(400).json({
      message: "Name is required",
    });
  }

  if (!age || age < 1 || age > 120) {
    return res.status(400).json({
      message: "Age must be between 1 and 120",
    });
  }

  if (!gender) {
    return res.status(400).json({
      message: "Gender is required",
    });
  }

  if (!mobile || !/^\d{10}$/.test(mobile)) {
    return res.status(400).json({
      message: "Mobile number must be exactly 10 digits",
    });
  }

  if (!department) {
    return res.status(400).json({
      message: "Department is required",
    });
  }

  if (!allowedDepartments.includes(department)) {
    return res.status(400).json({
      message: "Invalid department selected",
    });
  }

  next();
};

module.exports = validatePatient;