import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Alert,
} from "react-bootstrap";

function AdminLogin() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      username === "admin@gmail.com" &&
      password === "123"
    ) {
      navigate("/admin");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <Container
      fluid
      className="bg-light min-vh-100 d-flex align-items-center justify-content-center"
    >
      <Row className="w-100 justify-content-center">
        <Col
          xs={12}
          sm={10}
          md={8}
          lg={5}
          xl={4}
        >
          <Card
            className="shadow border-0"
            style={{
              borderRadius: "20px",
            }}
          >
            <Card.Body className="p-4 p-md-5">
              <div className="text-center mb-4">
                <div
                  style={{
                    fontSize: "3rem",
                  }}
                >
                  
                </div>

                <h2 className="fw-bold">
                  Admin Login
                </h2>

                <p className="text-muted">
                  Secure access to the
                  patient management dashboard.
                </p>
              </div>

              {error && (
                <Alert variant="danger">
                  {error}
                </Alert>
              )}

              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3">
                  <Form.Label>
                    Username
                  </Form.Label>

                  <Form.Control
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => {
                      setUsername(
                        e.target.value
                      );
                      setError("");
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>
                    Password
                  </Form.Label>

                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => {
                      setPassword(
                        e.target.value
                      );
                      setError("");
                    }}
                  />
                </Form.Group>

                <Button
                  variant="dark"
                  type="submit"
                  size="lg"
                  className="w-100"
                >
                  Login
                </Button>
              </Form>

              <div className="text-center mt-4">
                <small className="text-muted">
                  Hospital Administration
                  Portal
                </small>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminLogin;