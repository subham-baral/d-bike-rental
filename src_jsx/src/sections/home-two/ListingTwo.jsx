"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import titleImg from "../../assets/images/shapes/section-title-tagline-shape-1.png";
import TextAnimation from '../../components/elements/TextAnimation';
import { carListTwo } from '../../all-content/listing/ListingData';
const ListingTwo = () => {
    return (_jsxs("section", { className: "listing-two", id: 'cars', children: [_jsxs("div", { className: "section-title text-center sec-title-animation animation-style1", children: [_jsxs("div", { className: "section-title__tagline-box justify-content-center", children: [_jsx("div", { className: "section-title__tagline-shape", children: _jsx("img", { src: titleImg, alt: "Image" }) }), _jsx("span", { className: "section-title__tagline", children: "Checkout our new cars" })] }), _jsx("h2", { className: "section-title__title title-animation", children: _jsx(TextAnimation, { text: 'Explore Most Popular Cars' }) })] }), _jsx("div", { className: "listing-two__carousel owl-theme owl-carousel", children: _jsx(Swiper, { slidesPerView: 1, spaceBetween: 10, loop: true, autoplay: {
                        delay: 4000,
                        disableOnInteraction: false,
                    }, pagination: {
                        clickable: true,
                    }, speed: 1000, modules: [Navigation, Autoplay, Pagination], breakpoints: {
                        668: { slidesPerView: 2, spaceBetween: 0 },
                        792: { slidesPerView: 3, spaceBetween: 0 },
                        1024: { slidesPerView: 4, spaceBetween: 0 },
                        1324: { slidesPerView: 5, spaceBetween: 0 },
                        1624: { slidesPerView: 6, spaceBetween: 0 },
                    }, children: carListTwo.map((car) => (_jsx(SwiperSlide, { children: _jsx("div", { className: "item", children: _jsxs("div", { className: "listing-two__single mx-2 my-3", children: [_jsx("div", { className: "listing-two__img-box", children: _jsx("div", { className: "listing-two__img", children: _jsx("img", { src: car.image, alt: car.title }) }) }), _jsxs("div", { className: "listing-two__content", children: [_jsx("p", { className: "listing-two__sub-title", children: car.category }), _jsx("h3", { className: "listing-two__title", children: _jsx(Link, { href: car.link, children: car.title }) }), _jsxs("div", { className: "listing-two__price-and-btn", children: [_jsxs("div", { className: "listing-two__price-box", children: [_jsx("span", { children: "From" }), _jsx("p", { children: car.price })] }), _jsx("div", { className: "listing-two__btn-box", children: _jsx(Link, { href: car.link, className: "thm-btn", children: "Book Now" }) })] })] })] }) }) }, car.id))) }) })] }));
};
export default ListingTwo;
