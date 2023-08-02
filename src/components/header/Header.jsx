import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="inner-container">
        <div className="header-left">
          <ul>
            <li>
              <span>Call:</span>+234 9012624162
            </li>
            <li>
              <span>Support:</span>info@yourcompany.com
            </li>
          </ul>
        </div>

        <div className="header-right">
          <div className="nav-links">
            <Link>Log in</Link>
            <Link>Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
