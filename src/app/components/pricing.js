import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Pricing = () => {
  const plans = [
    {
      title: "Basic Plan",
      features: [
        "Server health monitoring",
        "Monitor your websites in real-time",
        "Email notifications for alerts",
        "Limited data retention period",
        "Basic customer support"
      ]
    },
    {
      title: "Enterprise Plan",
      features: [
        "Basic Features",
        "Extended data retention period",
        "Custom alerts/notifications",
        "Advanced analytics and reporting",
        "Priority customer support"
      ],
      isPopular: true
    },
    {
      title: "TL-Professional Plan",
      features: [
        "Enterprise Features",
        "Unlimited data retention period",
        "Advanced security controls",
        "Dedicated account manager",
        "Customizable dashboards & reports",
        "API access for system integration"
      ]
    }
  ];

  return (
    <div className="bg-light py-5">
      <Container>
        <Row className="text-center mb-5">
          <Col md={{ span: 8, offset: 2 }}>
            <h2 className="mb-4">Choose your plan</h2>
          </Col>
        </Row>
        
        <Row>
          {plans.map((plan, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card 
                className="h-100 shadow-sm hover-translate-up" 
                style={{ transition: 'transform 0.4s ease' }}
              >
                <Card.Header 
                  className="text-center py-4"
                  style={{
                    background: 'linear-gradient(135deg, #0061f2 0%, #6900f2 100%)',
                    color: 'white',
                    borderRadius: '8px 8px 0 0'
                  }}
                >
                  {plan.isPopular && (
                    <div className="position-absolute top-0 start-50 translate-middle-x mt-2">
                      <span className="badge bg-warning">Most Popular</span>
                    </div>
                  )}
                  <h5 className="mb-0">{plan.title}</h5>
                </Card.Header>

                <Card.Body className="d-flex flex-column">
                  <ul className="list-unstyled mb-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="mb-3">
                        <i className="bi bi-check2 me-2 text-success"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <Button 
                      href="https://connect.tltechnologies.net/"
                      target="_blank"
                      variant="primary"
                      className="w-100"
                    >
                      Contact Us
                    </Button>
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