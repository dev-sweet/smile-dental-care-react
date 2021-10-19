import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Dentist.css'
const Dentist = ({ dentist }) => {
  const { name, title, img } = dentist;
  return (
    <Col>
      <Card className="dentist-card">
        <Card.Img variant="top" src={img} />
        <Card.Body className="text-center">
          <Card.Title className="dentist-name">{name}</Card.Title>
          <Card.Text>{title} </Card.Text>
          <div className="social-icons">
            <Link className="icon-link" to="/">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link className="icon-link" to="/">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link className="icon-link" to="/">
              {' '}
              <i className="fab fa-linkedin-in"></i>
            </Link>
            <Link className="icon-link" to="/">
              <i className="fab fa-instagram"></i>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Dentist;
