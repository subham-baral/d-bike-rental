"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { motion } from "framer-motion";
import { blogData } from '../../all-content/blog/blogData';
import Link from 'next/link';
const BlogMain = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 6;
    // Calculate paginated blogs
    const totalPages = Math.ceil(blogData.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentBlog = blogData.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    // Handle page change
    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages)
            setCurrentPage(page);
    };
    return (_jsx("section", { className: "blog-page", children: _jsx("div", { className: "container", children: _jsxs("div", { className: "row", children: [currentBlog.map((blog) => (_jsx(motion.div, { initial: { y: blog.id % 2 === 0 ? 30 : -30, opacity: 0 }, whileInView: { y: 0, opacity: 1 }, transition: {
                            duration: 0.8,
                            ease: "easeOut"
                        }, viewport: { amount: 0.1, once: true }, className: "col-xl-4 col-lg-4 col-md-6", children: _jsxs("div", { className: "blog-one__single", children: [_jsxs("div", { className: "blog-one__img-box", children: [_jsxs("div", { className: "blog-one__img", children: [_jsx("img", { src: blog.image, alt: blog.title }), _jsx("div", { className: "blog-one__tags", children: _jsx("span", { children: blog.tag }) })] }), _jsxs("div", { className: "blog-one__date", children: [_jsx("p", { children: blog.day }), _jsx("span", { children: blog.month })] })] }), _jsxs("div", { className: "blog-one__content", children: [_jsxs("ul", { className: "blog-one__meta list-unstyled", children: [_jsx("li", { children: _jsxs(Link, { href: blog.link, children: [_jsx("span", { className: "fas fa-user" }), blog.author] }) }), _jsx("li", { children: _jsxs(Link, { href: blog.link, children: [_jsx("span", { className: "fas fa-comments" }), blog.commentsText] }) })] }), _jsx("h3", { className: "blog-one__title", children: _jsx(Link, { href: blog.link, children: blog.title }) }), _jsx("p", { className: "blog-one__text", children: blog.description }), _jsxs(Link, { href: blog.link, className: "blog-one__read-more", children: ["Read More ", _jsx("span", { className: "fas fa-arrow-right" })] })] })] }) }, blog.id))), _jsx("div", { className: "car-listing__pagination", children: _jsxs("ul", { className: "pg-pagination list-unstyled", children: [_jsx("li", { className: "prev", children: _jsx("button", { onClick: (e) => { handlePageChange(currentPage - 1); e.preventDefault(); }, disabled: currentPage === 1, children: _jsx("i", { className: "fas fa-angle-left" }) }) }), Array.from({ length: totalPages }).map((_, index) => (_jsx("li", { className: `count ${currentPage === index + 1 ? "active" : ""}`, children: _jsx("button", { onClick: () => handlePageChange(index + 1), className: "pg-btn", children: index + 1 }) }, (index + 5)))), _jsx("li", { className: "next", children: _jsx("button", { "aria-label": "Next", onClick: (e) => { handlePageChange(currentPage + 1); e.preventDefault(); }, disabled: currentPage === totalPages, children: _jsx("i", { className: "fas fa-angle-right" }) }) })] }) })] }) }) }));
};
export default BlogMain;
