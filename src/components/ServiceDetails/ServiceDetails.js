import React from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const params = useParams();
    console.log(params);
    return (
        <div>
            <h1>Service Details</h1>
        </div>
    );
};

export default ServiceDetails;