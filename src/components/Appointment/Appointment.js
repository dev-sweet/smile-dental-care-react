import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './Appointment.css';
const Appointment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="appointment">
      <Container>
        <Row className="g-4">
          <Col md={4}>
            <div className="appointment-form">
              <h3>Make An Appointment</h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  className="appointment-input"
                  {...register('name', { required: true })}
                  placeholder="Name"
                />
                {errors.name && (
                  <span className="errors">Name is required</span>
                )}
                <input
                  className="appointment-input"
                  {...register('email', { required: true })}
                  placeholder="Email"
                />
                {errors.email && (
                  <span className="errors">Email is required</span>
                )}
                <input
                  className="appointment-input"
                  {...register('phone', { required: true })}
                  placeholder="Phone"
                />
                {errors.phone && (
                  <span className="errors">Phone is required</span>
                )}
                <input
                  className="appointment-input"
                  {...register('date')}
                  placeholder="Date"
                />

                {errors.Name && <span>This field is required</span>}

                <input className="input-btn" type="submit" />
              </form>
            </div>
          </Col>
          <Col md={8}>
            <h2 className="text-center text-secondary mb-md-3 mb-5">
              Features That You Will Love Us and <br /> Enjoy Specialized Care
            </h2>
            <Row md={2} className="gx-4 gy-3">
              <Col>
                <div className="new-feature">
                  <div className="d-flex align-items-center">
                    <i class="fas fa-user-md"></i>
                    <h3>Patient Care</h3>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                    do eiusmod tempor
                  </p>
                </div>
              </Col>
              <Col>
                <div className="new-feature">
                  <div className="d-flex align-items-center">
                    <i class="far fa-gem"></i>
                    <h3>Experience</h3>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                    do eiusmod tempor
                  </p>
                </div>
              </Col>
              <Col>
                <div className="new-feature">
                  <div className="d-flex align-items-center">
                    <i class="fas fa-tooth"></i>
                    <h3>Certified Dentists</h3>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                    do eiusmod tempor
                  </p>
                </div>
              </Col>
              <Col>
                <div className="new-feature">
                  <div className="d-flex align-items-center">
                    <i class="fas fa-tooth"></i>
                    <h3>Quality Brackets</h3>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                    do eiusmod tempor
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Appointment;
