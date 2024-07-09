import React from "react";
import "./Test.css";
import djConsole from "../../assets/djConsole.jpg";

const DiscoBall = () => {
  const scrollToPromotionSection = () => {
    const promotionSection = document.getElementById("about");
    if (promotionSection) {
      promotionSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="disco-container">
      <img src={djConsole} alt="DJ Console" className="disco-image" />
      <div className="overlay-text">
        <h1>DAJ SIĘ PORWAĆ MUZYCE</h1>
        <div className="arrow-down" onClick={scrollToPromotionSection}></div>
      </div>
    </div>
  );
};

export default DiscoBall;
