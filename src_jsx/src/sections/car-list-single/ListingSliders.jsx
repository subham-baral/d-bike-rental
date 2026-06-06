"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import mainSlideImg1 from "../../assets/images/listing/listing-single-1-1.jpg";
import mainSlideImg2 from "../../assets/images/listing/listing-single-1-2.jpg";
import mainSlideImg3 from "../../assets/images/listing/listing-single-1-3.jpg";
import thambImg1 from "../../assets/images/listing/listing-single-thamb-1-1.jpg";
import thambImg2 from "../../assets/images/listing/listing-single-thamb-1-2.jpg";
import thambImg3 from "../../assets/images/listing/listing-single-thamb-1-3.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import Link from 'next/link';
import useGorentContext from '../../components/context/useGorentContext';
const thambList = [
    { id: 1, img: thambImg1 },
    { id: 2, img: thambImg2 },
    { id: 3, img: thambImg3 },
    { id: 4, img: thambImg2 },
    { id: 5, img: thambImg3 },
];
const mainSliderData = [
    {
        id: 1,
        title: `2025 Toyota Corolla Preview What's Coming Next Car`,
        image: mainSlideImg1,
        description: `The Toyota Corolla Hybrid is the
        high-performance version of the 2 Series 2-door coupé. The first generation of
        the M2 is the F87 coupé and is powered by turbocharged.`,
        videoUrl: `https://www.youtube.com/watch?v=Get7rqXYrbQ`,
        lists: [
            { icon: "fas fa-map-marker-alt", text: "Las Vegas, USA" },
            { icon: "fas fa-map-marked-alt", text: "Show on map" },
            { icon: "fas fa-map", text: "Las Vegas, USA", modle: `BMW-4525` },
        ]
    },
    {
        id: 2,
        title: `2025 Toyota Corolla Preview What's Coming Next Car`,
        image: mainSlideImg2,
        description: `The Toyota Corolla Hybrid is the
        high-performance version of the 2 Series 2-door coupé. The first generation of
        the M2 is the F87 coupé and is powered by turbocharged.`,
        videoUrl: `https://www.youtube.com/watch?v=Get7rqXYrbQ`,
        lists: [
            { icon: "fas fa-map-marker-alt", text: "Las Vegas, USA" },
            { icon: "fas fa-map-marked-alt", text: "Show on map" },
            { icon: "fas fa-map", text: "Las Vegas, USA", modle: `BMW-4525` },
        ]
    },
    {
        id: 3,
        title: `2025 Toyota Corolla Preview What's Coming Next Car`,
        image: mainSlideImg3,
        description: `The Toyota Corolla Hybrid is the
        high-performance version of the 2 Series 2-door coupé. The first generation of
        the M2 is the F87 coupé and is powered by turbocharged.`,
        videoUrl: `https://www.youtube.com/watch?v=Get7rqXYrbQ`,
        lists: [
            { icon: "fas fa-map-marker-alt", text: "Las Vegas, USA" },
            { icon: "fas fa-map-marked-alt", text: "Show on map" },
            { icon: "fas fa-map", text: "Las Vegas, USA", modle: `BMW-4525` },
        ]
    },
];
const ListingSliders = () => {
    const { handleVideoClick } = useGorentContext();
    const [swiperInstance, setSwiperInstance] = useState(null);
    return (_jsxs("div", { className: "listing-single__inner", children: [_jsxs("div", { className: "listing-single__main-content", children: [_jsx("div", { className: "swiper-container", id: "listing-single__carousel", children: _jsx("div", { className: "swiper-wrapper", children: _jsx(Swiper, { slidesPerView: 1, spaceBetween: 30, loop: true, autoplay: {
                                    delay: 4000,
                                    disableOnInteraction: false,
                                }, speed: 1000, modules: [Navigation, Autoplay], onSwiper: setSwiperInstance, children: mainSliderData.map((item) => (_jsx(SwiperSlide, { children: _jsx("div", { className: "swiper-slide", children: _jsx("div", { className: "listing-single__main-content-inner", children: _jsxs("div", { className: "row", children: [_jsx("div", { className: "col-xl-5 col-lg-5", children: _jsx("div", { className: "listing-single__left", children: _jsx("div", { className: "listing-single__img", children: _jsx("img", { src: item?.image, alt: "Image" }) }) }) }), _jsx("div", { className: "col-xl-7 col-lg-7", children: _jsxs("div", { className: "listing-single__right", children: [_jsx("h3", { className: "listing-single__title-two", children: item?.title }), _jsx("p", { className: "listing-single__text", children: item?.description }), _jsx("ul", { className: "list-unstyled listing-single__meta", children: item?.lists.map((list, i) => (_jsxs("li", { children: [_jsx("div", { className: "icon", children: _jsx("span", { className: list?.icon }) }), _jsx("div", { className: "text", children: list?.modle ? _jsxs("p", { children: [list?.text, _jsx("a", { href: "#", children: _jsx("span", { children: list?.modle }) })] }) : _jsx("p", { children: list?.text }) })] }, (i + i)))) }), _jsxs("div", { className: "listing-single__btn-and-video-box", children: [_jsx("div", { className: "listing-single__btn-box", children: _jsxs(Link, { href: "/inner/cars", className: "thm-btn", children: ["See All Photo", _jsx("span", { className: "fas fa-arrow-right" })] }) }), _jsxs("div", { className: "listing-single__video-link", children: [_jsx("a", { href: "#", className: "video-popup", onClick: (e) => handleVideoClick(e, item?.videoUrl), children: _jsxs("div", { className: "listing-single__video-icon", children: [_jsx("span", { className: "icon-play-2" }), _jsx("i", { className: "ripple" })] }) }), _jsx("h4", { className: "listing-single__video-title", children: "Watch Video" })] })] })] }) })] }) }) }) }, item?.id))) }) }) }), _jsxs("div", { className: "listing-single__nav", children: [_jsx("div", { className: "swiper-button-next", id: "listing-single__swiper-button-prev", onClick: () => swiperInstance?.slidePrev(), children: _jsx("i", { className: "far fa-long-arrow-left" }) }), _jsx("div", { className: "swiper-button-prev", id: "listing-single__swiper-button-next", onClick: () => swiperInstance?.slideNext(), children: _jsx("i", { className: "far fa-long-arrow-right" }) })] })] }), _jsx("div", { className: "listing-single__thumb-box", children: _jsx("div", { className: "swiper-container", id: "listing-single__thumb", children: _jsx("div", { className: "swiper-wrapper", children: _jsx(Swiper, { direction: "vertical", slidesPerView: 3, spaceBetween: 5, loop: true, speed: 1000, autoplay: {
                                delay: 4000,
                                disableOnInteraction: false,
                            }, modules: [Autoplay], children: thambList.map((item) => (_jsx(SwiperSlide, { children: _jsx("div", { className: "swiper-slide", children: _jsx("div", { className: "listing-single__img-holder-box", children: _jsx("div", { className: "listing-single__img-holder", children: _jsx("img", { src: item?.img, alt: "Image" }) }) }) }) }, item?.id))) }) }) }) })] }));
};
export default ListingSliders;
