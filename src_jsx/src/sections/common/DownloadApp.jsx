"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import Link from 'next/link';
import Icon1 from "../../assets/images/icon/download-app-img1.png";
import Icon2 from "../../assets/images/icon/download-app-img2.png";
import DownloadAppImg from "../../assets/images/resources/download-app-img-1.png";
import DownloadAppImg2 from "../../assets/images/resources/download-app-car-img-1.png";
import TextAnimation from '../../components/elements/TextAnimation';
const DownloadApp = () => {
    return (_jsxs("section", { className: "download-app-one", children: [_jsx("div", { className: "download-app-one__bg " }), _jsx("div", { className: "container", children: _jsx("div", { className: "download-app-one__inner", children: _jsxs("div", { className: "row", children: [_jsx("div", { className: "col-xl-7 col-lg-7", children: _jsxs("div", { className: "download-app-one__content sec-title-animation animation-style2", children: [_jsx("p", { className: "download-app-one__sub-title", children: "Download Our App" }), _jsxs("h2", { className: "download-app-one__title title-animation", children: [_jsx(TextAnimation, { text: 'Gorent User Friendly' }), _jsx(TextAnimation, { text: 'App Available' })] }), _jsx("p", { className: "download-app-one__text", children: "Get our mobile app for easy and convenient usage" }), _jsxs("div", { className: "download-app-one__google-and-app-store", children: [_jsx(Link, { href: "/inner/contact", children: _jsx("img", { src: Icon1, alt: "Image" }) }), _jsx(Link, { href: "/inner/contact", children: _jsx("img", { src: Icon2, alt: "Image" }) })] })] }) }), _jsx("div", { className: "col-xl-5 col-lg-5", children: _jsxs(motion.div, { initial: { x: 100, opacity: 0 }, whileInView: { x: 0, opacity: 1 }, transition: {
                                        duration: 1,
                                        ease: "easeOut"
                                    }, viewport: { amount: 0.1, once: true }, className: "download-app-one__right", children: [_jsx("div", { className: "download-app-one__img", children: _jsx("div", { className: "download-app-one__img1", children: _jsx("img", { src: DownloadAppImg, alt: "Image" }) }) }), _jsx("div", { className: "download-app-one-car__img float-bob-x", children: _jsx("img", { src: DownloadAppImg2, alt: "Image" }) })] }) })] }) }) })] }));
};
export default DownloadApp;
