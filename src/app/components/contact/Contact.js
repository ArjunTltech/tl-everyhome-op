'use client'
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Phone, Mail, } from 'lucide-react';
import { Toaster } from 'react-hot-toast';
import Formfeild from './formfeild';


const ContactSection = () => {
 

  return (
    <div className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <Container>
        <Toaster position="top-right" />
        <Row className="justify-content-center text-center mb-5">
          <Col md={8}>
            <h2 className="display-5 fw-bold mb-4">Let's Get Connected</h2>
            <div className="mx-auto bg-primary" style={{ height: '3px', width: '100px', marginBottom: '2rem' }}></div>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={6}>
            <Formfeild/>
          </Col>

          <Col md={4} className="mt-5 mt-md-0">
            <div className="bg-white p-4 rounded-3 shadow-sm h-100">
              <h4 className="mb-4">Contact Information</h4>
              
              <div className="d-flex align-items-center mb-4">
                <Phone className="text-primary me-3" size={24} />
                <div>
                  <h5 className="mb-1">Phone/WhatsApp</h5>
                  <a 
                    href="tel:+919061432814" 
                    className="text-decoration-none text-dark"
                    style={{ transition: 'color 0.3s ease' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#0d6efd'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#212529'}
                  >
                    +91 9061432814
                  </a>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <Mail className="text-primary me-3" size={24} />
                <div>
                  <h5 className="mb-1">Email</h5>
                  <a 
                    href="mailto:contact@example.com" 
                    className="text-decoration-none text-dark"
                    style={{ transition: 'color 0.3s ease' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#0d6efd'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#212529'}
                  >
                    contact@example.com
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactSection;