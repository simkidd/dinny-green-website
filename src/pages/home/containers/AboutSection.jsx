import React from "react";
import { Link } from "react-router-dom";
import Circle from "../../../assets/images/Mask Group (1).png";
import Girl from "../../../assets/images/dinny6_n.png";
import { AiFillCheckCircle } from "react-icons/ai";

const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="about-left">
        <div className="left-inner">
          <h2 className="">Find Out More About Our Learning Experience</h2>
          <p className="">
            We have built hospitals, arranged doctor appointments have the
            diagnose and treat your Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>

          <ul>
            <li>
              <AiFillCheckCircle /> Culture in diversity
            </li>
            <li>
              <AiFillCheckCircle /> We have built hospitals, arranged doctor.
            </li>
            <li>
              <AiFillCheckCircle /> We have built hospitals, arranged doctor.
            </li>
          </ul>

          <Link to="#" className="btn-1">
            Learn more
          </Link>
        </div>
      </div>

      <div className="about-right">
        <div className="">
          <img src={Girl} alt="" />
          <img className="circle" src={Circle} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
