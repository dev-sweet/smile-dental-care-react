import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';
import notFound from '../../images/404.png'
const NotFound = () => {
  return (
    <div className="not-found-body">
     <div className="not-found-bg">
       <img className="not-found-img" src={notFound} alt="" />
     <h2 className="hello">404 Page Not Found</h2>
      <p>This page isn't available. Sorry about that.</p>
      <Link className="not-found-btn" to="/">Back to home</Link>
     </div>
    </div>
  );
};

export default NotFound;
