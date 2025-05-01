import React from "react";
import Carousal from "./Carousal";
import Clients from "./Clients";
import "./Home.css";
import TestimonialCarousel from "./Testimonial";

import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";

import grid1 from "../../Assets/platez.png";
import grid2 from "../../Assets/b2.png";
import grid3 from "../../Assets/b4.png";
import grid4 from "../../Assets/harris2.png";
import grid5 from "../../Assets/anantha-bavan.png";
// import grid6 from "../../Assets/post11.jpg";
// import grid7 from "../../Assets/post3.jpg";

import pic1 from "../../Assets/slider/benefits-of-custom-web-development-and-web-design-12grids.webp";
import pic2 from "../../Assets/slider/seo-1-1.png";
import pic3 from "../../Assets/slider/smo-1.webp";
import pic4 from "../../Assets/slider/brand-te-blog-800x363.png";
import pic5 from "../../Assets/slider/video-prod.jpg";
import Team from "../Team/Team";

const Home = () => {
  const imagesGrid1 = [grid1, grid5, grid4, grid2];
  const imagesGrid2 = [grid2, grid4, grid1, grid5];
  // const imagesGrid3 = [grid3, grid6, grid7];

  const imagesGrid4 = [grid4, grid5];
  const imagesGrid5 = [grid5, grid4];

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

      {/* ----------------------------------------------------Services------------------------------------------------- */}
      <div className="about-main">
        {/* <div className="about-first-sec">
          <div className="about-first-head">
            <div className="about-first-title">
              <h1>About Us</h1>
              <p>
                We are creators of innovative solutions, driving digital
                transformation for businesses across industries through
                cutting-edge technology and strategic marketing.
               </p>
            </div>
          </div>
          <div className="about-first-anime">
            <div className="about-anime-img">
              <img src={contact} alt="ervwsg" />
            </div>
          </div>
        </div> */}

        <div className="about">
          <div className="storytitle">
            <h2>Looking for an change-over ?</h2>
            <div className="story-desc">
              <p>
                Being one of the fastest-growing web design and development
                companies in India, we have always worked towards elevating a
                brand's true purpose by delivering uniquely personalised
                experience. Our clientele is one happy group that has been
                content and satisfied with our association.
              </p>
            </div>
          </div>
          <div className="our-work-process-wrapper">
            <div className="card_s-container">
              <div className="card_s">
                <img
                  className="ls-is-cached lazyloaded"
                  loading="lazy"
                  src={pic1}
                  alt="Well Researched Website Development Company in Bangalore"
                />
                <div className="card__head">Website Developement</div>
                <p className="steps-intro">
                  We are committed to finding the finest solutions to meet the
                  needs of our clients. We are always updated with the latest
                  trends and technologies. Information gathering and requirement
                  understanding becomes an integral part of this phase.
                </p>
              </div>
            </div>
            <div className="card_s-container">
              <div className="card_s">
                <img
                  className="ls-is-cached lazyloaded"
                  loading="lazy"
                  src={pic2} // Use the imported image here
                  alt="Well Researched Website Development Company in Bangalore"
                />
                <div className="card__head">SEO</div>
                <p className="steps-intro">
                  We are committed to finding the finest solutions to meet the
                  needs of our clients. We are always updated with the latest
                  trends and technologies. Information gathering and requirement
                  understanding becomes an integral part of this phase.
                </p>
              </div>
            </div>
            <div className="card_s-container">
              <div className="card_s">
                <img
                  className="ls-is-cached lazyloaded"
                  // loading="lazy"
                  src={pic3} // Use the imported image here
                  alt="Well Researched Website Development Company in Bangalore"
                />
                <div className="card__head">Social Media Marketing</div>
                <p className="steps-intro">
                  We are committed to finding the finest solutions to meet the
                  needs of our clients. We are always updated with the latest
                  trends and technologies. Information gathering and requirement
                  understanding becomes an integral part of this phase.
                </p>
              </div>
            </div>
            <div className="card_s-container">
              <div className="card_s">
                <img
                  className="ls-is-cached lazyloaded"
                  loading="lazy"
                  src={pic4} // Use the imported image here
                  alt="Well Researched Website Development Company in Bangalore"
                />
                <div className="card__head">Branding</div>
                <p className="steps-intro">
                  We are committed to finding the finest solutions to meet the
                  needs of our clients. We are always updated with the latest
                  trends and technologies. Information gathering and requirement
                  understanding becomes an integral part of this phase.
                </p>
              </div>
            </div>
            <div className="card_s-container">
              <div className="card_s">
                <img
                  className="ls-is-cached lazyloaded"
                  loading="lazy"
                  src={pic5} // Use the imported image here
                  alt="Well Researched Website Development Company in Bangalore"
                />
                <div className="card__head">Video Production</div>
                <p className="steps-intro">
                  We are committed to finding the finest solutions to meet the
                  needs of our clients. We are always updated with the latest
                  trends and technologies. Information gathering and requirement
                  understanding becomes an integral part of this phase.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ----------------------------------------------------Team------------------------------------------------- */}

      <Team />
      {/* ----------------------------------------------------Clients------------------------------------------------- */}
      <Clients />

      {/* ----------------------------------------------------Testimonial------------------------------------------------- */}
      <TestimonialCarousel />

      {/* ----------------------------------------------------Team-quote------------------------------------------------- */}
      <section className="teamquote-main">
        <div className="teamquote-cnt">
          <b>
            "Together, we are committed to excellence, innovation, and making a
            meaningful <br />
            impact in the digital world"
          </b>
          <h3>
            <i>#beunique</i>
          </h3>
        </div>
      </section>

      {/* ----------------------------------------------------Blog------------------------------------------------- */}
      <section className="blog-main">
        <div className="blog-container">
          <div className="blog1">
            <h2>
              Explore How We Catalyzed their
              <br /> Business's<b> Digital Transformation</b>
            </h2>
          </div>
          <div className="blog2">
            <Carousel
              pause="false"
              fade
              className="blog-carousal"
              controls={false}
              indicators={false}
            >
              {imagesGrid1.map((image, index) => (
                <Carousel.Item key={index} className="blog-carousal">
                  <div
                    className="grid-item grid-bg"
                    style={{ backgroundImage: `url(${image})` }}
                    alt={`slide-${index}`}
                  ></div>
                </Carousel.Item>
              ))}
            </Carousel>

            <Carousel
              pause="false"
              fade
              className="blog-carousal"
              controls={false}
              indicators={false}
            >
              {imagesGrid2.map((image, index) => (
                <Carousel.Item key={index} className="blog-carousal">
                  <div
                    className="grid-item grid-bg"
                    style={{ backgroundImage: `url(${image})` }}
                    alt={`slide-${index}`}
                  ></div>
                </Carousel.Item>
              ))}
            </Carousel>

            <div
              className="grid-item span-2"
              style={{ backgroundImage: `url(${grid3})` }}
            ></div>

            <div className="grid-item bg1">
              <div className="blog-post">
                <span>Business</span>
                <h3>Be the brand that stands out. Meet our creative</h3>
              </div>
            </div>

            <div className="grid-item bg2">
              <div className="blog-post">
                <span>Business</span>
                <h3>Be the brand that stands out. Meet our creative</h3>
              </div>
            </div>

            <Carousel
              pause="false"
              fade
              className="blog-carousal"
              controls={false}
              indicators={false}
            >
              {imagesGrid4.map((image, index) => (
                <Carousel.Item key={index} className="blog-carousal">
                  <div
                    className="grid-item grid-bg3"
                    style={{ backgroundImage: `url(${image})` }}
                    alt={`slide-${index}`}
                  ></div>
                </Carousel.Item>
              ))}
            </Carousel>

            <Carousel
              pause="false"
              fade
              className="blog-carousal"
              controls={false}
              indicators={false}
            >
              {imagesGrid5.map((image, index) => (
                <Carousel.Item key={index} className="blog-carousal">
                  <div
                    className="grid-item grid-bg3"
                    style={{ backgroundImage: `url(${image})` }}
                    alt={`slide-${index}`}
                  ></div>
                </Carousel.Item>
              ))}
            </Carousel>

            <div className="grid-item bg3">
              <div className="blog-post">
                <span>Business</span>
                <h3>Be the brand that stands out. Meet our creative</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

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
