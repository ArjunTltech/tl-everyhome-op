import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";

const ForbiddenError=() =>{
  return (
 <Container fluid className="d-flex align-items-center justify-content-center vh-100 bg-purple-50">
    <Row className="text-center">
      <Col xs={12} className="mb-4">
        <img
          src="/images/error/error403.jpg" 
          alt="Forbidden Access"
          style={{
            width: "400px",
            height: "400px",
          }}
          className="mx-auto d-block"
        />
      </Col>
      <Col xs={12} className="d-flex align-items-center justify-content-center mb-4">
        <iframe
          src="https://lottie.host/embed/8916da24-c917-4817-9af9-fceebc746aaa/QWCx00wxDQ.lottie"
          style={{
            width: "50px",
            height: "50px",
            marginRight: "10px",
            border: "none",
          }}
          title="Forbidden Animation"
        ></iframe>
        <h1 className="text-4xl font-weight-bold text-purple-800 m-0">
          403 - Forbidden
        </h1>
      </Col>
      <Col xs={12} className="mb-4">
        <p className="text-purple-700" style={{ fontSize: "1.2rem" }}>
          You don't have permission to access this resource. Please check your credentials or contact support.
        </p>
      </Col>
      <Col xs={12}>
        <a
          href="/"
          className="btn btn-purple text-white px-5 py-3 rounded-pill shadow-sm"
          style={{
            backgroundColor: "#6f42c1",
            fontSize: "1rem",
            fontWeight: "bold",
            letterSpacing: "0.5px",
          }}
        >
          Return Home
        </a>
      </Col>
    </Row>
  </Container>
  );
}
export default ForbiddenError;