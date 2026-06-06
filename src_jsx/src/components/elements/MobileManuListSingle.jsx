"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import Link from 'next/link';
import useGorentContext from '../context/useGorentContext';
const MobileManuListSingle = ({ onePageManuListProp }) => {
    const { activeSection, setIsMobileManu } = useGorentContext();
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (!element)
            return;
        const offset = 70; // adgust height
        const top = element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({
            top,
            behavior: "smooth",
        });
    };
    return (_jsx("ul", { className: "main-menu__list one-page-scroll-menu", children: onePageManuListProp.map((item) => (_jsx("li", { className: `scrollToLink ${activeSection === item?.linkId ? "current" : ""}`, children: _jsx(Link, { href: `#${item?.linkId}`, onClick: (e) => {
                    e.preventDefault();
                    scrollToSection(item.linkId);
                    setIsMobileManu(false);
                }, children: item?.link }) }, item?.id))) }));
};
export default MobileManuListSingle;
