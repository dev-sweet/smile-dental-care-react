import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './DetailService.css';
const DetailService = () => {
  const [service, setService] = useState({});
  const { id } = useParams();
  const { img, serviceName, desc, serviceFee } = service;
  const filteredService = (data) => {
    const findService = data.find((service) => service.serviceId === id);
    setService(findService);
  };
  useEffect(() => {
    fetch('/services.json')
      .then((res) => res.json())
      .then((data) => filteredService(data));
  }, []);
  return (
    <div className="service-details">
      <Card className="service-card pb-4">
        <Card.Img className="service-img" variant="top" src={img} />
        <Card.Body>
          <Card.Title className="service-title">{serviceName}</Card.Title>
          <Card.Text>{desc}</Card.Text>
           <p><small>Service Charge : {serviceFee}</small></p>
          <Link className="appointment-btn" to="/appointment">
            Book Appointment
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DetailService;
