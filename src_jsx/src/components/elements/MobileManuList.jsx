"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Link from 'next/link';
import { usePathname as useLocation } from 'next/navigation';
import { motion } from "framer-motion";
import { blogs_link, cars_link, home_link, pages_link, shops_link } from '../link-content/NavLink';
import useGorentContext from '../context/useGorentContext';
const MobileManuList = () => {
    const { setIsMobileManu } = useGorentContext();
    const [isHome, setIsHome] = useState(false);
    const [isPages, setIsPages] = useState(false);
    const [isCars, setIsCars] = useState(false);
    const [isShop, setIsShop] = useState(false);
    const [isBlog, setIsBlog] = useState(false);
    const currentPath = (useLocation() || "");
    const findLocation = (array) => {
        return array.some(item => item?.link === currentPath);
    };
    const closeMobileManu = () => {
        setIsMobileManu(false);
        setIsHome(false);
        setIsPages(false);
        setIsCars(false);
        setIsShop(false);
        setIsBlog(false);
    };
    return (_jsxs("ul", { className: "main-menu__list mobileManulist", children: [_jsxs("li", { className: "dropdown", children: [_jsxs("a", { href: "#", className: `${isHome || findLocation(home_link) ? "expanded" : ""}`, children: ["Home", _jsxs("button", { className: `${isHome ? "expanded" : ""}`, onClick: () => setIsHome((pre) => (!pre)), children: [" ", _jsx("i", { className: "fa fa-angle-down" })] })] }), _jsx("ul", { className: "shadow-box", style: { display: `${isHome ? "block" : "none"}` }, children: home_link.map((Item) => (_jsx(motion.li, { onClick: closeMobileManu, initial: { x: -70, opacity: 0 }, whileInView: { x: 0, opacity: 1 }, transition: {
                                duration: 0.1 * Item?.id,
                                ease: "easeOut"
                            }, viewport: { amount: 0.01, once: true }, className: `${currentPath === Item?.link ? "current" : ""}`, children: _jsx(Link, { href: Item?.link, children: Item?.value }) }, Item?.id))) })] }), _jsx("li", { className: currentPath === "/inner/about" ? "current" : "", onClick: closeMobileManu, children: _jsx(Link, { href: "/inner/about", children: "About Us" }) }), _jsxs("li", { className: "dropdown", children: [_jsxs("a", { href: "#", className: `${isPages || findLocation(pages_link) ? "expanded" : ""}`, children: ["Pages", _jsxs("button", { onClick: () => setIsPages((pre) => (!pre)), className: `${isPages ? "expanded" : ""}`, children: [" ", _jsx("i", { className: "fa fa-angle-down" })] })] }), _jsx("ul", { className: "shadow-box", style: { display: `${isPages ? "block" : "none"}` }, children: pages_link.map((Item) => (_jsx(motion.li, { onClick: closeMobileManu, initial: { x: -70, opacity: 0 }, whileInView: { x: 0, opacity: 1 }, transition: {
                                duration: 0.1 * Item?.id,
                                ease: "easeOut"
                            }, viewport: { amount: 0.01, once: true }, className: `${currentPath === Item?.link ? "current" : ""}`, children: _jsx(Link, { href: Item?.link, children: Item?.value }) }, Item?.id))) })] }), _jsxs("li", { className: "dropdown", children: [_jsxs("a", { href: "#", className: `${isCars || findLocation(cars_link) ? "expanded" : ""}`, children: ["Cars", _jsxs("button", { className: `${isCars ? "expanded" : ""}`, onClick: () => setIsCars((pre) => (!pre)), children: [" ", _jsx("i", { className: "fa fa-angle-down" })] })] }), _jsx("ul", { className: "shadow-box", style: { display: `${isCars ? "block" : "none"}` }, children: cars_link.map((Item) => (_jsx(motion.li, { onClick: closeMobileManu, initial: { x: -70, opacity: 0 }, whileInView: { x: 0, opacity: 1 }, transition: {
                                duration: 0.1 * Item?.id,
                                ease: "easeOut"
                            }, viewport: { amount: 0.01, once: true }, className: `${currentPath === Item?.link ? "current" : ""}`, children: _jsx(Link, { href: Item?.link, children: Item?.value }) }, Item?.id))) })] }), _jsxs("li", { className: "dropdown", children: [_jsxs("a", { href: "#", className: `${isShop || findLocation(shops_link) ? "expanded" : ""}`, children: ["Shop", _jsxs("button", { className: `${isShop ? "expanded" : ""}`, onClick: () => setIsShop((pre) => (!pre)), children: [" ", _jsx("i", { className: "fa fa-angle-down" })] })] }), _jsx("ul", { className: "shadow-box", style: { display: `${isShop ? "block" : "none"}` }, children: shops_link.map((Item) => (_jsx(motion.li, { onClick: closeMobileManu, initial: { x: -70, opacity: 0 }, whileInView: { x: 0, opacity: 1 }, transition: {
                                duration: 0.1 * Item?.id,
                                ease: "easeOut"
                            }, viewport: { amount: 0.01, once: true }, className: `${currentPath === Item?.link ? "current" : ""}`, children: _jsx(Link, { href: Item?.link, children: Item?.value }) }, Item?.id))) })] }), _jsxs("li", { className: "dropdown", children: [_jsxs("a", { href: "#", className: `${isBlog || findLocation(blogs_link) ? "expanded" : ""}`, children: ["Blog", _jsxs("button", { className: `${isBlog ? "expanded" : ""}`, onClick: () => setIsBlog((pre) => (!pre)), children: [" ", _jsx("i", { className: "fa fa-angle-down" })] })] }), _jsx("ul", { className: "shadow-box", style: { display: `${isBlog ? "block" : "none"}` }, children: blogs_link.map((Item) => (_jsx(motion.li, { onClick: closeMobileManu, initial: { x: -70, opacity: 0 }, whileInView: { x: 0, opacity: 1 }, transition: {
                                duration: 0.1 * Item?.id,
                                ease: "easeOut"
                            }, viewport: { amount: 0.01, once: true }, className: `${currentPath === Item?.link ? "current" : ""}`, children: _jsx(Link, { href: Item?.link, children: Item?.value }) }, Item?.id))) })] }), _jsx("li", { className: `${currentPath === "/inner/contact" ? "current" : ""}`, onClick: closeMobileManu, children: _jsx(Link, { href: "/inner/contact", children: "Contact" }) })] }));
};
export default MobileManuList;
