import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
// import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

const Custom404 = () => {

  return (
    <Container fluid className="d-flex align-items-center justify-content-center vh-100 bg-light">
    <Row className="text-center">
      <Col>
        <h1 className="display-1 text-danger">404</h1>
        <h2 className="mb-4">Oops! Page Not Found</h2>
        <p className="lead mb-5">
          We couldn't find the page you're looking for. Let's get you back to the main section.
        </p>
        {/* <Link href="/" > */}
          <Button href="/" variant="primary" size="lg">
            Back to Home
          </Button>
        {/* </Link> */}
      </Col>
    </Row>
    </Container>
  );
};

export default Custom404;
