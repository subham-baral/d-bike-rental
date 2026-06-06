"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Link from 'next/link';
import { usePathname as useLocation } from 'next/navigation';
import { blogs_link, cars_link, home_link, pages_link, shops_link } from '../link-content/NavLink';
import MobileManuListSingle from './MobileManuListSingle';
const MainManuList = ({ onePageManuList }) => {
    const currentPath = (useLocation() || "");
    const findLocation = (array) => {
        return array.some(item => item?.link === currentPath);
    };
    const isOnePage = currentPath.includes("one-page");
    if (isOnePage) {
        return _jsx(MobileManuListSingle, { onePageManuListProp: onePageManuList });
    }
    return (_jsxs("ul", { className: "main-menu__list", children: [_jsxs("li", { className: `dropdown ${findLocation(home_link) ? "current" : ""}`, children: [_jsx("a", { href: "#", children: "Home" }), _jsx("ul", { className: "shadow-box", children: home_link.map((Item) => _jsx("li", { className: currentPath === Item?.link ? "current" : "", children: _jsx(Link, { href: Item?.link, children: Item?.value }) }, Item?.id)) })] }), _jsx("li", { className: currentPath === "/inner/about" ? "current" : "", children: _jsx(Link, { href: "/inner/about", children: "About Us" }) }), _jsxs("li", { className: `dropdown ${findLocation(pages_link) ? "current" : ""}`, children: [_jsx("a", { href: "#", children: "Pages" }), _jsx("ul", { className: "shadow-box", children: pages_link.map((Item) => _jsx("li", { className: currentPath === Item?.link ? "current" : "", children: _jsx(Link, { href: Item?.link, children: Item?.value }) }, Item?.id)) })] }), _jsxs("li", { className: `dropdown ${findLocation(cars_link) ? "current" : ""}`, children: [_jsx("a", { href: "#", children: "Cars" }), _jsx("ul", { className: "shadow-box", children: cars_link.map((Item) => _jsx("li", { className: currentPath === Item?.link ? "current" : "", children: _jsx(Link, { href: Item?.link, children: Item?.value }) }, Item?.id)) })] }), _jsxs("li", { className: `dropdown ${findLocation(shops_link) ? "current" : ""}`, children: [_jsx("a", { href: "#", children: "Shop" }), _jsx("ul", { className: "shadow-box", children: shops_link.map((Item) => _jsx("li", { className: currentPath === Item?.link ? "current" : "", children: _jsx(Link, { href: Item?.link, children: Item?.value }) }, Item?.id)) })] }), _jsxs("li", { className: `dropdown ${findLocation(blogs_link) ? "current" : ""}`, children: [_jsx("a", { href: "#", children: "Blog" }), _jsx("ul", { className: "shadow-box", children: blogs_link.map((Item) => _jsx("li", { className: currentPath === Item?.link ? "current" : "", children: _jsx(Link, { href: Item?.link, children: Item?.value }) }, Item?.id)) })] }), _jsx("li", { className: currentPath === "/inner/contact" ? "current" : "", children: _jsx(Link, { href: "/inner/contact", children: "Contact" }) })] }));
};
export default MainManuList;
