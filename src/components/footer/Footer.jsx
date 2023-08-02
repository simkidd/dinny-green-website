import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Group 61.png";
import { FaMousePointer } from "react-icons/fa";

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
            <Link>Sign up to newsletter to get Latest updates</Link>

            <form>
              <div className="newsletter-input">
                <input type="text" />
                <button className="btn btn-1">
                  <FaMousePointer />
                </button>
              </div>
              <ul>
                <li>
                  <Link>Fa</Link>
                </li>
                <li>
                  <Link>Tw</Link>
                </li>
                <li>
                  <Link>In</Link>
                </li>
              </ul>
            </form>
          </div>
        </div>
        <hr />
        <div className="footer-bottom">
          <div className="col-5">
            <div className="container">
              <span>
                Copyright &copy;{new Date().getFullYear()} Dinny Green International. Designed by{" "}
                <span>
                  {" "}
                  <Link to="/" className="text-white-50">
                    John Mason
                  </Link>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
