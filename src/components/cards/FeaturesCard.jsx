import React from "react";

const FeaturesCard = ({ title, text }) => {
  return (
    <div className="features-card">
      <div className="circle-wrap">
        <div className="circle-stroke"></div>
      </div>
      <div className="card-body">
        <div className="inner-card-b">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard;
