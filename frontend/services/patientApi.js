import axios from "axios";

const API_URL = "http://localhost:5000/api/patients";

export const createPatient = async (patientData) => {
  const response = await axios.post(
    API_URL,
    patientData
  );

  return response.data;
};

export const getPatients = async (
  search = "",
  department = ""
) => {
  const response = await axios.get(
    API_URL,
    {
      params: {
        search,
        department,
      },
    }
  );

  return response.data;
};