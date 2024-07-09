import React from "react";
import "./ContactMe.css";
import contactImage from "../../assets/djConsole.jpg"; // Replace with the correct path to your image

const ImageSection = () => {
  return (
    <div className="imageContact">
      <img src={contactImage} alt="My Image" />
      <div className="textContact">KONTAKT</div>
    </div>
  );
};

export default ImageSection;
