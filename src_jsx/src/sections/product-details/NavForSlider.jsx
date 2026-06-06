"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Autoplay } from "swiper/modules";
import { productsList } from "../../all-content/products/productData";
const NavForSlider = () => {
    const [swiperInstance, setSwiperInstance] = useState(null);
    return (_jsxs("div", { className: "slider-container", children: [_jsxs(Swiper, { modules: [Navigation, Thumbs, Autoplay], onSwiper: setSwiperInstance, autoplay: {
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }, speed: 600, loop: true, spaceBetween: 10, className: "main-swiper", children: [productsList.map((product) => (_jsx(SwiperSlide, { children: _jsx("div", { className: "product-details__img", children: _jsx("img", { src: product?.image, alt: "Image" }) }) }, product.id))), _jsxs("button", { className: "custom-arrow next", onClick: () => swiperInstance?.slideNext(), children: [" ", _jsx("span", { className: "fas fa-angle-right" }), " "] }), _jsxs("button", { className: "custom-arrow prev", onClick: () => swiperInstance?.slidePrev(), children: [" ", _jsx("span", { className: "fas fa-angle-left" }), " "] })] }), _jsx("div", { style: { width: "80%", margin: "0 auto" }, children: _jsx(Swiper, { modules: [Thumbs, Autoplay,], slidesPerView: 2, spaceBetween: 10, watchSlidesProgress: true, autoplay: {
                        delay: 2000,
                        disableOnInteraction: false,
                    }, speed: 600, loop: true, className: "thumb-swiper", breakpoints: {
                        540: {
                            slidesPerView: 3, spaceBetween: 10,
                        }
                    }, children: productsList.map((product) => (_jsx(SwiperSlide, { children: _jsx("div", { className: "product-details__thumb-img", children: _jsx("img", { src: product?.image, alt: "Image" }) }) }, product.id))) }) })] }));
};
export default NavForSlider;
