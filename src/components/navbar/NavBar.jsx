import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Group_60.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-inner-container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>

        <ul className="navlinks">
          <li><Link>Home</Link></li>
          <li><Link>About</Link></li>
          <li><Link>Services</Link></li>
          <li><Link>Instructors</Link></li>
          <li><Link>Courses</Link></li>
          <li><Link>Blog</Link></li>
          <li><Link className="contact">Contact</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
