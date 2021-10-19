import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Service.css';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
  const { serviceId, serviceName, desc, img } = service;
  return (
    <Col md={6} lg={3}>
      <div className="service">
        <Card className="border-0 pb-4">
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title className="service-title">{serviceName}</Card.Title>
            <Card.Text>{desc}</Card.Text>
            <Link className="service-btn" to={`/service/${serviceId}`}>
              View Details
            </Link>
          </Card.Body>
        </Card>
      </div>
    </Col>
  );
};

export default Service;
