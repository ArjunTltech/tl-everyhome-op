import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link';

const ServiceUnavailableError = () => {
  return (
    <Container 
    fluid 
    className="min-vh-100 d-flex align-items-center justify-content-center p-4"
    style={{
      backgroundImage: "linear-gradient(rgba(13, 37, 63, 0.85), rgba(13, 37, 63, 0.95)), url(/images/error/bg-6.jpg)",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}
  >
    <Row className="text-center text-white">
      <Col xs={12} className="mb-5">
        <div className="error-icon mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            fill="currentColor"
            className="bi bi-cloud-slash-fill"
            viewBox="0 0 16 16"
            style={{ animation: 'float 3s ease-in-out infinite' }}
          >
            <path 
              fillRule="evenodd" 
              d="M3.112 5.112a3.125 3.125 0 0 0-.17.613C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13H11L3.112 5.112zm11.372 7.372L4.937 2.937A5.512 5.512 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773a3.2 3.2 0 0 1-1.516 2.711z"
            />
            <path d="M13.646 14.354l-12-12 .708-.708 12 12z"/>
          </svg>
        </div>
        
        <h1 className="display-4 fw-bold mb-4">503 - Service Unavailable</h1>
        
        <p className="lead mb-4" style={{ fontSize: '1.25rem', fontWeight: 300 }}>
          Our systems are currently undergoing maintenance. We're working hard to restore service as quickly as possible.
        </p>

        <div className="reasons-list mb-4 mx-auto" style={{ maxWidth: '600px' }}>
          <p className="text-light mb-3">Possible reasons:</p>
          <div className="d-flex justify-content-center flex-wrap">
            <span className="badge bg-light text-dark me-2 mb-2 px-3 py-2">Server Maintenance</span>
            <span className="badge bg-light text-dark me-2 mb-2 px-3 py-2">Temporary Overload</span>
            <span className="badge bg-light text-dark mb-2 px-3 py-2">System Upgrade</span>
          </div>
        </div>
      </Col>

      <Col xs={12} className="d-flex flex-column align-items-center">
        <Button
          href="/"
          variant="light"
          size="lg"
          className="rounded-pill px-5 py-3 fw-bold mb-3"
          style={{
            background: 'linear-gradient(45deg, #ffffff, #f8f9fa)',
            border: 'none',
            transition: 'all 0.3s ease',
            width: 'fit-content',
            boxShadow: '0 4px 15px rgba(255, 255, 255, 0.2)'
          }}
        >
          Return to Homepage
        </Button>

        <div className="mt-3 text-white-50" style={{ fontSize: '0.9rem' }}>
          Need immediate assistance? Contact our {' '}
          <Link href="http://connect.tltechnologies.net" className="text-white text-decoration-underline">
            technical team
          </Link>
        </div>
      </Col>
    </Row>

    <style jsx global>{`
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-15px); }
        100% { transform: translateY(0px); }
      }
    `}</style>
  </Container>
  );
};

export default ServiceUnavailableError;