import './navbar.css';
import { FaTachometerAlt, FaMapMarkerAlt, FaSearch, FaFileAlt, FaUsers, FaBell, FaCog, FaSignOutAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/features/auth/authSlice";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  
  // Get user info from Redux state
  const user = useSelector((state) => state.auth.userInfo);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
    window.location.href = "/login"; // Redirect to login after logout
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
        <Link to={'/dashboard'}>
          <span><FaTachometerAlt /></span>
          <h3>Dashboard</h3>
        </Link>
        {/* Attendance */}
        <Link to={'/attendance'}>
          <span><FaMapMarkerAlt /></span>
          <h3>Attendance</h3>
        </Link>
        {/* Reports */}
        <Link to={'/reports'}>
          <span><FaSearch /></span>
          <h3>Reports</h3>
        </Link>
        {/* News */}
        <Link to={'/news'}>
          <span><FaFileAlt /></span>
          <h3>News & Bulletins</h3>
        </Link>
        {/* Alumni */}
        <Link to={'/alumni'}>
          <span><FaUsers /></span>
          <h3>Alumni Bodies</h3>
        </Link>

        {/* Icons Section */}
        <div className='icons'>
          <span><FaSearch className="cursor-pointer" /></span>
          <span><FaBell className="cursor-pointer" /></span>
          <span><FaCog className="cursor-pointer" /></span>
        </div>

        {/* Login/Logout Button */}
        {user ? (
          <Link onClick={handleLogout} className="logout">
            <span><FaSignOutAlt /></span>
            <h3>Logout</h3>
          </Link>
        ) : (
          <Link to={'/login'} className="login">
            <span><FaSignOutAlt /></span>
            <h3>Login</h3>
          </Link>
        )}
      </nav>
    </div>
  );
};
