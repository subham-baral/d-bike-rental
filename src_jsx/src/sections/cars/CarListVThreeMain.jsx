"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Link from 'next/link';
import { listingThreeData } from '../../all-content/listing/ListingData';
import CarListingRight from './CarListingRight';
const CarListVThreeMain = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 8;
    // Calculate paginated blogs
    const totalPages = Math.ceil(listingThreeData.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentCars = listingThreeData.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    // Handle page change
    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages)
            setCurrentPage(page);
    };
    return (_jsx("section", { className: "car-listing-page-three", children: _jsx("div", { className: "container", children: _jsxs("div", { className: "row", children: [_jsx("div", { className: "col-xl-9", children: _jsxs("div", { className: "car-listing-page-three__left", children: [_jsx("div", { className: "row", children: currentCars.map((item) => (_jsx("div", { className: "col-xl-6 col-lg-6 col-md-6", children: _jsxs("div", { className: "listing-three__single", children: [_jsxs("div", { className: "listing-three__img", children: [_jsx("img", { src: item.image, alt: item.title }), _jsx("div", { className: "listing-three__brand-name", children: _jsx("p", { children: item.brand }) })] }), _jsxs("div", { className: "listing-three__content", children: [_jsx("h3", { className: "listing-three__title", children: _jsx(Link, { href: "/inner/listing-single", children: item.title }) }), _jsxs("div", { className: "listing-three__meta-box-info", children: [_jsx("ul", { className: "list-unstyled listing-three__meta", children: item.metaOne.map((m, i) => (_jsxs("li", { children: [_jsx("div", { className: "icon", children: _jsx("span", { className: m.icon }) }), _jsx("div", { className: "text", children: _jsx("p", { children: m.text }) })] }, (i + 47)))) }), _jsx("ul", { className: "list-unstyled listing-three__meta listing-three__meta--two", children: item.metaTwo.map((m, i) => (_jsxs("li", { children: [_jsx("div", { className: "icon", children: _jsx("span", { className: m.icon }) }), _jsx("div", { className: "text", children: _jsx("p", { children: m.text }) })] }, (i + 66)))) })] }), _jsxs("div", { className: "listing-three__car-rent-and-btn-box", children: [_jsxs("p", { className: "listing-three__car-rent", children: [_jsxs("span", { children: ["$", item.price, "/"] }), " Day"] }), _jsx("div", { className: "listing-three__btn-box", children: _jsx(Link, { href: "/inner/listing-single", className: "listing-three__btn", children: _jsx("span", { className: "icon-right-arrow-1" }) }) })] })] })] }) }, item?.id))) }), _jsx("div", { className: "car-listing__pagination", children: _jsxs("ul", { className: "pg-pagination list-unstyled", children: [_jsx("li", { className: "prev", children: _jsx("button", { onClick: (e) => { handlePageChange(currentPage - 1); e.preventDefault(); }, disabled: currentPage === 1, children: _jsx("i", { className: "fas fa-angle-left" }) }) }), Array.from({ length: totalPages }).map((_, index) => (_jsx("li", { className: `count ${currentPage === index + 1 ? "active" : ""}`, children: _jsx("button", { onClick: () => handlePageChange(index + 1), className: "pg-btn", children: index + 1 }) }, index))), _jsx("li", { className: "next", children: _jsx("button", { "aria-label": "Next", onClick: (e) => { handlePageChange(currentPage + 1); e.preventDefault(); }, disabled: currentPage === totalPages, children: _jsx("i", { className: "fas fa-angle-right" }) }) })] }) })] }) }), _jsx(CarListingRight, {})] }) }) }));
};
export default CarListVThreeMain;
