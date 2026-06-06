import React from 'react';
import Link from 'next/link';
const LetsTalk = () => {
  return <section className="lets-talk">
            <div className="lets-talk__bg"></div>
            <div className="container">
                <div className="lets-talk__inner">
                    <div className="lets-talk__title">
                        <div className="section-title__tagline-box" style={{marginBottom: '10px'}}>
                            <div className="section-title__tagline-shape">
                                <img src="/icon/motorbike.png" alt="shape" />
                            </div>
                            <span className="section-title__tagline" style={{color: 'white', fontWeight: '600'}}>Rent Your Bike</span>
                        </div>
                        <h2 style={{color: 'white'}}>Interested in Renting?</h2>
                        <span style={{color: 'white', display: 'block', marginTop: '10px'}}>
                            We are open everyday from 06:00 AM to 11:00 PM
                            <br />
                            Just 300 meters from Puri Railway Station
                        </span>
                    </div>
                    <div className="lets-talk__btn-boxes">
                        <div className="lets-talk__btn-1">
                            <Link href="/inner/contact" className="thm-btn">
                                Contact Us
                                <span className="fas fa-arrow-right"></span>
                            </Link>
                        </div>
                        <div className="lets-talk__btn-2">
                            <Link href="/inner/car-list-v-1" className="thm-btn">Rent Now<span className="fas fa-arrow-right"></span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>;
};
export default LetsTalk;