"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import titleImg from "../../assets/images/shapes/section-title-tagline-shape-1.png";
import TextAnimation from "../../components/elements/TextAnimation";
import { motion } from "framer-motion";
import { servicesOneData } from "../../all-content/service/service";
import Link from 'next/link';
const ServiceInner = ({ sectionClass }) => {
    return (_jsxs("section", { className: sectionClass, children: [_jsx("div", { className: "services-one__shape-1" }), _jsx("div", { className: "services-one__shape-2" }), _jsxs("div", { className: "container", children: [_jsxs("div", { className: "section-title text-center sec-title-animation animation-style1", children: [_jsxs("div", { className: "section-title__tagline-box justify-content-center", children: [_jsx("div", { className: "section-title__tagline-shape", children: _jsx("img", { src: titleImg, alt: "shape" }) }), _jsx("span", { className: "section-title__tagline", children: "What We\u2019re Offering" })] }), _jsxs("h2", { className: "section-title__title title-animation", children: [_jsx(TextAnimation, { text: `Services We’re Providing` }), _jsx(TextAnimation, { text: `to Customers` })] })] }), _jsx("div", { className: "row", children: servicesOneData.map((service, i) => (_jsx(motion.div, { initial: { y: 80, opacity: 0 }, whileInView: { y: 0, opacity: 1 }, transition: {
                                duration: 0.3 * i,
                                ease: "easeOut"
                            }, viewport: { amount: 0.01, once: true }, className: `col-xl-3 col-lg-6 col-md-6 wow`, children: _jsxs("div", { className: "services-one__single", children: [_jsx("div", { className: "services-one__single-shape-1" }), _jsx("div", { className: "services-one__single-shape-2" }), _jsx("div", { className: "services-one__single-shape-3" }), _jsx("div", { className: "services-one__count" }), _jsx("div", { className: "services-one__icon", children: _jsx("span", { className: service.icon }) }), _jsx("h3", { className: "services-one__title", children: _jsx(Link, { href: "/inner/services", children: service.title }) }), _jsx("p", { className: "services-one__text", children: service.description })] }) }, service.id))) })] })] }));
};
export default ServiceInner;
