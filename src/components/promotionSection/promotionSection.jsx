import React, { useEffect, useRef } from "react";
import "./promotionSection.css";
import image1 from "../../assets/weedingDance.jpg";
import image2 from "../../assets/Nightclub.jpeg";
import image3 from "../../assets/osiemnastka.jpg";
import image4 from "../../assets/marriage2.png";
import image5 from "../../assets/18cake.png";
import image6 from "../../assets/graduated.png";
import image7 from "../../assets/confetti.png";

const MySection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("in-view");
          const columns = section.querySelectorAll(".section-column");
          columns.forEach((column) => column.classList.add("in-view"));
        }
      },
      { threshold: 0.1 }
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <div className="my-section" ref={sectionRef}>
      <div className="section-row">
        <div className="section-column">
          <img src={image1} alt="Weddings" className="section-image" />
        </div>
        <div className="section-column white-box">
          <div className="section-caption">
            <div>
              <img src={image4} alt="Marriage" className="section-icon" />
            </div>
            <h2>Wesela</h2>
          </div>
        </div>
        <div className="section-column">
          <img src={image2} alt="Corporate Events" className="section-image" />
        </div>
      </div>
      <div className="section-row">
        <div className="section-column white-box">
          <div className="section-caption">
            <div>
              <img
                src={image5}
                alt="18th Birthday"
                className="section-icon-two"
              />
              <img src={image6} alt="Graduation" className="section-icon-two" />
            </div>
            <h2>18/Studniówki</h2>
          </div>
        </div>
        <div className="section-column">
          <img src={image3} alt="Parties" className="section-image" />
        </div>
        <div className="section-column white-box">
          <div className="section-caption">
            <div>
              <img
                src={image7}
                alt="Corporate Events"
                className="section-icon"
              />
            </div>
            <h2>Imprezy Firmowe</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySection;
