"use client";

import React from "react";
import aboutImgOne from "../../assets/images/resources/about-one-img-1.jpg";
import aboutImgTwo from "../../assets/images/resources/about-one-img-2.jpg";
import shapeOne from "../../assets/images/shapes/about-one-shape-1.png";
import shapeTwo from "../../assets/images/shapes/about-one-shape-2.png";
import shapeThree from "../../assets/images/shapes/about-one-shape-3.png";
import shapeFour from "../../assets/images/shapes/about-one-shape-4.png";
import sectionTitleShape from "../../assets/images/shapes/section-title-tagline-shape-1.png";
import Progresbar from "../../components/elements/Progressbar";
import AdvanceCountUp from "../../components/elements/AdvanceCountUp";
import TextAnimation from "../../components/elements/TextAnimation";
import { motion } from "framer-motion";
import Link from 'next/link';
const AboutInner = () => {
  return <section className="about-one about-page">
      <div className="container">
        <div className="row">
          {/* Left Side */}
          <div className="col-xl-6">
            <motion.div initial={{
            x: -80,
            opacity: 0
          }} whileInView={{
            x: 0,
            opacity: 1
          }} transition={{
            duration: 0.6,
            ease: "easeOut"
          }} viewport={{
            amount: 0.01,
            once: true
          }} className="about-one__left wow slideInLeft">
              <div className="about-one__img-box">
                <div className="about-one__img">
                  <img src="/detail-front-wheel-engine-parked-motorbike-sunset-copy-space.png" alt="About main" />
                </div>

                <div className="about-one__shape-2 float-bob-y">
                  <img src={shapeOne.src} alt="shape" />
                </div>

                <div className="about-one__shape-1">
                  <img src={shapeTwo.src} alt="shape" />
                </div>

                <div className="about-one__shape-4 float-bob-x">
                  <img src={shapeFour.src} alt="shape" />
                </div>

                <div className="about-one__shape-3 float-bob-x">
                  <img src={shapeThree.src} alt="shape" />
                </div>

                <div className="about-one__img-2">
                  <img src="/all-veichle-banner-for-faq.png" alt="About secondary" />
                </div>

                <div className="about-one__experience">
                  <div className="about-one__experience-count">
                    <h3 className="odometer" data-count="10">
                      <AdvanceCountUp ending={10} />
                    </h3>
                    <span>+</span>
                  </div>
                  <p className="about-one__experience-text">
                    Years of <br /> Experience
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side */}
          <div className="col-xl-6">
            <div className="about-one__right">
              <div className="section-title text-left sec-title-animation animation-style1">
                <div className="section-title__tagline-box">
                  <div className="section-title__tagline-shape">
<img src="/icon/motorbike.png" alt="shape" />
</div>
                  <span className="section-title__tagline">
                    About D Bike Rental
                  </span>
                </div>

                <h2 className="section-title__title title-animation">
                  <TextAnimation text="Welcome to D Bike" />
                  <TextAnimation text="Vehicle Rentals" />
                </h2>
              </div>

              <p className="about-one__text-1">
                Rated 4.7 out of 5 stars with over 315
                <br />
                satisfied reviews.
              </p>

              <p className="about-one__text-2">
                Located conveniently on Gopal Ballabh Road, near Puri Railway Station, we provide the best bikes, cars, scooters, and buses for your journey.
              </p>

              <ul className="about-one__progress-box list-unstyled">
                <Progresbar title="Fleet Quality" value={95} />
                <Progresbar title="Customer Satisfaction" value={98} />
              </ul>

              <div className="about-one__btn-box-and-call-box">
                <div className="about-one__btn-box">
                  <Link href="/inner/about" className="about-one__btn thm-btn">
                    Read More
                    <span className="fas fa-arrow-right"></span>
                  </Link>
                </div>

                <div className="about-one__call-box">
                  <div className="about-one__call-box-icon">
                    <span className="icon-call-2"></span>
                  </div>
                  <div className="about-one__call-box-content">
                    <p>Call to Anytime</p>
                    <h4>
                      <a href="tel:+918112003520">
                        +91 81120 03520
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Right */}
        </div>
      </div>
    </section>;
};
export default AboutInner;