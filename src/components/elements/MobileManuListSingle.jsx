"use client";

import React from 'react';
import Link from 'next/link';
import useGorentContext from '../context/useGorentContext';
const MobileManuListSingle = ({
  onePageManuListProp
}) => {
  const {
    activeSection,
    setIsMobileManu
  } = useGorentContext();
  const scrollToSection = id => {
    const element = document.getElementById(id);
    if (!element) return;
    const offset = 70; // adgust height
    const top = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({
      top,
      behavior: "smooth"
    });
  };
  return <ul className="main-menu__list one-page-scroll-menu">
            {onePageManuListProp.map(item => <li className={`scrollToLink ${activeSection === item?.linkId ? "current" : ""}`} key={item?.id}>
                        <Link href={`#${item?.linkId}`} onClick={e => {
        e.preventDefault();
        scrollToSection(item.linkId);
        setIsMobileManu(false);
      }}>
                            {item?.link}
                        </Link>
                    </li>)}
        </ul>;
};
export default MobileManuListSingle;