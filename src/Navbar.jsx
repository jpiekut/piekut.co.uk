import React, { useState } from 'react';
import './Navbar.css'; // Create a CSS file for styling
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();

  const shootoo = () => {
    navigate('/');
  }

  return (
    <nav className="navbar">
      <ul>
        <li><a class="active" onClick={shootoo} >Projects</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;