import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Dentist from '../Dentist/Dentist';
import './Dentist.css';
const Dentists = () => {
  const [dentists, setDentists] = useState([]);
  useEffect(() => {
    fetch('./dentists.json')
      .then((res) => res.json())
      .then((data) => setDentists(data));
  }, []);
  return (
    <div className="dentists">
      <h1 className="title">
        Top Dentist For{' '}
        <span>
          Specialized And <br /> Experienced
        </span>{' '}
        Dentistry
      </h1>
      <Container className="py-5">
        <Row lg={3} md={2} sm={1} xm={1} className="g-4 gy-5">
          {dentists.map((dentist) => <Dentist kye={dentist.key} dentist={dentist} /> )}
        </Row>
      </Container>
    </div>
  );
};

export default Dentists;
