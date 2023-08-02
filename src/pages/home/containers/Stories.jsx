import React from "react";
import Woman from "../../../assets/images/woman3.jpg";
import Man from "../../../assets/images/man2.jpg";
import Man2 from "../../../assets/images/man3.jpg";

const Stories = () => {
  return (
    <div className="stories">
      <div className="stories-bg"></div>
      <div className="stories-container">
        <h2>Success Stories</h2>
        <div className="stories-avatar">
          <div className="avatar-side">
            <img src={Man} alt="" />
          </div>
          <div className="avatar-main">
            <div className="dashed-circle"></div>
            <img src={Woman} alt="" />
          </div>
          <div className="avatar-side">
            <img src={Man2} alt="" />
          </div>
        </div>
        <p>
          We have built hospitals, arranged doctor appointments have the
          diagnose and treat yourem ipsu r aol ad meniam, quis nostrud
          exercitation.We doctor appointments have the diagnose and treat yourem
          ipsu r exercitatranged docts have the diagnose and treat ipsu r aol
        </p>
      </div>
    </div>
  );
};

export default Stories;
