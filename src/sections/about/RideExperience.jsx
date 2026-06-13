import React from 'react';
import Link from 'next/link';
import TextAnimation from "../../components/elements/TextAnimation";

const rideSteps = [
  {
    number: '01',
    title: 'Choose your ride',
    text: 'Pick a bike or scooter that matches your route, comfort, and budget.'
  },
  {
    number: '02',
    title: 'Collect in minutes',
    text: 'Complete a quick verification and collect your vehicle near Puri Railway Station.'
  },
  {
    number: '03',
    title: 'Explore without limits',
    text: 'Ride through Puri at your own pace with local support whenever you need it.'
  }
];

const RideExperience = () => {
  return <section className="ride-experience">
    <div className="ride-experience__glow"></div>
    <div className="container">
      <div className="ride-experience__shell">
        <div className="ride-experience__intro">
          <div className="section-title text-left sec-title-animation animation-style2" style={{marginBottom: '20px'}}>
              <div className="section-title__tagline-box">
                  <div className="section-title__tagline-shape">
                      <img src="/icon/motorbike.png" alt="shape" />
                  </div>
                  <span className="section-title__tagline" style={{color: 'red'}}>The D Bike Experience</span>
              </div>

              <h2 className="section-title__title title-animation">
                  <TextAnimation text="Your ride." />
                  <TextAnimation text="Your Puri." />
              </h2>
          </div>
          <p>
            No fixed tour plans and no waiting around. Choose a vehicle, collect
            it close to the station, and make the city yours for the day.
          </p>
          <div className="ride-experience__actions">
            <Link href="/bikes" className="ride-experience__primary">
              Explore Our Bikes
              <span className="fas fa-arrow-right"></span>
            </Link>
            <Link href="/contact" className="ride-experience__contact">
              <span className="icon-call-2"></span>
              Talk to Our Team
            </Link>
          </div>
        </div>

        <div className="ride-experience__visual">
          <div className="ride-experience__image-frame">
            <span className="ride-experience__outline-text">RIDE</span>
            <img src="/glamour-bike.png" alt="Red rental bike ready for a Puri journey" />
            <div className="ride-experience__availability">
              <span className="ride-experience__status-dot"></span>
              Open daily
              <strong>6 AM - 11 PM</strong>
            </div>
          </div>
        </div>

        <div className="ride-experience__steps">
          {rideSteps.map((step) => <article className="ride-experience__step" key={step.number}>
            <span className="ride-experience__step-number">{step.number}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          </article>)}
        </div>
      </div>
    </div>
  </section>;
};

export default RideExperience;
