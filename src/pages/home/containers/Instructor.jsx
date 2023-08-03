import React from "react";
import { Link } from "react-router-dom";
import { instructors } from "../../../data/instructors";
import InstructorsCard from "../../../components/cards/InstructorsCard";

const Instructor = () => {
  return (
    <div className="instructor-section">
      <div className="instructor-container">
        <div className="instructor-top">
          <h2>Our Instructors & Teachers</h2>
          <p>
            We have the best teachers and instructors that would be able to
            train your kids, making them Creative, God fearing, Respectfull and
            Intelligent.
          </p>
        </div>
        <div className="instructor-cards">
          {instructors.map((instructor, i) => (
            <InstructorsCard
              key={i}
              img={instructor.img}
              tag={instructor.tag}
              title={instructor.title}
              date={instructor.date}
            />
          ))}
        </div>
        <div className="instructor-btn">
          <Link to="#" className="btn-1">
            See all
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
