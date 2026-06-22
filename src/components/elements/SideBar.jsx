"use client";

import React from "react";
const logo = "/d-bike-logo.png";
import useGorentContext from "../context/useGorentContext";
import Link from 'next/link';
const SideBar = () => {
  const {
    isSidebar,
    setIsSidebar
  } = useGorentContext();
  const handleCloceSideBar = () => {
    setIsSidebar(pre => !pre);
  };
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.namedItem('name').value;
    const email = form.elements.namedItem('email').value;
    const message = form.elements.namedItem('message').value;
    if (name && email && message) {
      console.log({
        name,
        email,
        message
      });
      form.reset();
    }
  };
  return <div className={`xs-sidebar-group info-group info-sidebar ${isSidebar ? 'isActive' : ''}`}>
            <div className="xs-overlay xs-bg-black" onClick={handleCloceSideBar}></div>

            <div className="xs-sidebar-widget">
                <div className="sidebar-widget-container">
                    <div className="widget-heading">
                        <a href="#" className="close-side-widget" onClick={handleCloceSideBar}>X</a>
                    </div>

                    <div className="sidebar-textwidget">
                        <div className="sidebar-info-contents">
                            <div className="content-inner">

                                <div className="logo">
                                    <Link href="/" onClick={handleCloceSideBar}>
                                        <img src={logo} alt="Logo" />
                                    </Link>
                                </div>

                                <div className="content-box">
                                    <h4>About Us</h4>
                                    <div className="inner-text">
                                        <p>
                                            Welcome to D Bike Rental. We offer the best scooty, bike, and car rentals in Puri at affordable prices. Enjoy your ride with our well-maintained vehicles.
                                        </p>
                                    </div>
                                </div>



                                {/* Contact Info */}
                                <div className="sidebar-contact-info">
                                    <h4>Contact Info</h4>
                                    <ul className="list-unstyled">
                                        <li>
                                            <span className="icon-pin-2"></span>
                                            Gopal Ballabh Rd, near Shakuntala Palace, near Puri Railway station, Puri, Odisha 752001
                                        </li>
                                        <li>
                                            <span className="icon-call-2"></span>
                                            <a href="tel:+918112003520">
                                                +91 81120 03520
                                            </a>
                                        </li>
                                        <li>
                                            <span className="icon-envelope-2"></span>
                                            <a href="mailto:dbikerental1@gmail.com">
                                                dbikerental1@gmail.com
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                {/* Social */}
                                <div className="thm-social-link1">
                                    <ul className="social-box list-unstyled">
                                        <li>
                                            <a href="https://www.facebook.com/people/D-Bike-Rental/pfbid02jkCiyQpTmUt9K18BvC8VqTXmyKnegT7UJViVR5jygvasuiP6Vapxm3BXgsPWjy7tl/" target="_blank" rel="noopener noreferrer"><i className="icon-facebook" /></a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/dbikerental/?hl=en" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
};
export default SideBar;