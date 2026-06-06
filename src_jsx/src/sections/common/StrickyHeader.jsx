"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname as useLocation } from 'next/navigation';
import MainManuList from '../../components/elements/MainManuList';
const logoOne = "/d-bike-logo.png";
import useGorentContext from '../../components/context/useGorentContext';
import { onePageManuListOne, onePageManuListThree } from '../../components/link-content/NavLink';
const StrickyHeader = () => {
    const { setIsSearch, setIsSidebar, cartCount } = useGorentContext();
    const [isStick, setIsSticky] = useState(false);
    const pathName = useLocation()?.pathname;
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
    return (_jsx("div", { className: `stricky-header stricked-menu main-menu ${isStick ? 'stricky-fixed' : ''}`, children: _jsx("div", { className: "sticky-header__content", children: _jsx("div", { className: "main-menu__wrapper", children: _jsxs("div", { className: "main-menu__wrapper-inner", children: [_jsx("div", { className: "main-menu__left", children: _jsx("div", { className: "main-menu__logo", children: _jsx(Link, { href: "/", children: _jsx("img", { src: logoOne, alt: "Image" }) }) }) }), _jsxs("div", { className: "main-menu__middle-box", children: [_jsxs("div", { className: "main-menu__main-menu-box", children: [_jsx("a", { href: "#", className: "mobile-nav__toggler", children: _jsx("i", { className: "fa fa-bars" }) }), _jsx(MainManuList, { onePageManuList: pathName === "/index-one-page" ? onePageManuListOne : onePageManuListThree })] }), _jsxs("div", { className: "main-menu__search-cart-box", children: [_jsx("div", { className: "main-menu__search-box", onClick: () => setIsSearch((pre) => !pre), children: _jsx("a", { href: "#", className: "main-menu__search search-toggler icon-search" }) }), _jsx("div", { className: "main-menu__cart-box", children: _jsxs(Link, { href: "/inner/cart", className: "main-menu__cart", children: [_jsx("span", { className: "far fa-shopping-cart" }), _jsxs("span", { className: "main-menu__cart-count", children: ["0", cartCount] })] }) })] })] }), _jsxs("div", { className: "main-menu__right", children: [_jsxs("div", { className: "main-menu__call", children: [_jsx("div", { className: "main-menu__call-icon", children: _jsx("i", { className: "icon-call-3" }) }), _jsxs("div", { className: "main-menu__call-content", children: [_jsx("p", { className: "main-menu__call-sub-title", children: "Call Anytime" }), _jsx("h5", { className: "main-menu__call-number", children: _jsx("a", { href: "tel:23645689622", children: "+236 (456) 896 22" }) })] })] }), _jsx("div", { className: "main-menu__nav-sidebar-icon", onClick: () => setIsSidebar((pre) => !pre), children: _jsxs("a", { className: "navSidebar-button", href: "#", children: [_jsx("span", { className: "icon-dots-menu-one" }), _jsx("span", { className: "icon-dots-menu-two" }), _jsx("span", { className: "icon-dots-menu-three" })] }) })] })] }) }) }) }));
};
export default StrickyHeader;
