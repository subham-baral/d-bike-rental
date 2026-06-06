"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import bgimg1 from '../../assets/images/backgrounds/slider-1-1.jpg';
import bgimg2 from '../../assets/images/backgrounds/slider-1-2.jpg';
import bgimg3 from '../../assets/images/backgrounds/slider-1-3.jpg';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import useGorentContext from '../../components/context/useGorentContext';
const sliderData = [
    {
        id: 1,
        bgImage: bgimg1,
        titleHighlight: "Rental",
        videoUrl: "https://www.youtube.com/watch?v=Get7rqXYrbQ",
    },
    {
        id: 2,
        bgImage: bgimg2,
        titleHighlight: "Booking",
        videoUrl: "https://www.youtube.com/watch?v=Get7rqXYrbQ",
    },
    {
        id: 3,
        bgImage: bgimg3,
        titleHighlight: "Choosing",
        videoUrl: "https://www.youtube.com/watch?v=Get7rqXYrbQ",
    },
];
const BannerOne = () => {
    const { handleVideoClick } = useGorentContext();
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    return (_jsx("section", { className: "main-slider", id: 'home', children: _jsxs("div", { className: "main-slider__carousel owl-carousel owl-theme", children: [_jsx(Swiper, { modules: [Navigation, Autoplay], spaceBetween: 0, slidesPerView: 1, autoplay: {
                        delay: 6000,
                        disableOnInteraction: false,
                    }, loop: true, speed: 1000, onSlideChange: (swiper) => setActiveIndex(swiper.realIndex), onSwiper: setSwiperInstance, children: sliderData.map((item, index) => (_jsx(SwiperSlide, { children: _jsxs("div", { className: `item ${index === activeIndex ? "active" : ""}`, children: [_jsx("div", { className: "main-slider__bg", style: {
                                        backgroundImage: `url(${item.bgImage})`,
                                    } }), _jsx("div", { className: "container", children: _jsxs("div", { className: "main-slider__content", children: [_jsx("div", { className: "main-slider__sub-title-box", children: _jsx("p", { className: "main-slider__sub-title", children: "Your Best" }) }), _jsxs("h2", { className: "main-slider__title", children: ["Car ", _jsx("span", { children: item.titleHighlight })] }), _jsx("p", { className: "main-slider__sub-title-two", children: "Experience" }), _jsxs("div", { className: "main-slider__btn-and-video-box", children: [_jsx("div", { className: "main-slider__btn-box", children: _jsxs(Link, { href: "/inner/about", className: "thm-btn", children: ["Read More", _jsx("span", { className: "fas fa-arrow-right" })] }) }), _jsxs("div", { className: "main-slider__video-link", children: [_jsx(Link, { href: "#", onClick: (e) => handleVideoClick(e, item.videoUrl), className: "video-popup", children: _jsxs("div", { className: "main-slider__video-icon", children: [_jsx("span", { className: "icon-play-2" }), _jsx("i", { className: "ripple" })] }) }), _jsx("h4", { className: "main-slider__video-title", children: "Watch Video" })] })] })] }) })] }) }, item.id))) }), _jsxs("div", { className: "owl-nav", children: [_jsx("button", { onClick: () => swiperInstance?.slidePrev(), type: "button", role: "presentation", className: "owl-prev", children: _jsx("span", { className: "icon-right-arrow-1" }) }), _jsx("button", { onClick: () => swiperInstance?.slideNext(), type: "button", role: "presentation", className: "owl-next", children: _jsx("span", { className: "icon-right-arrow-1" }) })] })] }) }));
};
export default BannerOne;
