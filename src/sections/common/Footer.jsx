"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";
import footerLogo from "../../assets/images/resources/footer-logo.png";
const linkOne = [{
  id: 1,
  link: "/",
  title: "Home"
}, {
  id: 2,
  link: "/about",
  title: "About Us"
}, {
  id: 3,
  link: "/bikes",
  title: "Vehicles"
}, {
  id: 4,
  link: "/blog",
  title: "Blog"
}, {
  id: 5,
  link: "/contact",
  title: "Contact Us"
}];
const linkTwo = [{
  id: 1,
  link: "#",
  title: "Terms and Condition"
}, {
  id: 2,
  link: "#",
  title: "Privacy Policy"
}, {
  id: 3,
  link: "#",
  title: "Pricing"
}, {
  id: 4,
  link: "#",
  title: "Sitemap"
}];
const Footer = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.email.value;
    if (email) {
      form.reset();
    }
    ;
  };
  return <footer className="site-footer">
    <div className="site-footer__bg"></div>
    <div className="site-footer__top">
      <div className="container">
        <div className="site-footer__top-inner">
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
              <div className="footer-widget__about">
                <div className="footer-widget__about-logo">
                  <Link href="/"><img src="/d-bike-logo.png" alt="logo" style={{ maxWidth: '150px' }} /></Link>
                </div>
                <p className="footer-widget__about-text">Car Is Where Early Adopters And Innovation
                  Seekers Find Lively
                  Imaginative Tech.</p>
                <div className="footer-widget__social" style={{ display: 'flex', gap: '15px' }}>
                  <a href="#" style={{ backgroundColor: 'white', color: 'var(--gorent-secondary)', fontSize: '12px', width: '35px', height: '35px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', transition: '0.3s' }}><i className="icon-facebook"></i></a>
                  <a href="#" style={{ backgroundColor: 'white', color: 'var(--gorent-secondary)', fontSize: '12px', width: '35px', height: '35px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', transition: '0.3s' }}><i className="icon-twitter"></i></a>
                  <a href="#" style={{ backgroundColor: 'white', color: 'var(--gorent-secondary)', fontSize: '12px', width: '35px', height: '35px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', transition: '0.3s' }}><i className="icon-instagram"></i></a>
                  <a href="#" style={{ backgroundColor: 'white', color: 'var(--gorent-secondary)', fontSize: '12px', width: '35px', height: '35px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', transition: '0.3s' }}><i className="icon-youtube"></i></a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-6 col-md-6 col-6 wow fadeInUp" data-wow-delay="200ms">
              <div className="footer-widget__links">
                <h4 className="footer-widget__title">Quick links</h4>
                <ul className="footer-widget__links-list list-unstyled">
                  {linkOne.map(item => <motion.li initial={{
                    x: 40,
                    opacity: 0
                  }} whileInView={{
                    x: 0,
                    opacity: 1
                  }} transition={{
                    duration: 0.2 * item.id,
                    ease: "easeOut"
                  }} viewport={{
                    amount: 0.5,
                    once: true
                  }} key={item.id}><Link href={item.link}>{item.title}</Link></motion.li>)}
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-6 wow fadeInUp" data-wow-delay="400ms">
              <div className="footer-widget__services">
                <h4 className="footer-widget__title">Company</h4>
                <ul className="footer-widget__links-list list-unstyled">
                  {linkTwo.map(item => <motion.li initial={{
                    x: 40,
                    opacity: 0
                  }} whileInView={{
                    x: 0,
                    opacity: 1
                  }} transition={{
                    duration: 0.2 * item.id,
                    ease: "easeOut"
                  }} viewport={{
                    amount: 0.5,
                    once: true
                  }} key={item.id}><Link href={item.link}>{item.title}</Link></motion.li>)}
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
              <div className="footer-widget__contact">
                <h3 className="footer-widget__title">Contact Us</h3>
                <ul className="footer-widget__contact-list list-unstyled">
                  <motion.li initial={{
                    x: 40,
                    opacity: 0
                  }} whileInView={{
                    x: 0,
                    opacity: 1
                  }} transition={{
                    duration: 0.2,
                    ease: "easeOut"
                  }} viewport={{
                    amount: 0.5,
                    once: true
                  }}>
                    <div className="icon">
                      <span className="icon-pin"></span>
                    </div>
                    <p>Gopal Ballabh Rd,  near Shakuntala Palace, near Puri Railway station,  Puri, Odisha 752001</p>
                  </motion.li>
                  <motion.li initial={{
                    x: 40,
                    opacity: 0
                  }} whileInView={{
                    x: 0,
                    opacity: 1
                  }} transition={{
                    duration: 0.6,
                    ease: "easeOut"
                  }} viewport={{
                    amount: 0.5,
                    once: true
                  }}>
                    <div className="icon">
                      <span className="icon-call"></span>
                    </div>
                    <p><a href="tel:+918112003520">+91 81120 03520</a></p>
                  </motion.li>
                  <motion.li initial={{
                    x: 40,
                    opacity: 0
                  }} whileInView={{
                    x: 0,
                    opacity: 1
                  }} transition={{
                    duration: 0.9,
                    ease: "easeOut"
                  }} viewport={{
                    amount: 0.5,
                    once: true
                  }}>
                    <div className="icon">
                      <span className="icon-envelope"></span>
                    </div>
                    <p><a href="mailto:dbikerental@gmail.com">dbikerental@gmail.com</a></p>
                  </motion.li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="site-footer__bottom">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="site-footer__bottom-inner">
              <div className="site-footer__copyright">
                <p className="site-footer__copyright-text">
                  © {new Date().getFullYear()} By <Link href="/" style={{ color: 'var(--gorent-secondary)' }}>D-Bike Rental</Link> All Rights Reserved.
                </p>
              </div>
              <div className="site-footer__bottom-menu-box">
                <ul className="list-unstyled site-footer__bottom-menu">
                  <li>Developed by <Link href="https://www.one9ty.com/" target="_blank" style={{ color: 'var(--gorent-secondary)' }}>One9Ty Digital Solution</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>;
};
export default Footer;