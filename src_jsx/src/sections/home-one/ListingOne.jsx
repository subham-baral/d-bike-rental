"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import TextAnimation from '../../components/elements/TextAnimation';
import { listingData } from '../../all-content/listing/ListingData';
import tagline from "../../assets/images/shapes/section-title-tagline-shape-1.png";
const tabButtons = [
    { id: "tesla", title: "Tesla" },
    { id: "honda", title: "Honda" },
    { id: "audi", title: "Audi" },
    { id: "mazda", title: "Mazda" },
    { id: "toyota", title: "Toyota" },
    { id: "acura", title: "Acura" },
];
const ListingOne = () => {
    const [isActiveTab, setIsActiveTab] = useState("tesla");
    const handleTab = (tabId) => {
        setIsActiveTab((prev) => prev !== tabId ? tabId : prev);
    };
    return (_jsx("section", { className: "listing-one", id: 'cars', children: _jsxs("div", { className: "", children: [_jsxs("div", { className: "section-title text-center sec-title-animation animation-style1", children: [_jsxs("div", { className: "section-title__tagline-box justify-content-center", children: [_jsx("div", { className: "section-title__tagline-shape", children: _jsx("img", { src: tagline, alt: "Image tagline" }) }), _jsx("span", { className: "section-title__tagline", children: "Checkout our new cars" })] }), _jsx("h2", { className: "section-title__title title-animation", children: _jsx(TextAnimation, { text: 'Explore Most Popular Cars' }) })] }), _jsxs("div", { className: "listing-one__tab-box listing-one-tabs-box", children: [_jsx("ul", { className: "listing-one-tab-buttons listing-one-tab-btns clearfix list-unstyled", children: tabButtons.map((tab) => (_jsx("li", { className: `p-tab-btn ${tab?.id === isActiveTab ? "active-btn" : ""}`, onClick: () => handleTab(tab?.id), children: _jsx("span", { children: tab.title }) }, tab?.id))) }), _jsx("div", { className: "p-tabs-content", children: _jsx("div", { className: "p-tab active-tab", id: "tesla", children: _jsx("div", { className: "listing-one__inner", children: _jsx("div", { className: "listing-one__carousel owl-carousel owl-theme owl-loaded owl-drag", children: _jsx(Swiper, { slidesPerView: 1, spaceBetween: 30, loop: true, autoplay: {
                                                delay: 4000,
                                                disableOnInteraction: false,
                                            }, pagination: {
                                                clickable: true,
                                            }, speed: 1000, modules: [Navigation, Autoplay, Pagination], breakpoints: {
                                                792: { slidesPerView: 2, spaceBetween: 0 },
                                                1024: { slidesPerView: 3, spaceBetween: 0 },
                                                1324: { slidesPerView: 4, spaceBetween: 0 },
                                                1624: { slidesPerView: 5, spaceBetween: 0 },
                                            }, children: listingData.map((item, i) => _jsxs(SwiperSlide, { children: [" ", _jsx("div", { className: "item", children: _jsxs("div", { className: "listing-one__single MX100", children: [_jsxs("div", { className: "listing-one__img", children: [_jsx("img", { src: item.image, alt: "Image" }), _jsx("div", { className: "listing-one__brand-name", children: _jsx("p", { children: item.brand }) })] }), _jsxs("div", { className: "listing-one__content", children: [_jsx("h3", { className: "listing-one__title", children: _jsx(Link, { href: item?.link || "/listing-single", children: item?.title }) }), _jsxs("div", { className: "listing-one__meta-box-info", children: [_jsxs("ul", { className: "list-unstyled listing-one__meta", children: [_jsxs("li", { children: [_jsx("div", { className: "icon", children: _jsx("span", { className: "icon-manual" }) }), _jsx("div", { className: "text", children: _jsx("p", { children: item?.transmission }) })] }), _jsxs("li", { children: [_jsx("div", { className: "icon", children: _jsx("span", { className: "icon-mileage" }) }), _jsx("div", { className: "text", children: _jsx("p", { children: item?.mileage }) })] }), _jsxs("li", { children: [_jsx("div", { className: "icon", children: _jsx("span", { className: "icon-fuel-type" }) }), _jsx("div", { className: "text", children: _jsx("p", { children: item?.fuel }) })] })] }), _jsxs("ul", { className: "list-unstyled listing-one__meta listing-one__meta--two", children: [_jsxs("li", { children: [_jsx("div", { className: "icon", children: _jsx("span", { className: "icon-test-drive" }) }), _jsx("div", { className: "text", children: _jsx("p", { children: item?.package }) })] }), _jsxs("li", { children: [_jsx("div", { className: "icon", children: _jsx("span", { className: "icon-avatar" }) }), _jsx("div", { className: "text", children: _jsxs("p", { children: ["Age ", item?.minAge] }) })] }), _jsxs("li", { children: [_jsx("div", { className: "icon", children: _jsx("span", { className: "icon-in-person" }) }), _jsx("div", { className: "text", children: _jsxs("p", { children: [item?.persons, " Persons"] }) })] })] })] }), _jsx("div", { className: "listing-one__car-rent-box", children: _jsxs("p", { className: "listing-one__car-rent", children: ["Starting From", _jsxs("span", { children: ["$", item?.pricePerDay || 100, "/"] }), " Day"] }) }), _jsx("div", { className: "listing-one__btn-box", children: _jsxs(Link, { href: item?.link || "/listing-single", className: "thm-btn", children: ["Details Now", _jsx("span", { className: "fas fa-arrow-right" })] }) })] })] }) })] }, item?.id || i)) }) }) }) }) })] })] }) }));
};
export default ListingOne;
