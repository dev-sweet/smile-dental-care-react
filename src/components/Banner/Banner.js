import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import bannerImg from '../../images/main-banner.jpg';
import './Banner.css';
const Banner = () => {
  return (
    <div className="banner">
      <Row>
        <Col lg={6} md={12} className="order-2 order-lg-1">
          <Container>
            <div className="banner-info">
              <div>
                <h1 className="banner-title">
                  Top <span className="personalized">Personalized</span> <br />
                  Dental Care Services
                </h1>
                <p className="banner-text">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit egestas
                  venenatis et tellus et suspendisse nec dis magna amet rhoncus
                  fames aliquam.
                </p>
                <Link className="appointment-btn" to="/appointment">
                  Book Appointment
                </Link>
              </div>
            </div>
          </Container>
        </Col>
        <Col lg={6} md={12} className="order-1 order-lg-2">
          <img className="banner-img" src={bannerImg} alt="" />
        </Col>
      </Row>
    </div>
  );
};

export default Banner;
