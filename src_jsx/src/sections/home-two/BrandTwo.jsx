"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import brand1 from "../../assets/images/brand/brand-2-1.png";
import brand2 from "../../assets/images/brand/brand-2-2.png";
import brand3 from "../../assets/images/brand/brand-2-3.png";
import brand4 from "../../assets/images/brand/brand-2-4.png";
import brand5 from "../../assets/images/brand/brand-2-5.png";
const brands = [
    { id: 1, image: brand1, link: "#" },
    { id: 2, image: brand2, link: "#" },
    { id: 3, image: brand3, link: "#" },
    { id: 4, image: brand4, link: "#" },
    { id: 5, image: brand5, link: "#" },
];
const BrandTwo = () => {
    return (_jsx("section", { className: "brand-two", children: _jsx("div", { className: "container", children: _jsxs("div", { className: "row align-items-center", children: [_jsx("div", { className: "col-xl-3 col-lg-4 col-md-5", children: _jsx("div", { className: "brand-two__left", children: _jsxs("p", { className: "brand-two__text", children: ["We have ", _jsx("span", { children: "over 250 trusted" }), " ", _jsx("br", {}), "brands worldwide"] }) }) }), _jsx("div", { className: "col-xl-9 col-lg-8 col-md-7", children: _jsx("div", { className: "brand-two__right", children: _jsx("div", { className: "brand-two__carousel owl-theme owl-carousel", children: _jsx(Swiper, { modules: [Autoplay], spaceBetween: 2, slidesPerView: 3, loop: true, autoplay: {
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
                                        993: {
                                            slidesPerView: 3,
                                        },
                                        1200: {
                                            slidesPerView: 4,
                                        },
                                    }, children: brands.map((brand) => (_jsx(SwiperSlide, { children: _jsx("div", { className: "item", children: _jsx("div", { className: "brand-two__single", children: _jsx("div", { className: "brand-two__img", children: _jsx(Link, { href: brand.link, children: _jsx("img", { src: brand.image, alt: "Brand logo" }) }) }) }) }) }, brand.id))) }) }) }) })] }) }) }));
};
export default BrandTwo;
