"use client";

import React from 'react';
import Link from 'next/link';
import MainManuList from '../../components/elements/MainManuList';
const logoOne = "/d-bike-logo.png";
import useGorentContext from '../../components/context/useGorentContext';
import { onePageManuListOne } from '../../components/link-content/NavLink';
const Header = () => {
    const {
        setIsSearch,
        setIsSidebar,
        setIsMobileManu,
        cartCount
    } = useGorentContext();
    return <header className="main-header">
        <div className="main-menu__top">
            <div className="main-menu__top-inner">
                <ul className="list-unstyled main-menu__contact-list">
                    <li>
                        <div className="icon">
                            <i className="icon-call-2"></i>
                        </div>
                        <div className="text">
                            <p><a href="tel:+918112003520">+91 81120 03520</a>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="icon">
                            <i className="icon-envelope-2"></i>
                        </div>
                        <div className="text">
                            <p><a href="mailto:dbikerental1@gmail.com">dbikerental1@gmail.com</a>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="icon">
                            <i className="icon-pin-2"></i>
                        </div>
                        <div className="text">
                            <p>Gopal Ballabh Rd, Puri, Odisha 752001</p>
                        </div>
                    </li>
                </ul>
                <div className="main-menu__top-right">
                    <div className="main-menu__top-login-reg-box">
                    </div>
                    <div className="main-menu__social">
                        <a href="https://www.facebook.com/people/D-Bike-Rental/pfbid02jkCiyQpTmUt9K18BvC8VqTXmyKnegT7UJViVR5jygvasuiP6Vapxm3BXgsPWjy7tl/" target="_blank" rel="noopener noreferrer"><i className="icon-facebook"></i></a>
                        <a href="https://www.instagram.com/dbikerental/?hl=en" target="_blank" rel="noopener noreferrer"><i className="icon-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <nav className="main-menu">
            <div className="main-menu__wrapper">
                <div className="main-menu__wrapper-inner">
                    <div className="main-menu__left">
                        <div className="main-menu__logo">
                            <Link href="/"><img src={logoOne} alt="Image" /></Link>
                        </div>
                    </div>
                    <div className="main-menu__middle-box">
                        <div className="main-menu__main-menu-box">
                            <a href="#" className="mobile-nav__toggler" onClick={(e) => { e.preventDefault(); setIsMobileManu(pre => !pre); }}><i className="fa fa-bars"></i></a>
                            <MainManuList onePageManuList={onePageManuListOne} />
                        </div>
                    </div>
                    <div className="main-menu__right">
                        <div className="main-menu__call">
                            <div className="main-menu__call-icon">
                                <i className="icon-call-3"></i>
                            </div>
                            <div className="main-menu__call-content">
                                <p className="main-menu__call-sub-title">Call Anytime</p>
                                <h5 className="main-menu__call-number"><a href="tel:+918112003520">+91 81120 03520</a>
                                </h5>
                            </div>
                        </div>
                        <div className="main-menu__nav-sidebar-icon" onClick={() => setIsSidebar(pre => !pre)}>
                            <a className="navSidebar-button" href="#" onClick={(e) => e.preventDefault()}>
                                <span className="icon-dots-menu-one"></span>
                                <span className="icon-dots-menu-two"></span>
                                <span className="icon-dots-menu-three"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>;
};
export default Header;