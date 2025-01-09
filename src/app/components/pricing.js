'use client'
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Check, Crown, Zap, User, Star } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      title: "Basic Plan",
      price: "Free",
      icon: <User className="text-primary" size={32} />,
      features: [
        "Access to service booking",
        "Task management tools",
        "Ideal for individual users"
      ]
    },
    {
      title: "Premium Plan",
      price: "₹299/month or $3.99/month",
      icon: <Crown className="text-warning" size={32} />,
      features: [
        "Real-time notifications",
        "Integrated calendar",
        "Enhanced booking options for frequent users"
      ],
      isPopular: true
    },
    {
      title: "Pro Plan",
      price: "₹999/month or $12.99/month",
      icon: <Zap className="text-danger" size={32} />,
      features: [
        "Advanced tools for service providers",
        "Priority support",
        "Analytics and customer management"
      ]
    }
  ];

  return (
    <div className="bg-light py-5"  style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
      <Container>
        <Row className="text-center mb-5">
          <Col md={{ span: 8, offset: 2 }}>
            <h2 className="mb-4 fw-bold">Affordable Plans for Everyone</h2>
            <div className="mx-auto bg-primary" style={{ height: '3px', width: '100px' }}></div>
          </Col>
        </Row>
        
        <Row>
          {plans.map((plan, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card 
                className={`h-100 shadow-sm position-relative ${plan.isPopular ? 'border-primary' : ''}`}
                style={{ 
                  borderRadius: '12px', 
                  transition: 'all 0.3s ease',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                {plan.isPopular && (
                  <div 
                    className="position-absolute top-0 start-50 translate-middle-x"
                    style={{ marginTop: '-10px' }}
                  >
                    <span className="badge bg-warning text-dark d-flex align-items-center gap-1 px-3 py-2">
                      <Star size={14} /> Most Popular
                    </span>
                  </div>
                )}

                <Card.Header 
                  className="text-center py-4 border-0"
                  style={{
                    background: 'linear-gradient(135deg, #1d3557 0%, #457b9d 100%)',
                    color: 'white'
                  }}
                >
                  <div className="d-flex justify-content-center mb-3">
                    {plan.icon}
                  </div>
                  <h3 className="fs-5 fw-bold mb-0">{plan.title}</h3>
                </Card.Header>

                <Card.Body className="d-flex flex-column" style={{ backgroundColor: "#FFFFFF" }}>
                  <div className="text-center mb-4">
                    <h4 className="text-primary fw-bold">
                      {plan.price === "Free" ? (
                        "Free"
                      ) : (
                        <>
                          {plan.price.split(" or ")[0]}
                          <br />
                          <small className="text-muted">or {plan.price.split(" or ")[1]}</small>
                        </>
                      )}
                    </h4>
                  </div>
                  
                  <ul className="list-unstyled mb-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="mb-3 d-flex align-items-center">
                        <Check className="text-success me-2" size={20} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <button 
                      className={`btn ${plan.isPopular ? 'btn-primary' : 'btn-dark'} w-100`}
                      style={{ 
                        transition: 'all 0.3s ease',
                        transform: 'scale(1)',
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                      Get Started
                    </button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Pricing;