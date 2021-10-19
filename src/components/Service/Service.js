import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Service.css';

const Service = ({ service }) => {
  const { serviceId, serviceName, desc, img } = service;
  const history = useHistory();
  const handleDetails = ()=>{
    history.push(`/services/${serviceId}`);
  }
  return (
    <Col md={6} lg={3}>
      <div className="service">
        <Card className="border-0 pb-4">
          <Card.Img className="service-img" variant="top" src={img} />
          <Card.Body>
            <Card.Title className="service-title">{serviceName}</Card.Title>
            <Card.Text>{desc}</Card.Text>
            <button className="service-btn" onClick={handleDetails}>
              View Details
            </button>
          </Card.Body>
        </Card>
      </div>
    </Col>
  );
};

export default Service;
