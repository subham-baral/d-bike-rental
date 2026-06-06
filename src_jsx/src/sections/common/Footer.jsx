"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Link from 'next/link';
import { motion } from "framer-motion";
import footerLogo from "../../assets/images/resources/footer-logo.png";
const linkOne = [
    { id: 1, link: "/inner/about", title: "About Us" },
    { id: 2, link: "/inner/services", title: "Our Services" },
    { id: 3, link: "/inner/drivers", title: "Our Drivers" },
    { id: 4, link: "/inner/blog", title: "Our Blog" },
    { id: 5, link: "/inner/contact", title: "Contact Us" }
];
const linkTwo = [
    { id: 1, link: "/inner/car-list-v-1", title: "Your Reliable Ride" },
    { id: 2, link: "/inner/car-list-v-2", title: "Express Shuttle" },
    { id: 3, link: "/inner/car-list-v-3", title: "Travel in Style" },
    { id: 4, link: "/inner/cars", title: "Rental List" },
    { id: 5, link: "/inner/listing-single", title: "Dash Transport" },
];
const Footer = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const email = form.email.value;
        if (email) {
            form.reset();
        }
        ;
    };
    return (_jsxs("footer", { className: "site-footer", children: [_jsx("div", { className: "site-footer__bg" }), _jsx("div", { className: "site-footer__top", children: _jsx("div", { className: "container", children: _jsx("div", { className: "site-footer__top-inner", children: _jsxs("div", { className: "row", children: [_jsx("div", { className: "col-xl-4 col-lg-6 col-md-6 wow fadeInUp", "data-wow-delay": "100ms", children: _jsxs("div", { className: "footer-widget__about", children: [_jsx("div", { className: "footer-widget__about-logo", children: _jsx(Link, { href: "/", children: _jsx("img", { src: footerLogo, alt: "logo" }) }) }), _jsx("p", { className: "footer-widget__about-text", children: "Car Is Where Early Adopters And Innovation Seekers Find Lively Imaginative Tech." }), _jsxs("form", { className: "footer-widget__form", onSubmit: handleSubmit, children: [_jsx("div", { className: "footer-widget__input", children: _jsx("input", { type: "email", name: 'email', placeholder: "Your Email" }) }), _jsx("button", { type: "submit", className: "footer-widget__btn", children: _jsx("i", { className: "icon-right-arrow" }) })] })] }) }), _jsx("div", { className: "col-xl-2 col-lg-6 col-md-6 wow fadeInUp", "data-wow-delay": "200ms", children: _jsxs("div", { className: "footer-widget__links", children: [_jsx("h4", { className: "footer-widget__title", children: "Quick links" }), _jsx("ul", { className: "footer-widget__links-list list-unstyled", children: linkOne.map((item) => _jsx(motion.li, { initial: { x: 40, opacity: 0 }, whileInView: { x: 0, opacity: 1 }, transition: {
                                                        duration: 0.2 * item.id,
                                                        ease: "easeOut"
                                                    }, viewport: { amount: 0.5, once: true }, children: _jsx(Link, { href: item.link, children: item.title }) }, item.id)) })] }) }), _jsx("div", { className: "col-xl-3 col-lg-6 col-md-6 wow fadeInUp", "data-wow-delay": "400ms", children: _jsxs("div", { className: "footer-widget__services", children: [_jsx("h4", { className: "footer-widget__title", children: "Services" }), _jsx("ul", { className: "footer-widget__links-list list-unstyled", children: linkTwo.map((item) => _jsx(motion.li, { initial: { x: 40, opacity: 0 }, whileInView: { x: 0, opacity: 1 }, transition: {
                                                        duration: 0.2 * item.id,
                                                        ease: "easeOut"
                                                    }, viewport: { amount: 0.5, once: true }, children: _jsx(Link, { href: item.link, children: item.title }) }, item.id)) })] }) }), _jsx("div", { className: "col-xl-3 col-lg-6 col-md-6 wow fadeInUp", "data-wow-delay": "300ms", children: _jsxs("div", { className: "footer-widget__contact", children: [_jsx("h3", { className: "footer-widget__title", children: "Contact Us" }), _jsxs("ul", { className: "footer-widget__contact-list list-unstyled", children: [_jsxs(motion.li, { initial: { x: 40, opacity: 0 }, whileInView: { x: 0, opacity: 1 }, transition: {
                                                            duration: 0.2,
                                                            ease: "easeOut"
                                                        }, viewport: { amount: 0.5, once: true }, children: [_jsx("div", { className: "icon", children: _jsx("span", { className: "icon-pin" }) }), _jsxs("p", { children: ["4140 Parker Rd. Allentown, New", _jsx("br", {}), " Mexico 31134"] })] }), _jsxs(motion.li, { initial: { x: 40, opacity: 0 }, whileInView: { x: 0, opacity: 1 }, transition: {
                                                            duration: 0.6,
                                                            ease: "easeOut"
                                                        }, viewport: { amount: 0.5, once: true }, children: [_jsx("div", { className: "icon", children: _jsx("span", { className: "icon-call" }) }), _jsx("p", { children: _jsx("a", { href: "tel:2195550114", children: "(219) 555-0114" }) })] }), _jsxs(motion.li, { initial: { x: 40, opacity: 0 }, whileInView: { x: 0, opacity: 1 }, transition: {
                                                            duration: 0.9,
                                                            ease: "easeOut"
                                                        }, viewport: { amount: 0.5, once: true }, children: [_jsx("div", { className: "icon", children: _jsx("span", { className: "icon-envelope" }) }), _jsx("p", { children: _jsx("a", { href: "mailto:gorent@gmail.com", children: "gorent@gmail.com" }) })] })] })] }) })] }) }) }) }), _jsx("div", { className: "site-footer__bottom", children: _jsx("div", { className: "container", children: _jsx("div", { className: "row", children: _jsx("div", { className: "col-xl-12", children: _jsxs("div", { className: "site-footer__bottom-inner", children: [_jsx("div", { className: "site-footer__copyright", children: _jsxs("p", { className: "site-footer__copyright-text", children: ["\u00A9 2026 By ", _jsx(Link, { href: "/", children: "Gorent" }), " All Rights Reserved."] }) }), _jsx("div", { className: "site-footer__bottom-menu-box", children: _jsxs("ul", { className: "list-unstyled site-footer__bottom-menu", children: [_jsx("li", { children: _jsx(Link, { href: "/inner/about", children: "Terms of Service" }) }), _jsx("li", { children: _jsx(Link, { href: "/inner/about", children: "Privacy policy" }) })] }) })] }) }) }) }) })] }));
};
export default Footer;
