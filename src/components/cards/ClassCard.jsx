import React from "react";
import { MdDateRange, MdBook } from "react-icons/md";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const ClassCard = ({ img, duration, date, title, info }) => {
  return (
    <div className="class-card">
      <div className="class-card-top">
        <div className="class-card-img">
          <img src={img} alt="" />
        </div>
        <div className="class-duration">
          <span>
            <MdBook />
            {duration}
          </span>
          <span>
            <MdDateRange />
            {date}
          </span>
        </div>
        <div className="class-title">
          <h4>{title}</h4>
        </div>
        <div className="class-info">
          <p>{info}</p>
        </div>
      </div>
      <div className="class-card-btn">
        <Link>
          Enroll Now <HiOutlineArrowNarrowRight />
        </Link>
      </div>
    </div>
  );
};

export default ClassCard;
