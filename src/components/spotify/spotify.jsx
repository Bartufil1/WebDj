import React from "react";
import "./spotify.css";
import image1 from "../../assets/abba.jpg";
import image2 from "../../assets/baciary.jpeg";
import image3 from "../../assets/shakira.jpg";
import image4 from "../../assets/ladyPank.png";
import image5 from "../../assets/michaelJackson.jpg";
import image6 from "../../assets/Krzysztof.jpg";
const LiveStreamingSection = () => {
  return (
    <div className="live-streaming-section">
      <div className="headerSpotify">
        <h2>Posłuchaj must have na twojej imprezie</h2>
        <p>
          Moje playlisty idealnie wpasują się w towarzystwo na twojej imprezie!
        </p>
      </div>
      <div className="images-container">
        <div className="images">
          <img src={image1} alt="Person 1" />
          <img src={image2} alt="Person 2" />
          <img src={image5} alt="Person 3" />
        </div>
        <div className="spotify-player">
          <iframe
            src="https://open.spotify.com/embed/playlist/4eYoGyVYUCV62jlay55FnM?utm_source=generator&theme=0"
            width="400"
            height="80"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
            title="Spotify"
          ></iframe>
        </div>
        <div className="images">
          <img src={image3} alt="Person 3" />
          <img src={image4} alt="Person 4" />
          <img src={image6} alt="Person 4" />
        </div>
      </div>
    </div>
  );
};

export default LiveStreamingSection;
