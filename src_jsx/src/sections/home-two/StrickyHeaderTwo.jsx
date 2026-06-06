"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import MainManuList from '../../components/elements/MainManuList';
const logoOne = "/d-bike-logo.png";
import useGorentContext from '../../components/context/useGorentContext';
import { onePageManuListTwo } from '../../components/link-content/NavLink';
const StrickyHeaderTwo = () => {
    const { setIsSearch, setIsSidebar, setIsMobileManu, cartCount } = useGorentContext();
    const [isStick, setIsSticky] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsSticky(true);
            }
            else {
                setIsSticky(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (_jsx("div", { className: `stricky-header stricked-menu main-menu main-menu-two ${isStick ? 'stricky-fixed' : ''}`, children: _jsx("div", { className: "sticky-header__content", children: _jsx("div", { className: "main-menu-two__wrapper", children: _jsxs("div", { className: "main-menu-two__wrapper-inner", children: [_jsx("div", { className: "main-menu-two__left", children: _jsx("div", { className: "main-menu-two__logo", children: _jsx(Link, { href: "/", children: _jsx("img", { src: logoOne, alt: "Logo" }) }) }) }), _jsxs("div", { className: "main-menu-two__middle-box", children: [_jsxs("div", { className: "main-menu-two__main-menu-box", children: [_jsx("a", { href: "#", className: "mobile-nav__toggler", onClick: () => setIsMobileManu((pre) => (!pre)), children: _jsx("i", { className: "fa fa-bars" }) }), _jsx(MainManuList, { onePageManuList: onePageManuListTwo })] }), _jsxs("div", { className: "main-menu-two__search-cart-box", children: [_jsx("div", { className: "main-menu-two__search-box", onClick: () => setIsSearch((pre) => !pre), children: _jsx("a", { href: "#", className: "main-menu-two__search search-toggler icon-search" }) }), _jsx("div", { className: "main-menu-two__cart-box", children: _jsxs(Link, { href: "/inner/cart", className: "main-menu-two__cart", children: [_jsx("span", { className: "far fa-shopping-cart" }), _jsxs("span", { className: "main-menu-two__cart-count", children: ["0", cartCount] })] }) })] })] }), _jsxs("div", { className: "main-menu-two__right", children: [_jsxs("div", { className: "main-menu-two__call", children: [_jsx("div", { className: "main-menu-two__call-icon", children: _jsx("i", { className: "icon-call-3" }) }), _jsxs("div", { className: "main-menu-two__call-content", children: [_jsx("p", { className: "main-menu-two__call-sub-title", children: "Call Anytime" }), _jsx("h5", { className: "main-menu-two__call-number", children: _jsx("a", { href: "tel:23645689622", children: "+236 (456) 896 22" }) })] })] }), _jsx("div", { className: "main-menu-two__nav-sidebar-icon", onClick: () => setIsSidebar((pre) => !pre), children: _jsxs("a", { className: "navSidebar-button", href: "#", children: [_jsx("span", { className: "icon-dots-menu-one" }), _jsx("span", { className: "icon-dots-menu-two" }), _jsx("span", { className: "icon-dots-menu-three" })] }) })] })] }) }) }) }));
};
export default StrickyHeaderTwo;
