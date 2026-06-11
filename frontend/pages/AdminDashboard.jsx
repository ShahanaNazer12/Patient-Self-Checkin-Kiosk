import { useEffect, useState } from "react";
import { getPatients } from "../services/patientApi";

import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Table,
  Spinner,
  Alert,
} from "react-bootstrap";

function AdminDashboard() {
  const [patients, setPatients] = useState([]);
  const [search, setSearch] = useState("");
  const [department, setDepartment] =
    useState("");
  const [loading, setLoading] =
    useState(false);

  const fetchPatients = async () => {
    try {
      setLoading(true);

      const data = await getPatients(
        search,
        department
      );

      setPatients(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, [search, department]);

 return (
  <Container className="py-5">
    <Row className="justify-content-center">
      <Col lg={10}>
        <Card className="shadow-sm border-0">
          <Card.Body className="p-4">
            <div className="text-center mb-4">
              <h2 className="fw-bold">
                Admin Dashboard
              </h2>

              <p className="text-muted mb-0">
                Patient Registration Records
              </p>
            </div>

            <Row className="g-3 mb-4">
              <Col md={7}>
                <Form.Control
                  type="text"
                  placeholder="Search patient name..."
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                />
              </Col>

              <Col md={5}>
                <Form.Select
                  value={department}
                  onChange={(e) =>
                    setDepartment(
                      e.target.value
                    )
                  }
                >
                  <option value="">
                    All Departments
                  </option>

                  <option value="General Medicine">
                    General Medicine
                  </option>

                  <option value="Cardiology">
                    Cardiology
                  </option>

                  <option value="Orthopedics">
                    Orthopedics
                  </option>

                  <option value="Dermatology">
                    Dermatology
                  </option>

                  <option value="Pediatrics">
                    Pediatrics
                  </option>
                </Form.Select>
              </Col>
            </Row>

            {loading ? (
              <div className="text-center py-5">
                <Spinner
                  animation="border"
                  variant="dark"
                />

                <p className="mt-3">
                  Loading patients...
                </p>
              </div>
            ) : patients.length === 0 ? (
              <Alert variant="secondary">
                No patients found.
              </Alert>
            ) : (
              <div className="table-responsive">
                <Table
                  striped
                  hover
                  className="align-middle"
                >
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Age</th>
                      <th>Gender</th>
                      <th>Mobile</th>
                      <th>Department</th>
                      <th>Token</th>
                    </tr>
                  </thead>

                  <tbody>
                    {patients.map(
                      (patient) => (
                        <tr
                          key={
                            patient.id
                          }
                        >
                          <td>
                            {patient.id}
                          </td>
                          <td>
                            {patient.name}
                          </td>
                          <td>
                            {patient.age}
                          </td>
                          <td>
                            {patient.gender}
                          </td>
                          <td>
                            {
                              patient.mobile
                            }
                          </td>
                          <td>
                            {
                              patient.department
                            }
                          </td>
                          <td>
                            {patient.token}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </Table>
              </div>
            )}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);
}

export default AdminDashboard;