"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import shapeTitleImg from "../../assets/images/shapes/section-title-tagline-shape-1.png";
import shapeTitleImgTwo from "../../assets/images/shapes/section-title-tagline-shape-2.png";
import Link from 'next/link';
import { motion } from "framer-motion";
import { popularCarData, pricingData } from '../../all-content/pricing/PricingData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import TextAnimation from '../../components/elements/TextAnimation';
const PricingOne = () => {
    return (_jsxs(_Fragment, { children: [_jsxs("section", { className: "pricing-one", children: [_jsx("div", { className: "pricing-one__shape-1" }), _jsx("div", { className: "pricing-one__shape-2" }), _jsxs("div", { className: "container", children: [_jsxs("div", { className: "section-title text-center sec-title-animation animation-style1", children: [_jsxs("div", { className: "section-title__tagline-box justify-content-center", children: [_jsx("div", { className: "section-title__tagline-shape", children: _jsx("img", { src: shapeTitleImg, alt: "Image" }) }), _jsx("span", { className: "section-title__tagline", children: "Pricing & Plan" })] }), _jsxs("h2", { className: "section-title__title title-animation", children: [_jsx(TextAnimation, { text: 'Time Quick and Easy to' }), _jsx(TextAnimation, { text: 'Transportation' })] })] }), _jsx("div", { className: "row", children: pricingData.map((item) => _jsx(motion.div, { initial: { y: item?.id % 2 === 0 ? 50 : -50, opacity: 0 }, whileInView: { y: 0, opacity: 1 }, transition: {
                                        duration: 0.3 * item?.id || 0.5,
                                        ease: "easeOut"
                                    }, viewport: { amount: 0.5, once: true }, className: "col-xl-4 col-lg-6 col-md-6 wow", children: _jsxs("div", { className: "pricing-one__single", children: [_jsxs("div", { className: "pricing-one__title-box", children: [_jsx("h2", { className: "pricing-one__title", children: item?.title }), _jsx("p", { className: "pricing-one__text", children: item?.description })] }), _jsxs("div", { className: "pricing-one__price-and-icon-box", children: [_jsx("div", { className: "pricing-one__price-box", children: _jsxs("h3", { className: "pricing-one__price", children: ["$", item?.price, " ", _jsx("span", { children: item?.duration }), " "] }) }), _jsx("div", { className: "pricing-one__icon-box", children: _jsx("span", { className: `${item?.icon || "icon-taxi"} ` }) })] }), _jsx("ul", { className: "list-unstyled pricing-one__points", children: item.points.map((point, index) => (_jsxs("li", { children: [_jsx("div", { className: "text", children: _jsx("p", { children: point.label }) }), _jsx("div", { className: "price", children: _jsx("p", { children: point.value }) })] }, index))) }), _jsx("div", { className: "pricing-one__btn-box", children: _jsxs(Link, { href: "/inner/pricing", className: "thm-btn", children: ["Rent Now", _jsx("span", { className: "fas fa-arrow-right" })] }) })] }) }, item?.id)) })] })] }), _jsx("section", { className: "call-one", children: _jsx("div", { className: "container", children: _jsx("div", { className: "call-one__inner wow fadeInUp", "data-wow-delay": "300ms", "data-wow-duration": "1500ms", children: _jsxs("div", { className: "call-one__inner-content", children: [_jsx("div", { className: "call-one__bg", children: " " }), _jsxs("div", { className: "call-one__left", children: [_jsx("p", { className: "call-one__sub-title", children: "Available 24/7" }), _jsx("h4", { className: "call-one__title", children: "Call Any Time For Booking" })] }), _jsxs("div", { className: "call-one__details", children: [_jsx("div", { className: "call-one__icon", children: _jsx("span", { className: "icon-call-2" }) }), _jsxs("div", { className: "call-one__content", children: [_jsx("p", { children: "Call Emergency" }), _jsx("h4", { children: _jsx("a", { href: "tel:+9288006780", children: "+92 ( 8800 ) - 6780" }) })] })] }), _jsx("div", { className: "call-one__btn-box", children: _jsxs(Link, { href: "/inner/car-list-v-1", className: "thm-btn", children: ["Rent Now", _jsx("span", { className: "fas fa-arrow-right" })] }) })] }) }) }) }), _jsxs("section", { className: "popular-car-one", children: [_jsx("div", { className: "popular-car-one__bg jarallax" }), _jsxs("div", { className: "container", children: [_jsxs("div", { className: "section-title text-center sec-title-animation animation-style1", children: [_jsxs("div", { className: "section-title__tagline-box justify-content-center", children: [_jsx("div", { className: "section-title__tagline-shape", children: _jsx("img", { src: shapeTitleImgTwo, alt: "Image" }) }), _jsx("span", { className: "section-title__tagline", children: "Popular Car" })] }), _jsx("h2", { className: "section-title__title title-animation", children: _jsx(TextAnimation, { text: 'Most Popular Cartypes' }) })] }), _jsx("div", { className: "popular-car-one__carousel owl-carousel owl-theme", children: _jsx(Swiper, { modules: [Autoplay], spaceBetween: 30, slidesPerView: 5, loop: true, autoplay: {
                                        delay: 4000,
                                        disableOnInteraction: false,
                                        pauseOnMouseEnter: false,
                                    }, speed: 1000, breakpoints: {
                                        0: {
                                            slidesPerView: 1,
                                        },
                                        492: {
                                            slidesPerView: 2,
                                        },
                                        768: {
                                            slidesPerView: 3,
                                        },
                                        1000: {
                                            slidesPerView: 4,
                                        },
                                        1200: {
                                            slidesPerView: 5,
                                        },
                                    }, children: popularCarData.map((item) => _jsx(SwiperSlide, { children: _jsx("div", { className: "item", children: _jsxs("div", { className: "popular-car-one__single", children: [_jsx("div", { className: "popular-car-one__icon", children: _jsx("span", { className: item?.icon }) }), _jsx("div", { className: "popular-car-one__single-inner", children: _jsx("h4", { className: "popular-car-one__title", children: _jsx(Link, { href: item?.link, children: item?.title }) }) }), _jsxs("p", { className: "popular-car-one__count", children: [item?.count, " Cars"] })] }) }) }, item?.id)) }) })] })] })] }));
};
export default PricingOne;
