import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link';

export default function InternalServerError() {
  return (
    <Container
      fluid
      className="min-vh-100 d-flex flex-column justify-content-center align-items-center"
      style={{
        backgroundColor: '#FFFFFF', // Set the background color to white
      }}
    >
      {/* Illustration */}
      <Row className="mb-4">
        <Col className="text-center">
          <img
            src="/images/error/interner500.jpg" // Replace with actual image or hosted URL
            alt="500 Error Illustration"
            className="img-fluid"
            style={{ maxWidth: '400px' }}
          />
        </Col>
      </Row>

      {/* Error Message */}
      <Row className="text-center">
        <Col>
          <h1 className="display-4 fw-bold text-dark mb-3">500 - Internal Server Error</h1>
          <p className="lead text-secondary mb-4">
            Oops! Something went wrong on our end. Don’t worry, our team is already on it.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
