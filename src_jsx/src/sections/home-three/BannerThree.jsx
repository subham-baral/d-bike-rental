"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import Link from 'next/link';
import imageOne from "../../assets/images/resources/banner-one-img-1.png";
import TypingEffect from '../../components/elements/TypingEffect';
const BannerThree = () => {
    return (_jsxs("section", { className: "banner-one", id: 'home', children: [_jsx("div", { className: "banner-one__shape-bg" }), _jsx("div", { className: "banner-one__shape-1", children: _jsx("div", { className: "banner-one__shape-1-bg" }) }), _jsx("div", { className: "banner-one__shape-2" }), _jsx("div", { className: "container", children: _jsxs("div", { className: "banner-one__inner", children: [_jsxs("div", { className: "banner-one__content", children: [_jsx("p", { className: "banner-one__sub-title", children: "100% Trusted car rental platform in the World" }), _jsxs("h2", { className: "banner-one__title", children: ["Find Your Best Dream", _jsx("br", {}), _jsx("span", { children: " Car for " }), _jsx("span", { className: "typed-effect", children: _jsx(TypingEffect, { stringArray: ['Rental', 'Booking'] }) })] }), _jsxs("p", { className: "banner-one__text", children: ["Lorem ipsum is simply ipun txns mane so dummy text of free available in market ", _jsx("br", {}), " the printing and typesetting industry has been the industry's standard dummy ", _jsx("br", {}), " text ever. Open multiply a green form lesser their from in made herb multiply."] }), _jsx("div", { className: "banner-one__btn-box", children: _jsxs(Link, { href: "/inner/about", className: "thm-btn", children: ["Read More", _jsx("span", { className: "fas fa-arrow-right" })] }) })] }), _jsx(motion.div, { className: "banner-one__img-one", initial: { x: 100, opacity: 0 }, whileInView: { x: 0, opacity: 1 }, transition: {
                                duration: 1.5,
                                ease: "easeOut"
                            }, viewport: { amount: 0.1, once: true }, children: _jsx("img", { src: imageOne, alt: "Image", className: "float-bob-y" }) })] }) })] }));
};
export default BannerThree;
