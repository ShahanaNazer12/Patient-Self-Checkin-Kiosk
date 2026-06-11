
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPatient } from "../services/patientApi";
import "../src/styles/register.css"
import { FaBackspace } from "react-icons/fa";

import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";

import { Formik } from "formik";
import * as Yup from "yup";



function Register() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Full name is required")
      .min(2, "Atleast two character required"),

    age: Yup.number()
      .required("Age is required")
      .min(1, "Age must be at least 1")
      .max(120, "Age cannot exceed 120"),

    gender: Yup.string().required("Please select a gender"),

    mobile: Yup.string()
      .matches(/^\d{10}$/, "Mobile number must be exactly 10 digits")
      .required("Mobile number is required"),

    department: Yup.string().required("Please select a department"),

    address: Yup.string().notRequired(),
  });

  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      setApiError("");

      const payload = {
        ...values,
        age: Number(values.age),
      };

      const response = await createPatient(payload);

      navigate("/token", {
        state: response,
      });
    } catch (error) {
      setApiError(
        error.response?.data?.message || "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container fluid className="bg-light min-vh-100 py-5">
      <Row className="justify-content-center">
        <Col xs={12} sm={10} md={8} lg={6} xl={5}>
          <Card className="shadow border-0" style={{ borderRadius: "20px" }}>
            <Card.Body className="p-4 p-md-5">


              <div className="text-center mb-4">
                <h2 className="fw-bold">Patient Registration</h2>
                <p className="text-muted">
                  Complete the details below to generate your token.
                </p>
              </div>


              {apiError && (
                <Alert variant="danger">{apiError}</Alert>
              )}

              <Formik
                initialValues={{
                  name: "",
                  age: "",
                  gender: "",
                  mobile: "",
                  address: "",
                  department: "",
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  setFieldValue,
                }) => (
                  <Form onSubmit={handleSubmit}>


                    <Form.Group className="mb-3">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        size="lg"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.name && errors.name}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.name}
                      </Form.Control.Feedback>
                    </Form.Group>


                    <Form.Group className="mb-3">
                      <Form.Label>Age</Form.Label>
                      <Form.Control
                        size="lg"
                        type="number"
                        name="age"
                        value={values.age}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.age && errors.age}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.age}
                      </Form.Control.Feedback>
                    </Form.Group>


                    <Form.Group className="mb-3">
                      <Form.Label>Mobile Number</Form.Label>

                      <Form.Control
                        size="lg"
                        type="text"
                        name="mobile"
                        value={values.mobile}
                        readOnly
                        isInvalid={touched.mobile && errors.mobile}
                      />

                      <Form.Control.Feedback type="invalid">
                        {errors.mobile}
                      </Form.Control.Feedback>


                      <div className="kiosk-keypad mt-3">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                          <Button
                            key={n}
                            variant="outline-dark"
                            className="key-btn"
                            onClick={() => {
                              if (values.mobile.length < 10) {
                                setFieldValue(
                                  "mobile",
                                  values.mobile + n
                                );
                              }
                            }}
                          >
                            {n}
                          </Button>
                        ))}

                        <Button
                          variant="outline-danger"
                          className="key-btn"
                          onClick={() =>
                            setFieldValue(
                              "mobile",
                              values.mobile.slice(0, -1)
                            )
                          }
                        >
                          <FaBackspace />
                        </Button>

                        <Button
                          variant="outline-dark"
                          className="key-btn"
                          onClick={() =>
                            setFieldValue(
                              "mobile",
                              values.mobile + "0"
                            )
                          }
                        >
                          0
                        </Button>

                        <Button
                          variant="danger"
                          className="key-btn"
                          onClick={() =>
                            setFieldValue("mobile", "")
                          }
                        >
                          Clear
                        </Button>
                      </div>
                    </Form.Group>


                    <Form.Group className="mb-3">
                      <Form.Label>Gender</Form.Label>
                      <Form.Select
                        size="lg"
                        name="gender"
                        value={values.gender}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.gender && errors.gender}
                      >
                        <option value="">Select Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">
                        {errors.gender}
                      </Form.Control.Feedback>
                    </Form.Group>


                    <Form.Group className="mb-3">
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        size="lg"
                        name="address"
                        value={values.address}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </Form.Group>


                    <Form.Group className="mb-4">
                      <Form.Label>Department</Form.Label>
                      <Form.Select
                        size="lg"
                        name="department"
                        value={values.department}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={
                          touched.department && errors.department
                        }
                      >
                        <option value="">Select Department</option>
                        <option>General Medicine</option>
                        <option>Cardiology</option>
                        <option>Orthopedics</option>
                        <option>Dermatology</option>
                        <option>Pediatrics</option>
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">
                        {errors.department}
                      </Form.Control.Feedback>
                    </Form.Group>


                    <Button
                      variant="dark"
                      type="submit"
                      size="lg"
                      className="w-100"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <Spinner size="sm" className="me-2" />
                          Generating Token...
                        </>
                      ) : (
                        "Generate Token"
                      )}
                    </Button>

                  </Form>
                )}
              </Formik>

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;