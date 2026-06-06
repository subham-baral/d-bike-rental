"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Link from 'next/link';
import { motion } from "framer-motion";
// Images
import TextAnimation from '../../components/elements/TextAnimation';
import taglineShape from '../../assets/images/shapes/section-title-tagline-shape-1.png';
import { pricingPlansThree } from '../../all-content/process/processData';
const PricingThree = () => {
    return (_jsx("section", { className: "pricing-two", children: _jsxs("div", { className: "container", children: [_jsxs("div", { className: "section-title text-center sec-title-animation animation-style1", children: [_jsxs("div", { className: "section-title__tagline-box justify-content-center", children: [_jsx("div", { className: "section-title__tagline-shape", children: _jsx("img", { src: taglineShape, alt: "Tagline Shape" }) }), _jsx("span", { className: "section-title__tagline", children: "Pricing & Plan" })] }), _jsxs("h2", { className: "section-title__title title-animation", children: [_jsx(TextAnimation, { text: 'Time Quick and Easy to' }), _jsx(TextAnimation, { text: 'Transportation' })] })] }), _jsx("ul", { className: "list-unstyled pricing-two__list", children: pricingPlansThree.map((plan) => (_jsx("li", { children: _jsxs("div", { className: "pricing-two__single", children: [_jsxs("div", { className: "pricing-two__left-content", children: [_jsx(motion.div, { initial: { x: -80, opacity: 0 }, whileInView: { x: 0, opacity: 1 }, transition: {
                                                duration: 0.3 * plan?.id,
                                                ease: "easeOut"
                                            }, viewport: { amount: 0.01, once: true }, className: "pricing-two__img", children: _jsx("img", { src: plan?.image, alt: plan?.title }) }), _jsxs("div", { className: "pricing-two__img-content", children: [_jsx("h3", { className: "pricing-two__title", children: plan.title }), _jsxs("h2", { className: "pricing-two__price-box", children: ["$", plan.price, " ", _jsx("span", { children: "/Mon" })] })] })] }), _jsxs("div", { className: "pricing-two__right-content", children: [_jsx("ul", { className: "list-unstyled pricing-two__points", children: plan.features.map((feature, index) => (_jsxs("li", { children: [_jsx("div", { className: "icon", children: _jsx("span", { className: "fas fa-check" }) }), _jsx("div", { className: "text", children: _jsx("p", { children: feature }) })] }, index))) }), _jsx("div", { className: "pricing-two__btn-box", children: _jsxs(Link, { href: "/inner/pricing", className: "thm-btn", children: ["Rent Now", _jsx("span", { className: "fas fa-arrow-right" })] }) })] })] }) }, plan.id))) })] }) }));
};
export default PricingThree;
