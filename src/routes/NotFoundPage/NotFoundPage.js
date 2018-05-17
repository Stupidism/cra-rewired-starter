import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <h1>
    Page Not found. Go <Link to="/">Home</Link>
  </h1>
);

export default NotFoundPage;
