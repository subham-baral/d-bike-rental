"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const logoTwo = "/d-bike-logo.png";
import Link from 'next/link';
import { usePathname as useLocation } from 'next/navigation';
import useGorentContext from '../context/useGorentContext';
import MobileManuList from './MobileManuList';
import MobileManuListSingle from './MobileManuListSingle';
import { onePageManuListOne, onePageManuListThree, onePageManuListTwo } from '../link-content/NavLink';
const MobileNav = () => {
    const { isMobileManu, setIsMobileManu } = useGorentContext();
    const currentPath = (useLocation() || "");
    const isOnePage = currentPath.includes("one-page");
    return (_jsxs("div", { className: `mobile-nav__wrapper ${isMobileManu ? "expanded" : ""}`, children: [_jsx("div", { className: "mobile-nav__overlay mobile-nav__toggler", onClick: () => setIsMobileManu((pre) => (!pre)) }), _jsxs("div", { className: "mobile-nav__content", children: [_jsx("span", { className: "mobile-nav__close mobile-nav__toggler", onClick: () => setIsMobileManu((pre) => (!pre)), children: _jsx("i", { className: "fa fa-times" }) }), _jsx("div", { className: "logo-box", children: _jsx(Link, { href: "/", "aria-label": "logo image", onClick: () => setIsMobileManu((pre) => (!pre)), children: _jsx("img", { src: logoTwo, alt: "Logo" }) }) }), _jsx("div", { className: "mobile-nav__container", children: isOnePage ? _jsx(MobileManuListSingle, { onePageManuListProp: currentPath === "/index-one-page" ? onePageManuListOne : currentPath === "/index-two-one-page" ? onePageManuListTwo : onePageManuListThree }) : _jsx(MobileManuList, {}) }), _jsxs("ul", { className: "mobile-nav__contact list-unstyled", children: [_jsxs("li", { children: [_jsx("i", { className: "fa fa-envelope" }), _jsx("a", { href: "mailto:needhelp@packageName__.com", children: "needhelp@gorent.com" })] }), _jsxs("li", { children: [_jsx("i", { className: "fas fa-phone" }), _jsx("a", { href: "tel:666-888-0000", children: "666 888 0000" })] })] }), _jsx("div", { className: "mobile-nav__top", children: _jsxs("div", { className: "mobile-nav__social", children: [_jsx("a", { href: "#", className: "fab fa-twitter" }), _jsx("a", { href: "#", className: "fab fa-facebook-square" }), _jsx("a", { href: "#", className: "fab fa-pinterest-p" }), _jsx("a", { href: "#", className: "fab fa-instagram" })] }) })] })] }));
};
export default MobileNav;
