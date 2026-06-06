"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
// section title shape
import sectionTitleShape from "../../assets/images/shapes/section-title-tagline-shape-1.png";
import TextAnimation from "../../components/elements/TextAnimation";
import { processSteps } from "../../all-content/process/processData";
const ProcessOne = () => {
    return (_jsx("section", { className: "process-one", children: _jsxs("div", { className: "container", children: [_jsxs("div", { className: "section-title text-center sec-title-animation animation-style2", children: [_jsxs("div", { className: "section-title__tagline-box justify-content-center", children: [_jsx("div", { className: "section-title__tagline-shape", children: _jsx("img", { src: sectionTitleShape, alt: "shape" }) }), _jsx("span", { className: "section-title__tagline", children: "Steps" })] }), _jsx("h2", { className: "section-title__title title-animation", children: _jsx(TextAnimation, { text: "Car Rental Process" }) })] }), _jsx("div", { className: "row", children: processSteps.map((step, i) => (_jsx(motion.div, { initial: { y: 80, opacity: 0 }, whileInView: { y: 0, opacity: 1 }, transition: {
                            duration: 0.3 * i,
                            ease: "easeOut"
                        }, viewport: { amount: 0.01, once: true }, className: `col-xl-3 col-lg-6 col-md-6 wow `, children: _jsxs("div", { className: "process-one__single", children: [_jsx("div", { className: "process-one__single-bg", style: { backgroundImage: `url(${step.bg})` } }), _jsxs("div", { className: "process-one__icon-box", children: [_jsx("div", { className: "process-one__icon-shape" }), _jsx("div", { className: "process-one__icon", children: _jsx("span", { className: step.icon }) }), _jsx("div", { className: "process-one__count" })] }), _jsx("h3", { className: "process-one__title", children: step.title }), _jsx("p", { className: "process-one__text", children: step.description })] }) }, step.id))) })] }) }));
};
export default ProcessOne;
