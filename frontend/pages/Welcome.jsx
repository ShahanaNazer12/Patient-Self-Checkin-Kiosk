import { useNavigate } from "react-router-dom";
import {
  Container,
  Card,
  Button,
  Row,
  Col,
} from "react-bootstrap";

function Welcome() {
  const navigate = useNavigate();

  return (
    <Container
      fluid
      className="min-vh-100 d-flex align-items-center justify-content-center bg-light"
    >
      <Row className="w-100 justify-content-center">
        <Col xs={12} sm={10} md={8} lg={6} xl={5}>
          <Card
            className="shadow border-0 text-center"
            style={{
              borderRadius: "20px",
            }}
          >
            <Card.Body className="p-5">
              <div
                style={{
                  fontSize: "4rem",
                  marginBottom: "15px",
                }}
              >
                
              </div>

              <h1
                className="fw-bold text-dark mb-3"
              >
                Patient Self Check-In
              </h1>

              <p
                className="text-secondary mb-4"
                style={{
                  fontSize: "1.1rem",
                }}
              >
                Fast, secure and convenient
                patient registration system.
              </p>

              <div className="d-grid gap-3">
                <Button
                  variant="dark"
                  size="lg"
                  onClick={() =>
                    navigate("/register")
                  }
                >
                  Start Registration
                </Button>

                <Button
                  variant="outline-dark"
                  size="lg"
                  onClick={() =>
                    navigate("/admin-login")
                  }
                >
                  Admin Login
                </Button>
              </div>

              <hr className="my-4" />

              <small className="text-muted">
                Responsive Healthcare Kiosk
                Interface
              </small>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Welcome;