import React from "react";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-bootstrap";

import GT from "../../Assets/carousal/gt-bg.png";
import BNI from "../../Assets/carousal/bni-bgs.png";
import AT from "../../Assets/carousal/at-bg.png";
import harris from "../../Assets/carousal/Harris-bg.jpg";
import arun from "../../Assets/carousal/arunachala-bg.jpg";
import rajan from "../../Assets/carousal/gt-bg.png";

import Tino from "../../Assets/carousal/gt-bg.png";
import Del from "../../Assets/carousal/gt-bg.png";
import Platez from "../../Assets/carousal/gt-bg.png";

import Aksh from "../../Assets/carousal/akshya-bg.png";
import Yi from "../../Assets/carousal/akshya-bg.png";
import Juice from "../../Assets/carousal/gt-bg.png";


import gtlogo from "../../Assets/gt-logo.png";
import bnilogo from "../../Assets/clients-logo/Bni.png";
import atlogo from "../../Assets/clients-logo/at.png";
import harrislogo from "../../Assets/clients-logo/Harris Nadar Logo BlaCK.png";
import arunlogo from "../../Assets/clients-logo/Arunachala-logo.png";
import rajanlogo from "../../Assets/clients-logo/Rajan-co.png";

import tinologo from "../../Assets/clients-logo/tino-logo-gtm.png";
import dellogo from "../../Assets/clients-logo/Delano.png";
import platezlogo from "../../Assets/clients-logo/Platez.png";

import akshlogo from "../../Assets/clients-logo/akshaya.jpg";
import yilogo from "../../Assets/clients-logo/akshaya.jpg";
import juicelogo from "../../Assets/clients-logo/akshaya.jpg";


import "./Home.css";

const CarouselComponent = () => {
  const images = [GT, BNI, AT, harris, arun, rajan];
  const logos = [gtlogo, bnilogo, atlogo, harrislogo, arunlogo, rajanlogo];
  const texts = [
    [
      "Does this ad & style look familiar?",
      "Yes, you guessed it right. We are the creators of this.",
      "faster for the fastest internet brand",
    ],
    [
      "Curious to know! ",
      "how a regular hall of fame chapter stood out in the crowd ",
      "throughout BNI India? We made them shine beyond the region.",
    ],
    [
      "Do you know?",
      "how we increased the no of users",
      "faster for the fastest internet brand?",
    ],
    [
      "Ever witnessed a regional brand gain high face value?",
      "We helped make it happen with innovative solutions.",
      "faster for the fastest internet brand",
    ],
    [
      "Do you know about the brand that increased sales of 2cr only with the help of SEO?",
      "We took them to the next level with our SEO expertise.",
      "faster for the fastest internet brand",
    ],
    [
      "Remember the time where we tempted you with wholesome virtual experiences",
      "Our creative strategies brought them to life.",
      "faster for the fastest internet brand",
    ],
  ];
  const navigate = useNavigate();
  const handleLearnMoreClick = (index) => {
    const routes = [
      "/gtholidays",
      "/",
      "/",
      "/harrisnadar",
      "/tinoengineering",
      "/",
    ];

    navigate(routes[index]);
  };

  const images1 = [Tino,Del, Platez ];
  const smllogos = [tinologo, dellogo, platezlogo];

  const images2 = [Aksh, Yi, Juice];
  const smllogos1 = [akshlogo, yilogo, juicelogo];

  return (
    <div className="carousel-container">
      <div className="carousel-section1">
        <Carousel pause="false" interval={30000}>
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <div
                className="pstrs"
                style={{ backgroundImage: `url(${image})` }}
                alt={`slide-${index}`}
              >
                <div className="pstrs-cnt">
                  <h2 className="mainline">
                    {texts[index][0]} <br />
                    <span>{texts[index][1]}</span>
                  </h2>
                  <span className="secondline">{texts[index][2]}</span>

                  <div className="slider-btn">
                    <img src={logos[index]} alt="logo" className="logo" />
                    <button
                      className="more-btn"
                      onClick={() => handleLearnMoreClick(index)}
                    >
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <div className="carousel-section2">
        <div className="sml-carousal">
          <Carousel pause="false" interval={4000}>
            {images1.map((src, index) => (
              <Carousel.Item key={index}>
                <div
                  className=" sml-img"
                  style={{ backgroundImage: `url(${src})` }}
                  alt={`small-slide-${index}`}
                >
                  <div className="slide-gap"></div>

                  <div className="sml-pstr-cnt">
                    <span className="sml-mainline">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Magnam, nobis!
                    </span>
                    <br />
                    <span className="sml-secondline">
                      Lorem ipsum dolor sit amet.
                    </span>
                    <div className="sml-slider-btn">
                      <img
                        src={smllogos[index]}
                        alt="logo"
                        className="sml-logo"
                      />
                      <button
                        className="sml-more-btn"
                        onClick={() => handleLearnMoreClick(index)}
                      >
                        Learn more
                      </button>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        <div className="sml-carousal1">
          <Carousel pause="false" interval={5000}>
            {images2.map((src, index) => (
              <Carousel.Item key={index}>
                <div
                  className=" sml-img"
                  style={{ backgroundImage: `url(${src})` }}
                  alt={`small-slide-${index}`}
                >
                  <div className="slide-gap"></div>

                  <div className="sml-pstr-cnt">
                    <span className="sml-mainline">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Magnam, nobis!
                    </span>
                    <br />
                    <span className="sml-secondline">
                      Lorem ipsum dolor sit amet.
                    </span>
                    <div className="sml-slider-btn">
                      <img
                        src={smllogos1[index]}
                        alt="logo"
                        className="sml-logo"
                      />
                      <button
                        className="sml-more-btn"
                        onClick={() => handleLearnMoreClick(index)}
                      >
                        Learn more
                      </button>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;
