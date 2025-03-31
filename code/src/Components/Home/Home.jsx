import React from "react";
import Carousal from "./Carousal";
import Clients from "./Clients";
import "./Home.css";
import TestimonialCarousel from "./Testimonial";

import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-main">
      <Carousal />

      {/* ----------------------------------------------------Who-are-we------------------------------------------------- */}
      <section className="who-are-you">
        <div className="abt-container">
          {/* <div className="abtcnt1"></div> */}
          <div className="abtcnt2">
            <div className="abtcnt2-head">
              We Shape
              <span> Digital Journeys </span>
              <br /> from <span>Ideas</span> to
              <span> Execution and Beyond.</span>
            </div>
          </div>
          <div className="abtcnt3">
            <div className="abtimg">
              <div className="abtgap"></div>
              <span class="text-outline">artic9</span>
            </div>
          </div>
          <div className="abtcnt4">
            <div className="abt-lines">
              <p>
                Transforming visions into vibrant realities,
                <span>Artic9 </span>
                weaves creativity, technology, and strategy into a seamless
                tapestry of innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------Clients------------------------------------------------- */}
      <Clients />

      {/* <TestimonialSection /> */}
      <TestimonialCarousel />

      {/* ----------------------------------------------------Let's work------------------------------------------------- */}
      <section className="letswork-main">
        <div className="letswork-container">
          <span className="lestwork-title">Let's Work Together</span>
          <div className="letswork-link">
            <Link
              className="mail-link"
              to="/contact"
              // target="_blank"
              rel="noreferrer noopener"
            >
              <span className="letswork-mail">hi@artic9.com</span>
              <BsArrowRight className="svg" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
