import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";

const Custom404 = () => {
  return (
    <Container 
      fluid 
      className="d-flex align-items-center justify-content-center vh-100"
      style={{ backgroundColor: '#FEFEFE' }}  // Set the background color to #FEFEFE
    >
      <Row className="text-center align-items-center">
        <Col xs={12}>
          <div className="mb-5">
            <Image 
              src="/images/error/error404.jpg" 
              alt="404 Error Illustration" 
              width={400} 
              height={300} 
              className="img-fluid mx-auto d-block mb-5"
            />
          </div>
          <div className="error-content">
            <p className="lead text-muted mb-5">
              The page you are looking for seems to have disappeared into the digital void. 
              Let's guide you back to safety.
            </p>
            <Button 
              href="/" 
              variant="primary" 
              size="lg" 
              className="px-5 py-3 rounded-pill shadow-sm"
            >
              Return to Home
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Custom404;
