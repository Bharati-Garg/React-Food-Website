import React from "react";
import AboutBackground from "../Images/about-background.png";
import AboutBackgroundImage from "../Images/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Food is An Important Part of A Balance Diet
        </h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill />
            Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
