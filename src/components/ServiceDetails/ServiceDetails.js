import React, { useEffect } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
  const {id} = useParams();
  return (
    <div>
      <h1>Service Details</h1>
      <p>Service id : {id}</p>
    </div>
  );
};

export default ServiceDetails;