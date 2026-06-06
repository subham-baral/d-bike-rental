"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import CustomSelect from '../../components/elements/CustomSelect';
import ProductGridView from './ProductGridView';
import ProductListView from './ProductListView';
import { productsList } from '../../all-content/products/productData';
const AllProducts = () => {
    const [sortValue, setSortValue] = useState("Sort by popular");
    const [isGrid, setGrid] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 12;
    // Calculate paginated product
    const totalPages = Math.ceil(productsList.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentProducts = productsList.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    // Handle page change
    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages)
            setCurrentPage(page);
    };
    return (_jsx("div", { className: "col-xl-9 col-lg-12", children: _jsxs("div", { className: "product__items", children: [_jsx("div", { className: "row", children: _jsx("div", { className: "col-xl-12", children: _jsxs("div", { className: "product__showing-result", children: [_jsx("div", { className: "product__showing-text-box", children: _jsx("p", { className: "product__showing-text", children: "Showing 1\u201312/14 of 14 results" }) }), _jsx("div", { className: "product__showing-sort", children: _jsx("div", { className: "select-box", children: _jsx(CustomSelect, { optionArray: [
                                                { id: 1, value: `Sort by popular`, label: `Sort by popular` },
                                                { id: 2, value: `Sort by Price`, label: `Sort by Price` },
                                                { id: 3, value: `Sort by Ratings`, label: `Sort by Ratings` },
                                            ], value: sortValue, onChange: (v) => setSortValue(v) }) }) })] }) }) }), _jsxs("div", { className: "product__all", children: [_jsxs("div", { className: "product__all-tab", children: [_jsx("div", { className: "product__all-tab-button", children: _jsxs("ul", { className: "tabs-button-box clearfix", children: [_jsx("li", { className: `tab-btn-item ${isGrid ? 'active-btn-item' : ''}`, onClick: () => setGrid(true), children: _jsx("div", { className: "product__all-tab-button-icon one", children: _jsx("i", { className: "fa fa-solid fa-bars" }) }) }), _jsx("li", { className: `tab-btn-item ${!isGrid ? 'active-btn-item' : ''}`, onClick: () => setGrid(false), children: _jsx("div", { className: "product__all-tab-button-icon", children: _jsx("i", { className: "fa fa-solid fa-list-ul" }) }) })] }) }), _jsx("div", { className: "tabs-content-box", children: _jsx("div", { className: "tab-content-box-item tab-content-box-item-active", children: _jsx("div", { className: "product__all-tab-content-box-item", children: _jsx("div", { className: "product__all-tab-single", children: _jsx("div", { className: "row", children: currentProducts.map((item) => isGrid ? _jsx(ProductGridView, { product: item }, item?.id) : _jsx(ProductListView, { product: item }, item?.id)) }) }) }) }) })] }), _jsxs("ul", { className: "styled-pagination text-center clearfix list-unstyled", children: [_jsx("li", { className: "arrow prev", children: _jsxs("button", { onClick: (e) => { handlePageChange(currentPage - 1); e.preventDefault(); }, disabled: currentPage === 1, children: [_jsx("span", { className: "fas fa-angle-left" }), " "] }) }), Array.from({ length: totalPages }).map((_, index) => (_jsx("li", { className: `count ${currentPage === index + 1 ? "active" : ""}`, children: _jsx("button", { onClick: () => handlePageChange(index + 1), className: "pg-btn", children: index + 1 }) }, index))), _jsx("li", { className: "arrow next", children: _jsx("button", { "aria-label": "Next", onClick: (e) => { handlePageChange(currentPage + 1); e.preventDefault(); }, disabled: currentPage === totalPages, children: _jsx("span", { className: "fas fa-angle-right" }) }) })] })] })] }) }));
};
export default AllProducts;
