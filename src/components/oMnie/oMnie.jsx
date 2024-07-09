import React from "react";
import "./oMnie.css";
import eventImage1 from "../../assets/Djbalck.jpg"; // Path to your event image
import HeadPhoneLogo from "../../assets/HeadPhoneBart.png"; // Path to your logo image

const OMnie = () => {
  return (
    <div id="about" className="musicevents">
      <div className="leftside">
        <img
          src={HeadPhoneLogo}
          alt="Headphone Logo"
          className="headphonelogo"
        />
        <div className="textheadphoneLogo">
          <h1>Cześć</h1>
          <p>
            Jestem DJ-em specjalizującym się w muzyce na weselach, jubileuszach
            oraz eventach firmowych. Jestem DJ-em specjalizującym się w muzyce
            na weselach, jubileuszach Jestem DJ-em specjalizującym się w muzyce
            na weselach, jubileuszach oraz eventach firmowych. Jestem DJ-em
            specjalizującym się w muzyce na weselach, jubileuszach oraz eventach
            firmowych. Jestem DJ-em specjalizującym się w muzyce na weselach,
            jubileuszach oraz eventach firmowych.
          </p>
        </div>
      </div>
      <div className="rightside">
        <img src={eventImage1} alt="Event 1" className="eventimage" />
      </div>
    </div>
  );
};

export default OMnie;
