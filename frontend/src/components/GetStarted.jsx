import React from "react";
import "../assets/styles/GetStarted.css";


const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get started with Homyz</span>
          <span className="secondaryText">
            Subscribe and find super attractive price quotes from us.
            <br />
            Find your residence soon
          </span>
          <div className="getStarted">
          <button className="button" href>
            <a href="/">Get Started</a>
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;