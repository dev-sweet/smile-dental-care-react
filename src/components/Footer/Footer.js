import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <Container>
          <Row>
            <Col lg={3}>
              <h4 className="footer-title">Smile Dental Care</h4>
              <p>
                <strong>Location : </strong> 35 West Dental Streat
              </p>
              <p>
                <strong>Phone : </strong>+088 123 654 987
              </p>
              <p>
                <strong>Email : </strong>info@smiledental.com
              </p>
              <div className="footer-icons">
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
            </Col>
            <Col lg={2}>
              <h4 className="footer-title mt-5 mt-lg-0">Useful Links</h4>
              <Link className="footer-link" to="/">About Us</Link>
              <Link className="footer-link" to="/">Our Services</Link>
              <Link className="footer-link" to="/">Appointment</Link>
              <Link className="footer-link" to="/">Privacy Policy</Link>
              <Link className="footer-link" to="/">Contact Us</Link>
            </Col>
            <Col lg={2}>
              <h4 className="footer-title mt-5 mt-lg-0">Our Services</h4>
              <Link className="footer-link" to="/">Cosmetic Dentistry</Link>
              <Link className="footer-link" to="/">General Dentistry</Link>
              <Link className="footer-link" to="/">Certified Dentist</Link>
              <Link className="footer-link" to="/">New Technology</Link>
              <Link className="footer-link" to="/">Accept Insurance</Link>
            </Col>
            <Col lg={2}>
              <h4 className="footer-title mt-5 mt-lg-0">Support</h4>
              <Link className="footer-link" to="/">Our Dentist</Link>
              <Link className="footer-link" to="/">Terms of Service</Link>
              <Link className="footer-link" to="/">Privacy Policy</Link>
              <Link className="footer-link" to="/">Our Pricing</Link>
              <Link className="footer-link" to="/">Testimonials</Link>
            </Col>
            <Col lg={3}>
              <h4 className="footer-title mt-5 mt-lg-0">Newsletter</h4>
              <p>
                Best solution for your it startup business consecteturadipiscing
                elit.
              </p>
              <div className="footer-input mt-5">
                <input type="email" placeholder="Enter email" />
                <button>
                  <i className="fab fa-telegram-plane"></i>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <hr className="footer-hr" />
      <div className="footer-bottom">
        <p>
          Copyright &copy; 2021 Rola is Proudly Created by <Link to="/"> Sweet</Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
