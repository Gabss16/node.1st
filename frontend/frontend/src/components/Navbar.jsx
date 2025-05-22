import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Navbar.css";

import {
  FaUser,FaTruck, FaGift, FaSignOutAlt
} from 'react-icons/fa';

const Navbar = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [showBrands, setShowBrands] = useState(false);

  return (
    <div className="navbar">
      <div className="logo">
        <h2>Zona digital</h2>
        <p>Management system</p>
      </div>

      <div className="nav-section">
        
        <ul>
          <li><Link to="/provider"><FaUser /> Provider</Link></li>
          <li><Link to="/branches"><FaTruck /> Branches</Link></li>
          <li><Link to="/products"><FaGift /> Products</Link></li>
          
        </ul>
      </div>

      <div className="logout">
        <FaSignOutAlt /> Log out
      </div>
    </div>
  );
};

export default Navbar;