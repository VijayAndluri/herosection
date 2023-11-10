import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/">About</Link>
      <Link to="/">Services</Link>
      <Link to="/">Contact</Link>
    </nav>
  );
};

export default NavBar;

