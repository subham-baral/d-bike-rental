"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname as useLocation } from 'next/navigation';
import { motion } from "framer-motion";
import { blogs_link } from '../link-content/NavLink';
import useGorentContext from '../context/useGorentContext';

const MobileManuList = () => {
  const { setIsMobileManu } = useGorentContext();
  const [isBlog, setIsBlog] = useState(false);
  
  const currentPath = useLocation() || "";
  
  const findLocation = array => {
    return array.some(item => item?.link === currentPath);
  };
  
  const closeMobileManu = () => {
    setIsMobileManu(false);
    setIsBlog(false);
  };
  
  return (
    <ul className="main-menu__list mobileManulist">
      <li className={currentPath === "/" ? "current" : ""} onClick={closeMobileManu}>
        <Link href="/">Home</Link>
      </li>
      <li className={currentPath === "/about" ? "current" : ""} onClick={closeMobileManu}>
        <Link href="/about">About Us</Link>
      </li>
      <li className={currentPath === "/bikes" ? "current" : ""} onClick={closeMobileManu}>
        <Link href="/bikes">Vehicles</Link>
      </li>
      <li className="dropdown">
        <a href="#" className={`${isBlog || findLocation(blogs_link) ? "expanded" : ""}`}>
          Blog
          <button className={`${isBlog ? "expanded" : ""}`} onClick={(e) => { e.preventDefault(); setIsBlog(pre => !pre); }}>
            <i className="fa fa-angle-down"></i>
          </button>
        </a>
        <ul className="shadow-box" style={{ display: `${isBlog ? "block" : "none"}` }}>
          {blogs_link.map(Item => (
            <motion.li onClick={closeMobileManu} initial={{ x: -70, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.1 * Item?.id, ease: "easeOut" }} viewport={{ amount: 0.01, once: true }} key={Item?.id} className={`${currentPath === Item?.link ? "current" : ""}`}>
              <Link href={Item?.link}>{Item?.value}</Link>
            </motion.li>
          ))}
        </ul>
      </li>
      <li className={`${currentPath === "/contact" ? "current" : ""}`} onClick={closeMobileManu}>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  );
};

export default MobileManuList;