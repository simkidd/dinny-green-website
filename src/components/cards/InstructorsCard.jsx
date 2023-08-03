import React from "react";
import { Link } from "react-router-dom";
import { MdDateRange } from "react-icons/md";

const InstructorsCard = ({ img, tag, title, date }) => {
  return (
    <div className="instructor-card">
      <div className="instructor-card-img">
        <img src={img} alt="" />
        <div className="instructor-details">
          <span className="instructor-tag">{tag}</span>
          <h4 className="instructor-title">{title}</h4>
          <span className="instructor-date">
            <MdDateRange />
            {date}
          </span>
        </div>
        <div className="gradient-fill"></div>
      </div>
    </div>
  );
};

export default InstructorsCard;
