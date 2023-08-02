import React from "react";
import { Link } from "react-router-dom";
import Circle1 from "../../../assets/images/Mask Group (1).png";
import Circle2 from "../../../assets/images/Mask Group (2).png";
import Girl from "../../../assets/images/girl-books.jpg";

const Counter = () => {
  return (
    <div className="counter">
      <div className="counter-container">
        <div className="counter-img">
          <div className="img-wrapper">
            <div className="girl-container">
              <img className="girl" src={Girl} alt="" />
            </div>
            <img className="circle-1" src={Circle1} alt="" />
            <div className="blurred-circle"></div>
          </div>
        </div>
        <div className="counter-text">
          <div className="ct-top">
            <h2>Advance Learning System Around The World</h2>
            <p className="ct-top-text">
              We have made a collaborative effort in bringing together
              scientific expertise from other countries, steered jointly by
              their governments on the basis of shared, policy-driven interests.
            </p>
            <div className="row">
              <div className="count">
                <h2>
                  25k<sup>+</sup>
                </h2>
                <p>Teachers</p>
              </div>
              <div className="count">
                <h2>
                  75k<sup>+</sup>
                </h2>
                <p>Active Courses</p>
              </div>
              <div className="count">
                <h2>250</h2>
                <p>Extra Curricular</p>
              </div>
            </div>
          </div>
          <div className="ct-bottom">
            <Link className="btn-1">Learn more</Link>
          </div>
        </div>
        <img className="circle-2" src={Circle2} alt="" />
      </div>
    </div>
  );
};

export default Counter;
