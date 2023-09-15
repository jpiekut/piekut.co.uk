import React, { useState } from 'react';
import './Navbar.css'; // Create a CSS file for styling

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
        <p1>Projects</p1>
    </nav>
  );
}

export default Navbar;