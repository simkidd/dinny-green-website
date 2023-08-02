import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Group 61.png";
import {
  FaMousePointer,
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-top-col">
            <img src={Logo} alt="" />
            <p>
              Replenish him third creature and meat blessed void a fruit
              gathered you’re, they’re two waters own morning gathered greater.
            </p>
          </div>
          <div className="footer-top-col">
            <h4>About Us</h4>
            <ul>
              <li>
                <Link>Afficiates</Link>
              </li>
              <li>
                <Link>Partners</Link>
              </li>
              <li>
                <Link>Reviews</Link>
              </li>
              <li>
                <Link>Blogs</Link>
              </li>
            </ul>
          </div>
          <div className="footer-top-col">
            <h4>Popular Classes</h4>
            <ul>
              <li>
                <Link>Creche</Link>
              </li>
              <li>
                <Link>Primary</Link>
              </li>
              <li>
                <Link>Secondary</Link>
              </li>
              <li>
                <Link>Highschool</Link>
              </li>
            </ul>
          </div>
          <div className="footer-top-col">
            <h4>Newsletter</h4>
            <p>Sign up to newsletter to get Latest updates</p>

            <form>
              <div className="newsletter-input">
                <input type="text" placeholder="Enter Email address" />
                <button className="btn btn-1">
                  <FaMousePointer />
                </button>
              </div>
            </form>
              <ul className="footer-socials">
                <li>
                  <Link>
                    <FaFacebookF />
                  </Link>
                </li>
                <li>
                  <Link>
                    <FaTwitter />
                  </Link>
                </li>
                <li>
                  <Link>
                    <FaLinkedin />
                  </Link>
                </li>
              </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            Copyright &copy;{new Date().getFullYear()} Dinny Green
            International. Designed by{" "}
            <span>
              {" "}
              <Link to="/" className="text-white-50">
                John Mason
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
