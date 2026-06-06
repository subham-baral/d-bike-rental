"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname as useLocation } from 'next/navigation';
import { blogs_link, cars_link, home_link, pages_link, shops_link } from '../link-content/NavLink';
import MobileManuListSingle from './MobileManuListSingle';
const MainManuList = ({
  onePageManuList
}) => {
  const currentPath = useLocation() || "";
  const findLocation = array => {
    return array.some(item => item?.link === currentPath);
  };
  const isOnePage = currentPath.includes("one-page");
  if (isOnePage) {
    return <MobileManuListSingle onePageManuListProp={onePageManuList} />;
  }
  return <ul className="main-menu__list">
            <li className={`dropdown ${findLocation(home_link) ? "current" : ""}`}>
                <a href="#">Home</a>
                <ul className="shadow-box">
                    {home_link.map(Item => <li key={Item?.id} className={currentPath === Item?.link ? "current" : ""}>
                            <Link href={Item?.link}>{Item?.value}</Link>
                        </li>)}
                </ul>
            </li>
            <li className={currentPath === "/inner/about" ? "current" : ""}>
                <Link href="/inner/about">About Us</Link>
            </li>
            <li className={`dropdown ${findLocation(pages_link) ? "current" : ""}`}>
                <a href="#">Pages</a>
                <ul className="shadow-box">
                    {pages_link.map(Item => <li key={Item?.id} className={currentPath === Item?.link ? "current" : ""}>
                            <Link href={Item?.link}>{Item?.value}</Link>
                        </li>)}
                </ul>
            </li>
            <li className={`dropdown ${findLocation(cars_link) ? "current" : ""}`}>
                <a href="#">Cars</a>
                <ul className="shadow-box">
                    {cars_link.map(Item => <li key={Item?.id} className={currentPath === Item?.link ? "current" : ""}>
                            <Link href={Item?.link}>{Item?.value}</Link>
                        </li>)}
                </ul>
            </li>
            <li className={`dropdown ${findLocation(shops_link) ? "current" : ""}`}>
                <a href="#">Shop</a>
                <ul className="shadow-box">
                    {shops_link.map(Item => <li key={Item?.id} className={currentPath === Item?.link ? "current" : ""}>
                            <Link href={Item?.link}>{Item?.value}</Link>
                        </li>)}
                </ul>
            </li>
            <li className={`dropdown ${findLocation(blogs_link) ? "current" : ""}`}>
                <a href="#">Blog</a>
                <ul className="shadow-box">
                    {blogs_link.map(Item => <li key={Item?.id} className={currentPath === Item?.link ? "current" : ""}>
                            <Link href={Item?.link}>{Item?.value}</Link>
                        </li>)}
                </ul>
            </li>
            <li className={currentPath === "/inner/contact" ? "current" : ""}>
                <Link href="/inner/contact">Contact</Link>
            </li>
        </ul>;
};
export default MainManuList;