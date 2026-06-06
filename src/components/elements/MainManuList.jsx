"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname as useLocation } from 'next/navigation';
import { blogs_link, cars_link } from '../link-content/NavLink';
import MobileManuListSingle from './MobileManuListSingle';

const MainManuList = ({ onePageManuList }) => {
  const currentPath = useLocation() || "";
  
  const findLocation = array => {
    return array.some(item => item?.link === currentPath);
  };
  
  const isOnePage = currentPath.includes("one-page");
  if (isOnePage) {
    return <MobileManuListSingle onePageManuListProp={onePageManuList} />;
  }
  
  return (
    <ul className="main-menu__list">
      <li className={currentPath === "/" ? "current" : ""}>
        <Link href="/">Home</Link>
      </li>
      <li className={currentPath === "/about" ? "current" : ""}>
        <Link href="/about">About Us</Link>
      </li>
      <li className={`dropdown ${findLocation(cars_link) ? "current" : ""}`}>
        <a href="#">Vehicles</a>
        <ul className="shadow-box">
          {cars_link.map(Item => (
            <li key={Item?.id} className={currentPath === Item?.link ? "current" : ""}>
              <Link href={Item?.link}>{Item?.value}</Link>
            </li>
          ))}
        </ul>
      </li>
      <li className={`dropdown ${findLocation(blogs_link) ? "current" : ""}`}>
        <a href="#">Blog</a>
        <ul className="shadow-box">
          {blogs_link.map(Item => (
            <li key={Item?.id} className={currentPath === Item?.link ? "current" : ""}>
              <Link href={Item?.link}>{Item?.value}</Link>
            </li>
          ))}
        </ul>
      </li>
      <li className={currentPath === "/contact" ? "current" : ""}>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  );
};

export default MainManuList;