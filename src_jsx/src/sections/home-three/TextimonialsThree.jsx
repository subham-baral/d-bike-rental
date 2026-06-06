"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
// Images
import taglineShape from '../../assets/images/shapes/section-title-tagline-shape-1.png';
import testi1 from '../../assets/images/testimonial/testimonial-3-1.jpg';
import testi2 from '../../assets/images/testimonial/testimonial-3-2.jpg';
import testi3 from '../../assets/images/testimonial/testimonial-3-3.jpg';
import TextAnimation from '../../components/elements/TextAnimation';
// Data
const testimonialsData = [
    {
        id: 1,
        image: testi1,
        name: 'Alisa Fox',
        role: 'Founder',
        rating: 5,
        text: `I have been using Rentaly for my Car Rental needs for over 5 years now.
        I have never had any problems with their service. Their customer support is
        always responsive and helpful. I would recommend Rentaly to anyone looking
        for a reliable Car Rental provider.`,
    },
    {
        id: 2,
        image: testi2,
        name: 'Robert Son',
        role: 'Founder',
        rating: 5,
        text: `We have been using Rentaly for our trips needs for several years now
        and have always been happy with their service. Their customer support is
        Excellent Service! and they are always available to help with any issues
        we have. Their prices are also very competitive.`,
    },
    {
        id: 3,
        image: testi3,
        name: 'Danil Aarth',
        role: 'Founder',
        rating: 5,
        text: `We have been using Rentaly for our trips needs for several years now
        and have always been happy with their service. Their customer support is
        Excellent Service! and they are always available to help with any issues
        we have. Their prices are also very competitive.`,
    },
];
const TestimonialsThree = () => {
    const [swiperInstance, setSwiperInstance] = useState(null);
    return (_jsx("section", { className: "testimonial-three", children: _jsx("div", { className: "container", children: _jsxs("div", { className: "row", children: [_jsx("div", { className: "col-xl-5 col-lg-5", children: _jsx("div", { className: "testimonial-three__left", children: _jsxs("div", { className: "section-title text-left sec-title-animation animation-style2", children: [_jsxs("div", { className: "section-title__tagline-box", children: [_jsx("div", { className: "section-title__tagline-shape", children: _jsx("img", { src: taglineShape, alt: "Tagline Shape" }) }), _jsx("span", { className: "section-title__tagline", children: "Our Testimonial" })] }), _jsxs("h2", { className: "section-title__title title-animation", children: [_jsx(TextAnimation, { text: 'What Peoples Say' }), _jsx(TextAnimation, { text: 'about Gorent' })] })] }) }) }), _jsx("div", { className: "col-xl-7 col-lg-7", children: _jsx("div", { className: "testimonial-three__right", children: _jsxs("div", { className: "testimonial-three__carousel owl-theme owl-carousel", children: [_jsx(Swiper, { slidesPerView: 2, spaceBetween: 30, loop: true, autoplay: {
                                            delay: 4000,
                                            disableOnInteraction: false,
                                        }, onSwiper: setSwiperInstance, speed: 1000, modules: [Navigation, Autoplay], breakpoints: {
                                            0: { slidesPerView: 1, spaceBetween: 10 },
                                            770: { slidesPerView: 2, spaceBetween: 10 },
                                        }, children: testimonialsData.map((item) => (_jsx(SwiperSlide, { children: _jsxs("div", { className: "item", children: [_jsxs("div", { className: "testimonial-three__single", children: [_jsxs("div", { className: "testimonial-three__img", children: [_jsx("img", { src: item.image, alt: item.name }), _jsx("div", { className: "testimonial-three__rating", children: Array.from({
                                                                            length: item.rating,
                                                                        }).map((_, i) => (_jsx("span", { className: "fas fa-star" }, i))) })] }), _jsx("div", { className: "testimonial-three__client-info", children: _jsxs("div", { className: "testimonial-three__client-content", children: [_jsx("h4", { className: "testimonial-three__client-name", children: _jsx(Link, { href: "/inner/testimonials", children: item.name }) }), _jsx("p", { className: "testimonial-three__client-sub-title", children: item.role })] }) }), _jsx("p", { className: "testimonial-three__text", children: item.text })] }), _jsx("div", { className: "testimonial-three__quote", children: _jsx("span", { className: "icon-quote" }) })] }, item.id) }, item.id))) }), _jsxs("div", { className: "owl-nav", style: { zIndex: '105' }, children: [_jsx("button", { type: "button", className: "owl-prev", onClick: () => swiperInstance?.slidePrev(), children: _jsx("span", { className: "far fa-long-arrow-left" }) }), _jsx("button", { type: "button", className: "owl-next", onClick: () => swiperInstance?.slideNext(), children: _jsx("span", { className: "far fa-long-arrow-right" }) })] })] }) }) })] }) }) }));
};
export default TestimonialsThree;
