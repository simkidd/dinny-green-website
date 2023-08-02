import React from "react";
import FeaturesCard from "../../../components/cards/FeaturesCard";
import features from "../../../data/Features";

const Features = () => {
  return (
    <div className="features">
    <div className="features-bg"></div>
      <div className="features-top">
        <h2>Our Features</h2>
        <p>
          Dinny Green International School is nurtured in grace and truth,
          raising green, flourishing and successful children.
        </p>
      </div>

      <div className="features-inner">
        {features.map((feature, i) => (
          <FeaturesCard key={i} title={feature.title} text={feature.text} />
        ))}
      </div>
    </div>
  );
};

export default Features;
