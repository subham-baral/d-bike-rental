"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import TextAnimation from '../../components/elements/TextAnimation';
import { testimonialData } from '../../all-content/testimonials/testimonialsData';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import { Autoplay, Navigation } from 'swiper/modules';
import sectionTitleShape from "../../assets/images/shapes/section-title-tagline-shape-1.png";
const TestimonialOne = () => {
    const [swiperInstance, setSwiperInstance] = useState(null);
    return (_jsx("section", { className: "testimonial-one", id: 'testimonial', children: _jsxs("div", { className: "container", children: [_jsxs("div", { className: "section-title text-left sec-title-animation animation-style2", children: [_jsxs("div", { className: "section-title__tagline-box", children: [_jsx("div", { className: "section-title__tagline-shape", children: _jsx("img", { src: sectionTitleShape, alt: "Image" }) }), _jsx("span", { className: "section-title__tagline", children: "Our Testimonial" })] }), _jsxs("h2", { className: "section-title__title title-animation", children: [_jsx(TextAnimation, { text: 'What Peoples Say' }), _jsx(TextAnimation, { text: ' about Gorent' })] })] }), _jsxs("div", { className: "testimonial-one__carousel owl-theme owl-carousel", children: [_jsx(Swiper, { slidesPerView: 1, spaceBetween: 30, loop: true, autoplay: {
                                delay: 4000,
                                disableOnInteraction: false,
                            }, onSwiper: setSwiperInstance, speed: 1000, modules: [Navigation, Autoplay], breakpoints: {
                                // 320: { slidesPerView: 1, spaceBetween: 10 },
                                640: { slidesPerView: 2, spaceBetween: 20 },
                                1024: { slidesPerView: 3, spaceBetween: 30 },
                            }, children: testimonialData.map((testimonial) => _jsx(SwiperSlide, { children: _jsx("div", { className: "item", children: _jsxs("div", { className: "testimonial-one__single", children: [_jsxs("div", { className: "testimonial-one__client-info", children: [_jsx("div", { className: "testimonial-one__img", children: _jsx("img", { src: testimonial?.image, alt: "Image" }) }), _jsxs("div", { className: "testimonial-one__content", children: [_jsx("h4", { className: "testimonial-one__client-name", children: _jsx(Link, { href: testimonial?.link, children: testimonial?.name }) }), _jsx("p", { className: "testimonial-one__sub-title", children: testimonial?.role })] })] }), _jsx("p", { className: "testimonial-one__text", children: testimonial?.text }), _jsx("div", { className: "testimonial-one__rating", children: Array.from({ length: testimonial?.rating }).map((_, index) => (_jsx("span", { className: "icon-star" }, index))) }), _jsx("div", { className: "testimonial-one__quote", children: _jsx("span", { className: "icon-quote" }) })] }) }) }, testimonial?.id)) }), _jsxs("div", { className: "owl-nav", children: [_jsx("button", { type: "button", role: "presentation", className: "owl-prev", onClick: () => swiperInstance?.slidePrev(), children: _jsx("span", { className: "far fa-long-arrow-left" }) }), _jsx("button", { type: "button", role: "presentation", className: "owl-next", onClick: () => swiperInstance?.slideNext(), children: _jsx("span", { className: "far fa-long-arrow-right" }) })] })] })] }) }));
};
export default TestimonialOne;
