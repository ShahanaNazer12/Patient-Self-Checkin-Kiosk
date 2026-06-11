const express = require("express");
const cors = require("cors");
require("dotenv").config();

require("./database/db");
const patientRoutes = require("./routes/patientRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/patients", patientRoutes);

app.get("/", (req, res) => {
  res.send("Patient Self Check-In API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});