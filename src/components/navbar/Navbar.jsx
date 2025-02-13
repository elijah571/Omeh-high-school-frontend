import './navbar.css';
import { RxDashboard } from "react-icons/rx";
import { VscLocation } from "react-icons/vsc";
import { TbReportSearch } from "react-icons/tb";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";
import { Link } from 'react-router-dom';  // Update to correct react-router import
import { useState } from 'react';

export const Navbar = () => {
  // State to toggle the navbar visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu open/close
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    
    <div className='header-section'>
        {/* header section */}
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
            {/* dashboard */}
            <Link to={'/'}>
                <span><RxDashboard /></span>
                <h3>Dashboard</h3>
            </Link>
            {/* attendance */}
            <Link>
                <span><VscLocation /></span>
                <h3>Attendance</h3>
            </Link>
            {/* reports */}
            <Link>
                <span><TbReportSearch /></span>
                <h3>Reports</h3>
            </Link>
            {/* news */}
            <Link>
                <span><IoNewspaperOutline /></span>
                <h3>News & Bulletins</h3>
            </Link>
            {/* alumni */}
            <Link>
                <span><FaPeopleGroup /></span>
                <h3>Alumni bodies</h3>
            </Link>
            {/* logout */}
            <Link className="logout">
                <span><IoIosLogOut /></span>
                <h3>Logout</h3>
            </Link>
        </nav>
        
    </div>
  );
};
