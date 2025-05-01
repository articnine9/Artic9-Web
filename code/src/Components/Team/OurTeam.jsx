import React from "react";

import { Link } from "react-router-dom";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import "./team.css";
const OurTeam = () => {
  return (
    <>
      <div className="ourteam">
        <div className="ourteam-head">
          <div className="team-design-box">
            <div className="design-box1">
              <div className="design-box2"></div>
            </div>
          </div>
          <div className="ourteam-head-desc">
            <h4>Our Team</h4>
            <h2>
              Meet Our <span>EXPERTS</span>
            </h2>
            <p>
              At Artic9, we're a team of passionate individuals dedicated to
              helping people find meaningful relationships. Combining
              technology, psychology, and a touch of magic, we work tirelessly
              to create a platform where sparks can fly, hearts can connect, and
              love can thrive.
            </p>
          </div>
          <div className="team-design-box1">
            <div className="design-box1">
              <div className="design-box2"></div>
            </div>
          </div>
        </div>

        <div className="ourteam-desc">
          <div className="ourteam-desc-main">
            <div className="ourteam-desc-cnt">
              <h3>Meet the Crew</h3>
              <p>
                At Artic9, we're a team of passionate individuals dedicated to
                helping people find meaningful relationships. Combining
                technology, psychology, and a touch of magic, we work tirelessly
                to create a platform where sparks can fly, hearts can connect,
                and love can thrive. At Artic9, we're a team of passionate
                individuals dedicated to helping people find meaningful
                relationships. Combining technology, psychology, and a touch of
                magic, we work tirelessly to create a platform where sparks can
                fly, hearts can connect, and love can thrive.
              </p>
            </div>
            <div className="ourteam-desc-btn">
              <div className="carrer-btn">
                <Link
                  to="/careers"
                  aria-label="View team"
                  className="careerlink"
                >
                  <FaArrowTrendUp className="career-svg" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="ourteam-img">
          <div className="ourteam-img-main">
            <div className="ourteam-img-row">
              <div class="teamcard">
                <div class="remove-when-use"></div>
                <div class="details">
                  <label>Emily Davis</label>
                  <p>Manager</p>
                </div>
              </div>
              <div class="teamcard">
                <div class="remove-when-use"></div>
                <div class="details">
                  <label>Bob Brown</label>
                  <p>Developer</p>
                </div>
              </div>
              <div class="teamcard">
                <div class="remove-when-use"></div>
                <div class="details">
                  <label>Chris Wilson</label>
                  <p>Marketer</p>
                </div>
              </div>
            </div>
            <div className="ourteam-img-row">
              <div class="teamcard">
                <div class="remove-when-use"></div>
                <div class="details">
                  <label>John Doe</label>
                  <p>CEO</p>
                </div>
              </div>
              <div class="teamcard">
                <div class="remove-when-use"></div>
                <div class="details">
                  <label>Jane Smith</label>
                  <p>CTO</p>
                </div>
              </div>
              <div class="teamcard">
                <div class="remove-when-use"></div>
                <div class="details">
                  <label>Alice Johnson</label>
                  <p>Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="work-together">
          <div className="work-together-main">
            <h4>let's collaborate</h4>
            <h2>Let's work together</h2>
            <div className="work-together-btn">
              <Link
                to="/contact"
                aria-label="Contact us"
                className="contactlink"
              >
                <FaArrowRightLong  className="contact-svg" />
                <p>Get in touch</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeam;