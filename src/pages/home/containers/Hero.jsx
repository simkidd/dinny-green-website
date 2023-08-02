import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="banner">
        <div className="banner-left">
          <div className="col-top">
            <h1>Give Your Child A Chance To Be Unique</h1>
            <p className="hero-text">
              Experts agree that a child's personality doesn't fully form until
              they are in elementary school. <br />
              <span>
                <Link>Sign in</Link> to enroll your child
              </span>
            </p>
          </div>
          <div className="col-bottom">
            <Link className="btn-1">Sign Up</Link>
            <Link className="btn-2">Learn more</Link>
          </div>
        </div>
        <div></div>
        <div className="blurred"></div>
      </div>
    </div>
  );
};

export default Hero;
