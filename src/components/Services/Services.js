import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';
const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('./services.json')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="services">
      <Container>
        <h1 className="services-title">
          Enjoy Specialized <span>Care Through Precision,</span> <br /> Artistry, And
          Experience
        </h1>
        <Row className="g-4">{
            services.map(service => <Service key={service.serviceId} service={service} />)
            }</Row>
      </Container>
    </div>
  );
};

export default Services;
