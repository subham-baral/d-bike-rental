"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import faqImg from "../../assets/images/resources/faq-one-img-1.jpg";
import sectionShape from "../../assets/images/shapes/section-title-tagline-shape-1.png";
import { faqData } from "../../all-content/faq/faqData";
import { motion } from "framer-motion";
import TextAnimation from "../../components/elements/TextAnimation";
const FaqOne = () => {
    const [isActiveFaq, setIsActiveFaq] = useState(2);
    return (_jsxs("section", { className: "faq-one", children: [_jsx("div", { className: "faq-one__shape-1" }), _jsx("div", { className: "faq-one__shape-2" }), _jsx("div", { className: "container", children: _jsxs("div", { className: "row", children: [_jsx("div", { className: "col-xl-6 col-lg-5", children: _jsxs("div", { className: "faq-one__left", children: [_jsxs("div", { className: "section-title text-left sec-title-animation animation-style2", children: [_jsxs("div", { className: "section-title__tagline-box", children: [_jsx("div", { className: "section-title__tagline-shape", children: _jsx("img", { src: sectionShape, alt: "shape" }) }), _jsx("span", { className: "section-title__tagline", children: "Our Faqs" })] }), _jsxs("h2", { className: "section-title__title title-animation", children: [_jsx(TextAnimation, { text: "Frequently Asking Any" }), _jsx(TextAnimation, { text: "Question" })] })] }), _jsxs(motion.div, { initial: { x: -50, opacity: 0 }, whileInView: { x: 0, opacity: 1 }, transition: {
                                            duration: 0.5,
                                            ease: "easeOut"
                                        }, viewport: { amount: 0.05, once: true }, className: "faq-one__img-box", children: [_jsx("div", { className: "faq-one__img", children: _jsx("img", { src: faqImg, alt: "FAQ" }) }), _jsxs("div", { className: "faq-one__experience-box", children: [_jsx("div", { className: "faq-one__experience-year", children: _jsx("h2", { className: "odometer", "data-count": "55", children: "55" }) }), _jsxs("p", { className: "faq-one__experience-text", children: ["Year of ", _jsx("br", {}), " experience"] })] })] })] }) }), _jsx("div", { className: "col-xl-6 col-lg-7", children: _jsx("div", { className: "faq-one__right", children: _jsx("div", { className: "accrodion-grp faq-one-accrodion", children: faqData.map((item) => (_jsxs(motion.div, { initial: { x: 50, opacity: 0 }, whileInView: { x: 0, opacity: 1 }, transition: {
                                            duration: 0.08 * item.id,
                                            ease: "easeOut"
                                        }, viewport: { amount: 0.05, once: true }, className: `accrodion wow  ${isActiveFaq === item.id ? "active" : ""}`, children: [_jsx("div", { className: "accrodion-title", onClick: () => setIsActiveFaq(item?.id), children: _jsx("h4", { children: item.question }) }), _jsx(motion.div, { initial: { y: -40, opacity: 0 }, whileInView: { y: 0, opacity: 1 }, transition: {
                                                    duration: 0.5,
                                                    ease: "easeOut"
                                                }, viewport: { amount: 0.05 }, className: "accrodion-content", style: { display: `${isActiveFaq === item.id ? "block" : "none"}` }, children: _jsx("div", { className: "inner", children: _jsx("p", { children: item.answer }) }) })] }, item.id))) }) }) })] }) })] }));
};
export default FaqOne;
