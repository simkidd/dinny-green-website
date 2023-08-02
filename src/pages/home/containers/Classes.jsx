import React from "react";
import { Link } from "react-router-dom";
import ClassCard from "../../../components/cards/ClassCard";

const Classes = () => {
  return (
    <div className="classes-section">
      <div className="class-container">
        <h2 className="">Popular Classes</h2>
        <p className="">
          We have built hospitals, arranged doctor appointments have the
          diagnose and treat <br /> your Lorem ipsum dolor sit amet consectetur
          adipisicing elit.{" "}
        </p>

        <div className="class-cards">
          <ClassCard />
          <ClassCard />
          <ClassCard />
        </div>

        <div className="course-btn">
          <Link to="#" className="btn-1">
            View all courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Classes;
