import './navbar.css';
import { FaTachometerAlt, FaMapMarkerAlt, FaSearch, FaFileAlt, FaUsers, FaBell, FaCog, FaSignOutAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='header-section'>
      {/* Header Section */}
      <header>
        <div> <h5>Attendify</h5></div>
        <div className="logo">
          <img src={'https://imgs.search.brave.com/wMT9UxO5GNptddXpAY0esj1OKGfxTM6OkPOhjQvOwwQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9keW5h/bWljLmJyYW5kY3Jv/d2QuY29tL2Fzc2V0/L2xvZ28vMDUyMWE3/NDktMzFmYy00ZTkw/LTk5YjQtOGM2MWFl/NDAyMjMwL2xvZ28t/c2VhcmNoLWdyaWQt/MXg_bG9nb1RlbXBs/YXRlVmVyc2lvbj0x/JnY9NjM4NDUzMzc3/Mjc0MzAwMDAw'} alt="" />
          <h2>ATUNRASHE HIGH SCHOOL</h2>
        </div>
        {/* Hamburger Icon */}
        <div className='hamburger' onClick={toggleMenu}>
          <span className={`line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`line ${isMenuOpen ? 'open' : ''}`}></span>
        </div>
      </header>
      {/* Navigation Links */}
      <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        {/* Dashboard */}
        <Link to={'/'}>
          <span><FaTachometerAlt /></span>
          <h3>Dashboard</h3>
        </Link>
        {/* Attendance */}
        <Link>
          <span><FaMapMarkerAlt /></span>
          <h3>Attendance</h3>
        </Link>
        {/* Reports */}
        <Link>
          <span><FaSearch /></span>
          <h3>Reports</h3>
        </Link>
        {/* News */}
        <Link>
          <span><FaFileAlt /></span>
          <h3>News & Bulletins</h3>
        </Link>
        {/* Alumni */}
        <Link>
          <span><FaUsers /></span>
          <h3>Alumni Bodies</h3>
        </Link>

        {/* Icons Section */}
        <div className='icons'>
          <span><FaSearch className="cursor-pointer" /></span>
          <span><FaBell className="cursor-pointer" /></span>
          <span><FaCog className="cursor-pointer" /></span>
        </div>

        {/* Logout */}
        <Link className="logout">
          <span><FaSignOutAlt /></span>
          <h3>Logout</h3>
        </Link>
      </nav>
    </div>
  );
};
