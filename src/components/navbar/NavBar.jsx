import React, { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Group_60.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import Circle from "../../assets/images/Mask Group (1).png";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="navbar">
      <div className="navbar-inner-container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>

        <div className="menu-btn" onClick={handleMenu}>
          {showMenu ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={showMenu ? "mobile-navlinks" : "navlinks"}>
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>About</Link>
          </li>
          <li>
            <Link>Services</Link>
          </li>
          <li>
            <Link>Instructors</Link>
          </li>
          <li>
            <Link>Courses</Link>
            <FiChevronDown />
          </li>
          <li>
            <Link>Blog</Link>
          </li>
          <li>
            <Link className="contact">Contact</Link>
          </li>
          <img className="nav-circle" src={Circle} alt="" />
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
