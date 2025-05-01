import React from "react";
import profile from "../../Assets/profile.jpg";
import logo from "../../Assets/Grey Artic logo.png";

import { Link } from "react-router-dom";
import { RiArrowRightLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./team.css";
const Team = () => {
  return (
    <>
      <div className="team">
        <div className="team-main">
          <div className="team-left">
            <div className="team-title">
              <img src={logo} alt="" />
            </div>
            <div className="team-desc">
              <p>
                Real-world examples of how we have helped companies achieve
                their marketing objectives
              </p>
            </div>
            <div className="team-view-more">
              <Link to="/ourteam" aria-label="View team" className="teamlink">
                <div className="teamcta">
                  <span>Our Team</span>
                  <RiArrowRightLine className="svg" />
                </div>
              </Link>
            </div>
          </div>
          <div className="team-right">
            <div className="md-pics">
              <div className="md-img">
                <img src={profile} alt="" />
              </div>
              <div className="md-desc">
                <h2>Subin</h2>
                <h5>Managing Director</h5>
                <div className="profile-links">
                  <Link to="#">
                    <div className="profile-icon">
                      <FaLinkedinIn />
                    </div>
                  </Link>
                  <Link to="#">
                    <div className="profile-icon">
                      <FaFacebookF />
                    </div>
                  </Link>
                  <Link to="#">
                    <div className="profile-icon">
                      <FaInstagram />
                    </div>
                  </Link>
                  <Link to="#">
                    <div className="profile-icon">
                      <FaXTwitter />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="md-pics">
              <div className="md-img">
                <img src={profile} alt="" />
              </div>
              <div className="md-desc">
                <h2>Nishwin</h2>
                <h5>Managing Director</h5>
                <div className="profile-links">
                  <Link to="#">
                    <div className="profile-icon">
                      <FaLinkedinIn />
                    </div>
                  </Link>
                  <Link to="#">
                    <div className="profile-icon">
                      <FaFacebookF />
                    </div>
                  </Link>
                  <Link to="#">
                    <div className="profile-icon">
                      <FaInstagram />
                    </div>
                  </Link>
                  <Link to="#">
                    <div className="profile-icon">
                      <FaXTwitter />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
