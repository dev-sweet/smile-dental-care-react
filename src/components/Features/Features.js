import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Features.css';
const Features = () => {
  const features = [
    {
      id: 1,
      icon: <i className="fas fa-user-md"></i>,
      title: 'Certified Dentist',
      desc: 'Lpsum dolor sit amet consectetur lor adipiscing elit convallis urna quisque id malesuada loremoi pellen demi text tesque',
    },
    {
      id: 2,
      icon: <i className="fas fa-tooth"></i>,
      title: 'New Technology',
      desc: 'Lpsum dolor sit amet consectetur lor adipiscing elit convallis urna quisque id malesuada loremoi pellen demi text tesque',
    },
    {
      id: 3,
      icon: <i className="fas fa-hands"></i>,
      title: 'Accept Insurance',
      desc: 'Lpsum dolor sit amet consectetur lor adipiscing elit convallis urna quisque id malesuada loremoi pellen demi text tesque',
    },
  ];
  return (
    <div className="features">
      <Container>
        <Row className="g-5 gy-md-4">
          {features.map((feature) => (
            <Col key={feature.id} md={6} lg={4}>
              <div className="feature">
                <div className="d-flex align-items-center">
                  <div className="feature-icon">{feature.icon}</div>
                  <h4>{feature.title}</h4>
                </div>
                <p>{feature.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Features;
