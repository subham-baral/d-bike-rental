"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Link from 'next/link';
import BlogSideBar from './BlogSideBar';
import { blogStandardListData } from '../../all-content/blog/blogData';
const BlogStandardMain = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 3;
    // Calculate paginated blogs
    const totalPages = Math.ceil(blogStandardListData.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentBlog = blogStandardListData.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    // Handle page change
    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages)
            setCurrentPage(page);
    };
    return (_jsx("section", { className: "blog-list", children: _jsx("div", { className: "container", children: _jsxs("div", { className: "row", children: [_jsx("div", { className: "col-xl-8 col-lg-7", children: _jsxs("div", { className: "blog-list__left", children: [currentBlog.map((blog) => (_jsxs("div", { className: "blog-list__single", children: [_jsxs("div", { className: "blog-list__img", children: [_jsx("img", { src: blog?.image, alt: "Image" }), _jsx("div", { className: "blog-list__date", children: _jsxs("p", { children: [blog?.date?.day, _jsx("br", {}), blog?.date?.month] }) })] }), _jsxs("div", { className: "blog-list__content", children: [_jsxs("div", { className: "blog-list__user-and-meta", children: [_jsx("div", { className: "blog-list__user", children: _jsxs("p", { children: [_jsx("span", { className: "icon-user" }), blog?.author] }) }), _jsxs("ul", { className: "blog-list__meta list-unstyled", children: [_jsx("li", { children: _jsxs("a", { href: "#", children: [_jsx("span", { className: "icon-comments" }), "Comments ", `(0${blog?.comments})`] }) }), _jsx("li", { children: _jsxs("a", { href: "#", children: [_jsx("span", { className: "icon-clock" }), blog?.readTime] }) })] })] }), _jsx("h3", { className: "blog-list__title", children: _jsxs(Link, { href: blog?.link, children: [blog?.title, " "] }) }), _jsx("p", { className: "blog-list__text", children: blog?.description }), _jsxs(Link, { href: blog?.link, className: "blog-list__read-more", children: ["Learn More", _jsx("span", { className: "icon-arrow-right" })] })] })] }, blog?.id))), _jsx("div", { className: "car-listing__pagination", children: _jsxs("ul", { className: "pg-pagination list-unstyled", children: [_jsx("li", { className: "prev", children: _jsx("button", { onClick: (e) => { handlePageChange(currentPage - 1); e.preventDefault(); }, disabled: currentPage === 1, children: _jsx("i", { className: "fas fa-angle-left" }) }) }), Array.from({ length: totalPages }).map((_, index) => (_jsx("li", { className: `count ${currentPage === index + 1 ? "active" : ""}`, children: _jsx("button", { onClick: () => handlePageChange(index + 1), className: "pg-btn", children: index + 1 }) }, (index + 8)))), _jsx("li", { className: "next", children: _jsx("button", { "aria-label": "Next", onClick: (e) => { handlePageChange(currentPage + 1); e.preventDefault(); }, disabled: currentPage === totalPages, children: _jsx("i", { className: "fas fa-angle-right" }) }) })] }) })] }) }), _jsx(BlogSideBar, { mainWrapper: 'col-xl-4 col-lg-5', wrapper: 'sidebar' })] }) }) }));
};
export default BlogStandardMain;
