import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
const Signup = () => {
  const { signInWithGoogle, createUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useHistory();
  const location = useLocation();
  const redirect_url = location.state?.from || '/home';
  const onSubmit = (data) => createUser(data.email, data.password, data.name);
  const handleGoogleSigning = () => {
    signInWithGoogle().then(() => {
      history.push(redirect_url);
    });
  };
  return (
    <div className="d-flex align-items-center justify-content-center py-5">
      <div className="login-form">
        <h3 className="text-center text-secondary">Sign Up</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="login-input"
            {...register('name', { required: true })}
            placeholder="Name"
          />
          {errors.name && <span className="errors">Name is required</span>}
          <input
            className="login-input"
            {...register('email', { required: true })}
            placeholder="Enter email"
          />
          {errors.email && <span className="errors">Email is required</span>}
          <input
            className="login-input"
            {...register('password', { required: true })}
            placeholder="Password"
            type="password"
          />
          {errors.password && (
            <span className="errors">Password is required</span>
          )}
          <input className="input-btn" type="submit" value="Submit" />
        </form>
        <p className="m-auto text-center">
          <Link to="/login">Already have an account ?</Link>
        </p>
        <h5 className="or">----------- Or ----------</h5>
        <button className="google-login" onClick={handleGoogleSigning}>
          <i className="fab fa-google"></i> Signup with Google
        </button>
      </div>
    </div>
  );
};

export default Signup;
