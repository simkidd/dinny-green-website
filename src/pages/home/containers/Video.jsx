import React from "react";
import Girl from "../../../assets/images/dinnygreen_n 1.png";
import { BiPlay } from "react-icons/bi";

const Video = () => {
  return (
    <div className="video-section">
      <div className="video-container">
        <div className="vid-section-top">
          <h2 className="">Find Out How We Help Students</h2>
          <p className="">
            Authentic 'voice and choice' matter and a big part of this leaving
            'room for interpretation' in the assignment. Those gray areas can
            confuse students unacustomed to agency and choice, but once they
            become comfortable with it,itcan be a significant factor in helping
            them show what their 'best' actually is.
          </p>
        </div>
        <div className="video-play">
          <div className="video-play-bg"></div>
          <div className="img-wrapper">
            <img src={Girl} alt="" />
          </div>
          <div className="play-circle">
            <BiPlay />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
