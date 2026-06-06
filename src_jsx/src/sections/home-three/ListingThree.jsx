"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
// Images
import taglineShape from '../../assets/images/shapes/section-title-tagline-shape-1.png';
import TextAnimation from '../../components/elements/TextAnimation';
import { listingThreeData } from '../../all-content/listing/ListingData';
const ListingThree = () => {
    const [swiperInstance, setSwiperInstance] = useState(null);
    return (_jsx("section", { className: "listing-three", id: 'cars', children: _jsxs("div", { className: "container", children: [_jsxs("div", { className: "section-title text-left sec-title-animation animation-style1", children: [_jsxs("div", { className: "section-title__tagline-box", children: [_jsx("div", { className: "section-title__tagline-shape", children: _jsx("img", { src: taglineShape, alt: "Tagline Shape" }) }), _jsx("span", { className: "section-title__tagline", children: "Checkout our new cars" })] }), _jsx("h2", { className: "section-title__title title-animation", children: _jsx(TextAnimation, { text: 'Explore Most Popular Cars' }) })] }), _jsxs("div", { className: "listing-three__carousel owl-carousel owl-theme", children: [_jsx(Swiper, { slidesPerView: 3, spaceBetween: 30, loop: true, autoplay: {
                                delay: 4000,
                                disableOnInteraction: false,
                            }, onSwiper: setSwiperInstance, speed: 1000, modules: [Navigation, Autoplay], breakpoints: {
                                0: { slidesPerView: 1, spaceBetween: 10 },
                                660: { slidesPerView: 2, spaceBetween: 20 },
                                1024: { slidesPerView: 3, spaceBetween: 30 },
                            }, children: listingThreeData.map((item) => (_jsx(SwiperSlide, { children: _jsx("div", { className: "item", children: _jsxs("div", { className: "listing-three__single", children: [_jsxs("div", { className: "listing-three__img", children: [_jsx("img", { src: item.image, alt: item.title }), _jsx("div", { className: "listing-three__brand-name", children: _jsx("p", { children: item.brand }) })] }), _jsxs("div", { className: "listing-three__content", children: [_jsx("h3", { className: "listing-three__title", children: _jsx(Link, { href: "/inner/listing-single", children: item.title }) }), _jsxs("div", { className: "listing-three__meta-box-info", children: [_jsx("ul", { className: "list-unstyled listing-three__meta", children: item.metaOne.map((m, i) => (_jsxs("li", { children: [_jsx("div", { className: "icon", children: _jsx("span", { className: m.icon }) }), _jsx("div", { className: "text", children: _jsx("p", { children: m.text }) })] }, i))) }), _jsx("ul", { className: "list-unstyled listing-three__meta listing-three__meta--two", children: item.metaTwo.map((m, i) => (_jsxs("li", { children: [_jsx("div", { className: "icon", children: _jsx("span", { className: m.icon }) }), _jsx("div", { className: "text", children: _jsx("p", { children: m.text }) })] }, i))) })] }), _jsxs("div", { className: "listing-three__car-rent-and-btn-box", children: [_jsxs("p", { className: "listing-three__car-rent", children: [_jsxs("span", { children: ["$", item.price, "/"] }), " Day"] }), _jsx("div", { className: "listing-three__btn-box", children: _jsx(Link, { href: "/inner/listing-single", className: "listing-three__btn", children: _jsx("span", { className: "icon-right-arrow-1" }) }) })] })] })] }) }) }, item.id))) }), _jsxs("div", { className: "owl-nav", style: { zIndex: '105' }, children: [_jsx("button", { type: "button", className: "owl-prev", onClick: () => swiperInstance?.slidePrev(), children: _jsx("span", { className: "far fa-long-arrow-left" }) }), _jsx("button", { type: "button", className: "owl-next", onClick: () => swiperInstance?.slideNext(), children: _jsx("span", { className: "far fa-long-arrow-right" }) })] })] })] }) }));
};
export default ListingThree;
