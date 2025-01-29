"use client"
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link';
import { AlertCircle } from 'react-feather';

export default function BadRequest() {


  return (
<div 
      style={{
        backgroundImage: "url('/images/error/bg-3.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        position: 'relative'
      }}
    >
      {/* Background Overlay */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(1px)'
        }}
      />

      <Container className="text-center text-light px-4 position-relative">
        <Row className="align-items-center mb-2" style={{marginLeft: '-100px'}}>
          <Col xs={12} md={6} className="text-md-end mb-3 ">
            <AlertCircle size={70} style={{ color: '#f8f9fa' }} />
          </Col>
          <Col xs={12} md={6} className="text-md-start">
            <h1 className="display-1 fw-bolder" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)', }}>400</h1>
          </Col>
        </Row>

        <h2 className="display-6 fw-bold mb-4">Bad Request</h2>
        <p className="lead fs-4 mb-4">
          We couldn't process your request due to invalid syntax or missing parameters. Possible reasons include:
        </p>

        <Row className="justify-content-center mb-5">
          <Col xs={12} md={8} lg={6}>
            <ul className="list-unstyled fs-5 text-start">
              <li className="mb-3 opacity-75">• The request was malformed or contains invalid data</li>
              <li className="mb-3 opacity-75">• Required parameters are missing from the request</li>
              <li className="mb-3 opacity-75">• The request includes invalid characters or formatting</li>
            </ul>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col className="d-flex justify-content-center gap-4 flex-wrap">
            <Button
              variant="light"
              size="lg"
              className="px-4 py-3 fw-semibold text-uppercase"
              style={{ letterSpacing: '0.5px', boxShadow: '0 2px 4px rgba(0,0,0,0.2)', transition: 'all 0.3s ease' }}
              onClick={() => window.location.reload()}
            >
              Try Again
            </Button>
            <Link href="/" passHref>
              <Button 
                variant="outline-light " 
                size="lg" 
                className="px-4 py-3 fw-semibold text-uppercase "
                style={{ letterSpacing: '0.5px', boxShadow: '0 2px 4px rgba(0,0,0,0.2)', transition: 'all 0.3s ease' }}
              >
                Return Home
              </Button>
            </Link>
          </Col>
        </Row>

        <Row>
          <Col>
            <p className="mb-0 fs-6">
              If you believe this is a mistake, please contact our{' '}
              <a 
                href="mailto:support@example.com" 
                className="text-decoration-none text-light"
                style={{ borderBottom: '1px dotted #f8f9fa' }}
              >
                support team
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}