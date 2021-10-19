import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './Login.css';
import useAuth from '../../hooks/useAuth'
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {signInWithGoogle,signInWithEmail} = useAuth();
  const onSubmit = (data) => signInWithEmail(data.email,data.password);
  return (
    <div className="d-flex align-items-center justify-content-center py-5">
      <div className="login-form">
        <h3 className="text-center text-secondary">Login Please</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="login-input"
            {...register('email', { required: true })}
            placeholder="Enter email"
          />
          {errors.email && <span className="errors">Email is required</span>}
          <input
            className="login-input"
            {...register('password', { required: true })}
            placeholder="Password" type="password"
          />
          {errors.password && (
            <span className="errors">Password is required</span>
          )}
          <input className="input-btn" type="submit" value="Login" />
        </form>
        <p className="m-auto text-center">
          <Link to="/signup">Don't have an account ?</Link>
        </p>
        <h5 className="or">Or</h5>
        <button onClick={signInWithGoogle} className="google-login">
          <i className="fab fa-google"></i> Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
