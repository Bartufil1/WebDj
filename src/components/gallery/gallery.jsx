import React from "react";
import "./gallery.css";
import images1 from "../../assets/impreza3.jpg";
import images2 from "../../assets/impreza1.png";
import images3 from "../../assets/impreza4.jpg";
import images4 from "../../assets/impreza6.jpg";
import images5 from "../../assets/impreza1.png";
import images6 from "../../assets/impreza5.webp";
import images7 from "../../assets/impreza2.webp";
import images8 from "../../assets/impreza3.jpg";
import images9 from "../../assets/djWeeding.jpeg";
import images10 from "../../assets/djpicture.jpg";

const JukeboxSection = () => {
  return (
    <div className="jukebox-section">
      <div className="header">
        <h1>GALERIA</h1>
        <h2>
          Dobra zabawa zaczyna się od <span> dobrej </span> muzyki
        </h2>
        <p></p>
      </div>
      <div className="gallery">
        <div className="row">
          <img src={images1} alt="Event 1" />
          <img src={images2} alt="Event 2" />
          <img src={images3} alt="Event 3" />
          <img src={images4} alt="Event 4" />
          <img src={images5} alt="Event 5" />
        </div>
        <div className="row">
          <img src={images6} alt="Event 6" />
          <img src={images7} alt="Event 7" />
          <img src={images8} alt="Event 8" />
          <img src={images9} alt="Event 9" />
          <img src={images10} alt="Event 10" />
        </div>
      </div>
    </div>
  );
};

export default JukeboxSection;
