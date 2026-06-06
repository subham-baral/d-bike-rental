"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import TextAnimation from '../../components/elements/TextAnimation';
import { motion } from "framer-motion";
import { faqTwo } from '../../all-content/faq/faqData';
const FaqTwo = () => {
    const [isActiveFaq, setIsActiveFaq] = useState(2);
    return (_jsxs("section", { className: "faq-two", children: [_jsx("div", { className: "faq-two__shape-1" }), _jsx("div", { className: "faq-two__shape-2" }), _jsxs("div", { className: "container", children: [_jsxs("div", { className: "section-title text-center sec-title-animation animation-style1", children: [_jsxs("div", { className: "section-title__tagline-box justify-content-center", children: [_jsx("div", { className: "section-title__tagline-shape", children: _jsx("img", { src: "assets/images/shapes/section-title-tagline-shape-1.png", alt: "Image" }) }), _jsx("span", { className: "section-title__tagline", children: "Our Faqs" })] }), _jsx("h2", { className: "section-title__title title-animation", children: _jsx(TextAnimation, { text: 'Frequently Asking Any Question' }) })] }), _jsx("div", { className: "faq-two__inner-content", children: _jsx("div", { className: "accrodion-grp faq-one-accrodion", children: faqTwo.map((item) => (_jsxs(motion.div, { initial: { x: 50, opacity: 0 }, whileInView: { x: 0, opacity: 1 }, transition: {
                                    duration: 0.08 * item.id,
                                    ease: "easeOut"
                                }, viewport: { amount: 0.05, once: true }, className: `accrodion wow  ${isActiveFaq === item.id ? "active" : ""}`, children: [_jsx("div", { className: "accrodion-title", onClick: () => setIsActiveFaq(item?.id), children: _jsx("h4", { children: item?.question }) }), _jsx(motion.div, { initial: { y: -40, opacity: 0 }, whileInView: { y: 0, opacity: 1 }, transition: {
                                            duration: 0.5,
                                            ease: "easeOut"
                                        }, viewport: { amount: 0.05 }, className: "accrodion-content", style: { display: `${isActiveFaq === item.id ? "block" : "none"}` }, children: _jsx("div", { className: "inner", children: _jsxs("p", { children: [" ", item?.description] }) }) })] }, item?.id))) }) })] })] }));
};
export default FaqTwo;
