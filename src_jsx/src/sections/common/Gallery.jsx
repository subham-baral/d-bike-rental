"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Swiper, SwiperSlide } from 'swiper/react';
import { galleryData } from "../../all-content/gallery/gallaryData";
import { Autoplay } from "swiper/modules";
import Link from 'next/link';
const Gallery = () => {
    return (_jsx("section", { className: "gallery-one", children: _jsx("div", { className: "gallery-one__carousel owl-theme owl-carousel", children: _jsx(Swiper, { modules: [Autoplay], spaceBetween: 0, slidesPerView: 7, loop: true, autoplay: {
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
                        slidesPerView: 4,
                    },
                    1000: {
                        slidesPerView: 6,
                    },
                    1200: {
                        slidesPerView: 7,
                    },
                }, children: galleryData.map((item) => (_jsx(SwiperSlide, { children: _jsx("div", { className: "item", children: _jsx("div", { className: "gallery-one__single", children: _jsxs("div", { className: "gallery-one__img", children: [_jsx("img", { src: item.image, alt: `gallery-${item.id}` }), _jsx(Link, { href: item.link, children: _jsx("span", { className: "fab fa-instagram" }) })] }) }) }, item.id) }, item.id))) }) }) }));
};
export default Gallery;
