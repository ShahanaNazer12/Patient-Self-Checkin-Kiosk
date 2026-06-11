import { useEffect } from "react";
import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import {
  Container,
  Row,
  Col,
  Card,
  Button,
} from "react-bootstrap";

function Token() {
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      <style>
        {`
          @media print {
            .no-print {
              display: none !important;
            }

            body {
              background: white !important;
            }
          }
        `}
      </style>

      <Container className="py-5">
        <Row className="justify-content-center">
          <Col
            xs={12}
            md={8}
            lg={6}
          >
            <Card className="shadow-sm border-0">
              <Card.Body className="text-center p-5">
                <h4 className="mb-2">
                  Patient Self Check-In Kiosk
                </h4>

                <h2 className="fw-bold mb-4">
                  Registration Successful
                </h2>

                <hr />

                <div className="mb-3">
                  <strong>
                    Patient Name
                  </strong>

                  <p className="mb-0">
                    {state?.name}
                  </p>
                </div>

                <div className="mb-3">
                  <strong>
                    Department
                  </strong>

                  <p className="mb-0">
                    {state?.department}
                  </p>
                </div>

                <div className="mb-4">
                  <strong>
                    Token Number
                  </strong>

                  <h1 className="fw-bold text-dark">
                    {state?.token}
                  </h1>
                </div>

                <div className="mb-4">
                  <strong>
                    Timestamp
                  </strong>

                  <p className="mb-0">
                    {new Date(
                      state?.timestamp
                    ).toLocaleString()}
                  </p>
                </div>

                <Button
                  className="no-print"
                  variant="dark"
                  size="lg"
                  onClick={() =>
                    window.print()
                  }
                >
                  Print Token
                </Button>

                <p className="text-muted mt-4 mb-0 no-print">
                  Returning to welcome
                  screen in 5 seconds...
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Token;