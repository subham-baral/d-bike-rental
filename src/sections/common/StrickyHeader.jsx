"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname as useLocation } from 'next/navigation';
import MainManuList from '../../components/elements/MainManuList';
const logoOne = "/d-bike-logo.png";
import useGorentContext from '../../components/context/useGorentContext';
import { onePageManuListOne, onePageManuListThree } from '../../components/link-content/NavLink';
const StrickyHeader = () => {
  const {
    setIsSearch,
    setIsSidebar,
    cartCount
  } = useGorentContext();
  const [isStick, setIsSticky] = useState(false);
  const pathName = useLocation()?.pathname;
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return <div className={`stricky-header stricked-menu main-menu ${isStick ? 'stricky-fixed' : ''}`}>
            <div className="sticky-header__content">
                <div className="main-menu__wrapper">
                    <div className="main-menu__wrapper-inner">
                        <div className="main-menu__left">
                            <div className="main-menu__logo">
                                <Link href="/"><img src={logoOne} alt="Image" /></Link>
                            </div>
                        </div>
                        <div className="main-menu__middle-box">
                            <div className="main-menu__main-menu-box">
                                <a href="#" className="mobile-nav__toggler"><i className="fa fa-bars"></i></a>
                                <MainManuList onePageManuList={pathName === "/index-one-page" ? onePageManuListOne : onePageManuListThree} />
                            </div>
                            <div className="main-menu__search-cart-box">
                                <div className="main-menu__search-box" onClick={() => setIsSearch(pre => !pre)}>
                                    <a href="#" className="main-menu__search search-toggler icon-search"></a>
                                </div>
                                <div className="main-menu__cart-box">
                                </div>
                            </div>
                        </div>
                        <div className="main-menu__right">
                            <div className="main-menu__call">
                                <div className="main-menu__call-icon">
                                    <i className="icon-call-3"></i>
                                </div>
                                <div className="main-menu__call-content">
                                    <p className="main-menu__call-sub-title">Call Anytime</p>
                                    <h5 className="main-menu__call-number"><a href="tel:23645689622">+236 (456) 896 22</a>
                                    </h5>
                                </div>
                            </div>
                            <div className="main-menu__nav-sidebar-icon" onClick={() => setIsSidebar(pre => !pre)}>
                                <a className="navSidebar-button" href="#">
                                    <span className="icon-dots-menu-one"></span>
                                    <span className="icon-dots-menu-two"></span>
                                    <span className="icon-dots-menu-three"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
};
export default StrickyHeader;