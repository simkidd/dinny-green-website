import React from "react";
import { Link } from "react-router-dom";
import ClassCard from "../../../components/cards/ClassCard";
import { classList } from "../../../data/classes";

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
          {classList.map((enroll, i) => (
            <ClassCard
              key={i}
              img={enroll.img}
              duration={enroll.duration}
              date={enroll.date}
              title={enroll.title}
              info={enroll.info}
            />
          ))}
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
