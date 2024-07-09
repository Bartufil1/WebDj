import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/contact/Contact";
import Test from "./components/test/Test";
import PromotionSection from "./components/promotionSection/promotionSection";
import Spotify from "./components/spotify/spotify";
import OMnie from "./components/oMnie/oMnie";
import Gallery from "./components/gallery/gallery";
import ContactMe from "./components/contactMe/ContactMe";

import "./index.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <section id="main">
          <Test />
        </section>
        <section id="about">
          <OMnie />
        </section>
        <section id="offer" className="section">
          <PromotionSection />
          <Spotify />
        </section>
        <section id="gallery">
          <Gallery />
        </section>
        <section id="contact">
          <ContactMe />
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default App;
