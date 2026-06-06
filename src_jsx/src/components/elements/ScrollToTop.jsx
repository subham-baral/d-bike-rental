"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState, useCallback, useLayoutEffect } from "react";
import { usePathname as useLocation } from 'next/navigation';
function throttle(fn, delay) {
    let last = 0;
    return (...args) => {
        const now = Date.now();
        if (now - last >= delay) {
            last = now;
            fn(...args);
        }
    };
}
const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);
    const toggleVisibility = useCallback(() => {
        if (window.scrollY > 300) {
            setVisible(true);
        }
        else {
            setVisible(false);
        }
    }, []);
    const location = useLocation();
    // Scroll to top when route changes
    useLayoutEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    }, [location.pathname]);
    useEffect(() => {
        const throttledScroll = throttle(toggleVisibility, 200);
        window.addEventListener("scroll", throttledScroll);
        return () => {
            window.removeEventListener("scroll", throttledScroll);
        };
    }, [toggleVisibility]);
    const handleScrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (_jsxs("a", { href: "#", onClick: handleScrollToTop, className: `scroll-to-top ${visible ? "show" : ""}`, children: [_jsx("span", { className: "scroll-to-top__wrapper", children: _jsx("span", { className: "scroll-to-top__inner" }) }), _jsx("span", { className: "scroll-to-top__text", children: "Go Back Top" })] }));
};
export default ScrollToTop;
