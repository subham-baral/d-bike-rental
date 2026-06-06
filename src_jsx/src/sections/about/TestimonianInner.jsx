"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import Link from 'next/link';
import shape1 from "../../assets/images/shapes/testimonial-two-shape-1.png";
import shape2 from "../../assets/images/shapes/testimonial-two-shape-2.png";
import sectionShape from "../../assets/images/shapes/section-title-tagline-shape-1.png";
import TextAnimation from "../../components/elements/TextAnimation";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { testimonialsTwo } from "../../all-content/testimonials/testimonialsData";
const TestimonianInner = () => {
    const [swiperInstance, setSwiperInstance] = useState(null);
    return (_jsxs("section", { className: "testimonial-two", children: [_jsx("div", { className: "testimonial-two__shape-1 float-bob-y", children: _jsx("img", { src: shape1, alt: "image" }) }), _jsx("div", { className: "testimonial-two__shape-2 float-bob-x", children: _jsx("img", { src: shape2, alt: "image" }) }), _jsxs("div", { className: "container", children: [_jsxs("div", { className: "section-title text-left sec-title-animation animation-style2", children: [_jsxs("div", { className: "section-title__tagline-box", children: [_jsx("div", { className: "section-title__tagline-shape", children: _jsx("img", { src: sectionShape, alt: "image" }) }), _jsx("span", { className: "section-title__tagline", children: "Testimonials" })] }), _jsxs("h2", { className: "section-title__title title-animation", children: [_jsx(TextAnimation, { text: "What Peoples Say" }), _jsx(TextAnimation, { text: "about Gorent" })] })] }), _jsxs("div", { className: "testimonial-two__carousel owl-carousel owl-theme", children: [_jsx(Swiper, { slidesPerView: 3, spaceBetween: 30, loop: true, autoplay: {
                                    delay: 4000,
                                    disableOnInteraction: false,
                                }, onSwiper: setSwiperInstance, speed: 1000, modules: [Navigation, Autoplay], breakpoints: {
                                    320: { slidesPerView: 1, spaceBetween: 10 },
                                    640: { slidesPerView: 2, spaceBetween: 20 },
                                    1024: { slidesPerView: 3, spaceBetween: 30 },
                                }, children: testimonialsTwo.map((item) => (_jsx(SwiperSlide, { children: _jsx("div", { className: "item", children: _jsxs("div", { className: "testimonial-two__single", children: [_jsx("div", { className: "testimonial-two__quote", children: _jsx("span", { className: "icon-quote" }) }), _jsx("div", { className: "testimonial-two__img", children: _jsx("img", { src: item.image, alt: item.name }) }), _jsx("p", { className: "testimonial-two__text", children: item.text }), _jsxs("div", { className: "testimonial-two__client-info", children: [_jsxs("div", { className: "testimonial-two__client-content", children: [_jsx("h4", { className: "testimonial-two__client-name", children: _jsx(Link, { href: item.link, children: item.name }) }), _jsx("p", { className: "testimonial-two__client-sub-title", children: item.role })] }), _jsx("div", { className: "testimonial-two__rating", children: [...Array(5)].map((_, i) => (_jsx("span", { className: "icon-star" }, (i + 50)))) })] })] }) }) }, item.id))) }), _jsxs("div", { className: "owl-nav", style: { zIndex: '105' }, children: [_jsx("button", { type: "button", className: "owl-prev rotate180", onClick: () => swiperInstance?.slidePrev(), children: _jsx("span", { className: "far fa-long-arrow-left" }) }), _jsx("button", { type: "button", className: "owl-next", onClick: () => swiperInstance?.slideNext(), children: _jsx("span", { className: "far fa-long-arrow-right" }) })] })] })] })] }));
};
export default TestimonianInner;
