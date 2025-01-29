"use client";
import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const  UnauthorizedError=() =>{
  return (
    <div
      className="d-flex align-items-center vh-100 text-start"
      style={{
        backgroundImage: "url('/images/error/bg-5.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        textShadow: "1px 1px 4px rgba(0, 0, 0, 0.3)",
      }}
    >
      <Container>
        <Row className="justify-content-start">
          <Col md={10} lg={7}>
            <Card
              className="p-4 border-0 shadow-lg"
              style={{
                background: "rgba(0, 0, 0, 0.6)",
                borderRadius: "12px",
                color: "#fff",
              }}
            >
              <Card.Body>
                <h1 className="fw-bold mb-3" style={{ fontSize: "2.5rem", letterSpacing: "1px" }}>
                  401 - Unauthorized Access
                </h1>
                <p
                  className="mb-4"
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 400,
                    lineHeight: "1.8rem",
                    maxWidth: "600px",
                  }}
                >
                  You don't have the necessary permissions to access this page.
                  <br />
                  This may be due to:
                  <ul>
                    <li>An expired or invalid session.</li>
                    <li>Insufficient access rights.</li>
                    <li>Attempting to view a restricted resource.</li>
                  </ul>
                  Please log in with the correct credentials or contact support if you believe this is a mistake.
                </p>
                <Button
                  href="/"
                  variant="light"
                  size="lg"
                  className="px-4 py-2 fw-semibold rounded-pill shadow-sm me-3"
                  style={{ fontSize: "1.1rem", letterSpacing: "0.5px", color: "#fff" }}
                >
                  Return to Login
                </Button>


              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default UnauthorizedError;




