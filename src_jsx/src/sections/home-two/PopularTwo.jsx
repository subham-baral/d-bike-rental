"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import sectionShape from "../../assets/images/shapes/section-title-tagline-shape-1.png";
import TextAnimation from '../../components/elements/TextAnimation';
const popularCarTypes = [
    {
        id: 1,
        title: "Sedan",
        count: "9 Cars",
        iconClass: "icon-sedan",
        link: "/car-list-v-1",
    },
    {
        id: 2,
        title: "Sports Coupe",
        count: "3 Cars",
        iconClass: "icon-sports-car",
        link: "/car-list-v-2",
    },
    {
        id: 3,
        title: "Crossover",
        count: "5 Cars",
        iconClass: "icon-car-2",
        link: "/car-list-v-3",
    },
    {
        id: 4,
        title: "Pickup",
        count: "8 Cars",
        iconClass: "icon-car-1",
        link: "/cars",
    },
    {
        id: 5,
        title: "Family MPV",
        count: "6 Cars",
        iconClass: "icon-cuv",
        link: "/cars",
    },
    {
        id: 6,
        title: "Pickup",
        count: "7 Cars",
        iconClass: "icon-cuv",
        link: "/cars",
    },
];
const PopularTwo = () => {
    return (_jsx("section", { className: "popular-car-two", children: _jsxs("div", { className: "container", children: [_jsxs("div", { className: "section-title text-center sec-title-animation animation-style1", children: [_jsxs("div", { className: "section-title__tagline-box justify-content-center", children: [_jsx("div", { className: "section-title__tagline-shape", children: _jsx("img", { src: sectionShape, alt: "Image" }) }), _jsx("span", { className: "section-title__tagline", children: "Popular Car" })] }), _jsx("h2", { className: "section-title__title title-animation", children: _jsx(TextAnimation, { text: 'Most Popular Cartypes' }) })] }), _jsx("div", { className: "popular-car-two__carousel owl-carousel owl-theme", children: _jsx(Swiper, { slidesPerView: 1, spaceBetween: 30, loop: true, autoplay: {
                            delay: 4000,
                            disableOnInteraction: false,
                        }, speed: 1000, modules: [Navigation, Autoplay], breakpoints: {
                            492: { slidesPerView: 2, spaceBetween: 10 },
                            768: { slidesPerView: 3, spaceBetween: 20 },
                            1024: { slidesPerView: 4, spaceBetween: 30 },
                        }, children: popularCarTypes.map((item) => (_jsx(SwiperSlide, { children: _jsx("div", { className: "item", children: _jsxs("div", { className: "popular-car-two__single", children: [_jsx("div", { className: "popular-car-two__icon", children: _jsx("span", { className: item.iconClass }) }), _jsxs("div", { className: "popular-car-two__single-inner", children: [_jsx("h4", { className: "popular-car-two__title", children: _jsx(Link, { href: item.link, children: item.title }) }), _jsx("p", { className: "popular-car-two__count", children: item.count })] })] }) }) }, item.id))) }) })] }) }));
};
export default PopularTwo;
