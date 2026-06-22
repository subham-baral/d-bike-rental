"use client";

import React from 'react';
const logoTwo = "/d-bike-logo.png";
import Link from 'next/link';
import { usePathname as useLocation } from 'next/navigation';
import useGorentContext from '../context/useGorentContext';
import MobileManuList from './MobileManuList';
import MobileManuListSingle from './MobileManuListSingle';
import { onePageManuListOne, onePageManuListThree, onePageManuListTwo } from '../link-content/NavLink';
const MobileNav = () => {
  const {
    isMobileManu,
    setIsMobileManu
  } = useGorentContext();
  const currentPath = useLocation() || "";
  const isOnePage = currentPath.includes("one-page");
  return <div className={`mobile-nav__wrapper ${isMobileManu ? "expanded" : ""}`}>
            <div className="mobile-nav__overlay mobile-nav__toggler" onClick={() => setIsMobileManu(pre => !pre)}></div>
            {/* <!-- /.mobile-nav__overlay --> */}
            <div className="mobile-nav__content">
                <span className="mobile-nav__close mobile-nav__toggler" onClick={() => setIsMobileManu(pre => !pre)}><i className="fa fa-times"></i></span>

                <div className="logo-box">
                    <Link href="/" aria-label="logo image" onClick={() => setIsMobileManu(pre => !pre)}>
                        <img src={logoTwo} alt="Logo" />
                    </Link>
                </div>
                <div className="mobile-nav__container">
                    {isOnePage ? <MobileManuListSingle onePageManuListProp={currentPath === "/index-one-page" ? onePageManuListOne : currentPath === "/index-two-one-page" ? onePageManuListTwo : onePageManuListThree} /> : <MobileManuList />}
                    
                </div>
                <ul className="mobile-nav__contact list-unstyled">
                    <li>
                        <i className="icon-envelope-2"></i>
                        <a href="mailto:dbikerental1@gmail.com">dbikerental1@gmail.com</a>
                    </li>
                    <li>
                        <i className="icon-call-2"></i>
                        <a href="tel:+918112003520">+91 81120 03520</a>
                    </li>
                    <li style={{ fontSize: '15px', display: 'flex', alignItems: 'flex-start' }}>
                        <i className="icon-pin-2" style={{ marginRight: '10px', marginTop: '4px', flexShrink: 0 }}></i>
                        <span>Gopal Ballabh Rd, near Shakuntala Palace, near Puri Railway station, Puri, Odisha 752001</span>
                    </li>
                </ul>
                <div className="mobile-nav__top">
                    <div className="mobile-nav__social">
                        <a href="https://www.facebook.com/people/D-Bike-Rental/pfbid02jkCiyQpTmUt9K18BvC8VqTXmyKnegT7UJViVR5jygvasuiP6Vapxm3BXgsPWjy7tl/" target="_blank" rel="noopener noreferrer"><i className="icon-facebook"></i></a>
                        <a href="https://www.instagram.com/dbikerental/?hl=en" target="_blank" rel="noopener noreferrer"><i className="icon-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>;
};
export default MobileNav;