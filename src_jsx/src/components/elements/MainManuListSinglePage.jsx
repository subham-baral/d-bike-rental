"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import Link from 'next/link';
const manuItems = [
    { id: 1, linkId: "home", link: "Home" },
    { id: 2, linkId: "services", link: "Services" },
    { id: 3, linkId: "about", link: "About Us" },
    { id: 4, linkId: "cars", link: "Cars" },
    { id: 5, linkId: "testimonial", link: "Testimonial" },
    { id: 6, linkId: "driver", link: "Driver" },
    { id: 7, linkId: "blog", link: "Blog" },
];
const MainManuListSinglePage = ({ manuList = manuItems }) => {
    return (_jsx("ul", { className: "main-menu__list one-page-scroll-menu", children: manuList.map((item) => (_jsx("li", { className: "scrollToLink", children: _jsx(Link, { href: `#${item?.linkId}`, onClick: (e) => {
                    e.preventDefault();
                    // scrollToSection(item.linkId);
                }, children: item?.link }) }, item?.id))) }));
};
export default MainManuListSinglePage;
