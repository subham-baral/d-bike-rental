"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Link from 'next/link';
import { listingData } from '../../all-content/listing/ListingData';
import CarListingRight from './CarListingRight';
const CarListVTwoMain = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 15;
    // Calculate paginated blogs
    const totalPages = Math.ceil(listingData.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentCars = listingData.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    // Handle page change
    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages)
            setCurrentPage(page);
    };
    return (_jsx("section", { className: "car-listing-page-two", children: _jsx("div", { className: "container", children: _jsxs("div", { className: "row", children: [_jsx("div", { className: "col-xl-9", children: _jsxs("div", { className: "car-listing-page-two__left", children: [_jsx("div", { className: "row", children: currentCars.map((item, i) => (_jsx("div", { className: "col-xl-4 col-lg-4 col-md-6", children: _jsxs("div", { className: "listing-two__single", children: [_jsx("div", { className: "listing-two__img-box", children: _jsx("div", { className: "listing-two__img", children: _jsx("img", { src: item?.image, alt: "Image" }) }) }), _jsxs("div", { className: "listing-two__content", children: [_jsx("p", { className: "listing-two__sub-title", children: "economy" }), _jsx("h3", { className: "listing-two__title", children: _jsx(Link, { href: item?.link, children: "Tesla S-Line " }) }), _jsxs("div", { className: "listing-two__price-and-btn", children: [_jsxs("div", { className: "listing-two__price-box", children: [_jsx("span", { children: "From" }), _jsx("p", { children: "$180,00 /day" })] }), _jsx("div", { className: "listing-two__btn-box", children: _jsx(Link, { href: item?.link, className: "thm-btn", children: "Book Now" }) })] })] })] }) }, item?.id || i))) }), _jsx("div", { className: "car-listing__pagination", children: _jsxs("ul", { className: "pg-pagination list-unstyled", children: [_jsx("li", { className: "prev", children: _jsx("button", { onClick: (e) => { handlePageChange(currentPage - 1); e.preventDefault(); }, disabled: currentPage === 1, children: _jsx("i", { className: "fas fa-angle-left" }) }) }), Array.from({ length: totalPages }).map((_, index) => (_jsx("li", { className: `count ${currentPage === index + 1 ? "active" : ""}`, children: _jsx("button", { onClick: () => handlePageChange(index + 1), className: "pg-btn", children: index + 1 }) }, index))), _jsx("li", { className: "next", children: _jsx("button", { "aria-label": "Next", onClick: (e) => { handlePageChange(currentPage + 1); e.preventDefault(); }, disabled: currentPage === totalPages, children: _jsx("i", { className: "fas fa-angle-right" }) }) })] }) })] }) }), _jsx(CarListingRight, {})] }) }) }));
};
export default CarListVTwoMain;
