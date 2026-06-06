"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import sliderBg1 from "../../assets/images/backgrounds/slider-2-1.jpg";
import sliderBg2 from "../../assets/images/backgrounds/slider-2-2.jpg";
import sliderBg3 from "../../assets/images/backgrounds/slider-2-3.jpg";
import mainImage1 from "../../assets/images/resources/main-slider-img-1.png";
import mainImage2 from "../../assets/images/resources/main-slider-img-2.png";
import mainImage3 from "../../assets/images/resources/main-slider-img-3.png";
const mainSliderTwoData = [
    {
        id: 1,
        bgImage: sliderBg1,
        mainImage: mainImage1,
        subTitle: "We make finding the right car simple",
        titleStart: "Your Best Car",
        TitleHighlight: "Booking",
        titleEnd: "Your Best Car",
        description: "Lorem ipsum is simply ipun txns mane so dummy text of free available in market the printing and typesetting industry",
    },
    {
        id: 2,
        bgImage: sliderBg2,
        mainImage: mainImage2,
        subTitle: "We make finding the right car simple",
        titleStart: "Find What Are You",
        TitleHighlight: "Looking",
        titleEnd: "For",
        description: "Lorem ipsum is simply ipun txns mane so dummy text of free available in market the printing and typesetting industry",
    },
    {
        id: 3,
        bgImage: sliderBg3,
        mainImage: mainImage3,
        subTitle: "We make finding the right car simple",
        titleStart: "Your Best Car",
        TitleHighlight: "Booking",
        titleEnd: "Experience",
        description: "Lorem ipsum is simply ipun txns mane so dummy text of free available in market the printing and typesetting industry",
    },
];
const BannerTwo = () => {
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    return (_jsx("section", { className: "main-slider-two", id: 'home', children: _jsxs("div", { className: "main-slider-two__carousel owl-carousel owl-theme", children: [_jsx(Swiper, { modules: [Navigation, Autoplay], spaceBetween: 0, slidesPerView: 1, autoplay: {
                        delay: 6000,
                        disableOnInteraction: false,
                    }, loop: true, speed: 1000, onSlideChange: (swiper) => setActiveIndex(swiper.realIndex), onSwiper: setSwiperInstance, children: mainSliderTwoData.map((item, index) => (_jsx(SwiperSlide, { children: _jsxs("div", { className: `item ${index === activeIndex ? "active" : ""}`, children: [_jsx("div", { className: "main-slider-two__bg", style: {
                                        backgroundImage: `url(${item.bgImage})`,
                                    }, children: " " }), _jsx("div", { className: "main-slider-two__overly" }), _jsx("div", { className: "main-slider-two__img", children: _jsx("img", { src: item?.mainImage, alt: "image", className: "float-bob-y" }) }), _jsx("div", { className: "container", children: _jsxs("div", { className: "main-slider-two__content", children: [_jsx("div", { className: "main-slider-two__sub-title-box", children: _jsx("p", { className: "main-slider-two__sub-title", children: item?.subTitle }) }), _jsxs("h2", { className: "main-slider-two__title", children: [item?.titleStart, " ", _jsx("br", {}), " ", _jsx("span", { children: item.TitleHighlight }), " ", item?.titleEnd] }), _jsxs("p", { className: "main-slider-two__text", children: ["Lorem ipsum is simply ipun txns mane so dummy text of free", _jsx("br", {}), "available in market the printing and typesetting industry"] }), _jsxs("div", { className: "main-slider-two__btn-box", children: [_jsxs(Link, { href: "/inner/contact", children: [_jsx("div", { className: "main-slider-two__btn-icon", children: _jsx("i", { className: "fab fa-google-play" }) }), _jsxs("div", { className: "main-slider-two__btn-content", children: [_jsx("p", { children: "Get It On" }), _jsx("h3", { children: "Google Play" })] })] }), _jsxs(Link, { href: "/inner/contact", children: [_jsx("div", { className: "main-slider-two__btn-icon", children: _jsx("i", { className: "fab fa-apple" }) }), _jsxs("div", { className: "main-slider-two__btn-content", children: [_jsx("p", { children: "Download on the" }), _jsx("h3", { children: "App Store" })] })] })] })] }) })] }) }, item.id || index))) }), _jsxs("div", { className: "owl-nav", children: [_jsx("button", { onClick: () => swiperInstance?.slidePrev(), type: "button", role: "presentation", className: "owl-prev", children: _jsx("span", { className: "icon-right-arrow-1" }) }), _jsx("button", { onClick: () => swiperInstance?.slideNext(), type: "button", role: "presentation", className: "owl-next", children: _jsx("span", { className: "icon-right-arrow-1" }) })] })] }) }));
};
export default BannerTwo;
