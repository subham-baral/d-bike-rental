"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import resentPostImg from "../../assets/images/blog/recent-post-img-1.jpg";
import resentPostImg2 from "../../assets/images/blog/recent-post-img-2.jpg";
import resentPostImg3 from "../../assets/images/blog/recent-post-img-3.jpg";
const BlogSideBar = ({ mainWrapper, wrapper }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const search = form.search.value;
        if (search) {
            form.reset();
        }
        ;
    };
    return (_jsx("div", { className: mainWrapper, children: _jsxs("div", { className: wrapper, children: [_jsx(motion.div, { initial: { y: 30, opacity: 0 }, whileInView: { y: 0, opacity: 1 }, transition: {
                        duration: 1.2,
                        ease: "easeOut"
                    }, viewport: { amount: 0.05, once: true }, className: "sidebar__single sidebar__search", children: _jsxs("form", { onSubmit: handleSubmit, className: "sidebar__search-form", children: [_jsx("input", { type: "search", name: 'search', placeholder: "Search..." }), _jsx("button", { type: "submit", children: _jsx("i", { className: "fa fa-search" }) })] }) }), _jsxs(motion.div, { initial: { y: 50, opacity: 0 }, whileInView: { y: 0, opacity: 1 }, transition: {
                        duration: 0.8,
                        ease: "easeOut"
                    }, viewport: { amount: 0.5, once: true }, className: "sidebar__single sidebar__category", children: [_jsx("h3", { className: "sidebar__title", children: "Categories" }), _jsxs("ul", { className: "sidebar__category-list list-unstyled", children: [_jsx("li", { children: _jsxs("a", { href: "#", children: ["Corporate car rental ", _jsx("span", { children: "(12)" })] }) }), _jsx("li", { className: "active", children: _jsxs("a", { href: "#", children: ["Parallax Effect", _jsx("span", { children: "(15)" })] }) }), _jsx("li", { children: _jsxs("a", { href: "#", children: ["Car rental with driver ", _jsx("span", { children: "(08)" })] }) }), _jsx("li", { children: _jsxs("a", { href: "#", children: ["Airport transfer ", _jsx("span", { children: "(20)" })] }) }), _jsx("li", { children: _jsxs("a", { href: "#", children: ["Fleet leasing ", _jsx("span", { children: "(14)" })] }) }), _jsx("li", { children: _jsxs("a", { href: "#", children: ["Pick-Up Locations ", _jsx("span", { children: "(05)" })] }) })] })] }), _jsxs(motion.div, { initial: { y: 50, opacity: 0 }, whileInView: { y: 0, opacity: 1 }, transition: {
                        duration: 0.8,
                        ease: "easeOut"
                    }, viewport: { amount: 0.5, once: true }, className: "sidebar__single sidebar__post", children: [_jsx("h3", { className: "sidebar__title", children: "Recent Post" }), _jsxs("div", { className: "sidebar__post-box", children: [_jsxs("div", { className: "sidebar__post-single", children: [_jsx("div", { className: "sidebar-post__img", children: _jsx("img", { src: resentPostImg, alt: "Image" }) }), _jsx("div", { className: "sidebar__post-content-box", children: _jsx("h3", { children: _jsx("a", { href: "#", children: "Regular maintenance cleaning or replacing air filters" }) }) })] }), _jsxs("div", { className: "sidebar__post-single", children: [_jsx("div", { className: "sidebar-post__img", children: _jsx("img", { src: resentPostImg2, alt: "Image" }) }), _jsx("div", { className: "sidebar__post-content-box", children: _jsx("h3", { children: _jsx("a", { href: "#", children: "Water leakage can be due to a clogged drain line repaire" }) }) })] }), _jsxs("div", { className: "sidebar__post-single", children: [_jsx("div", { className: "sidebar-post__img", children: _jsx("img", { src: resentPostImg3, alt: "Image" }) }), _jsx("div", { className: "sidebar__post-content-box", children: _jsx("h3", { children: _jsx("a", { href: "#", children: "Revitalising your people in to a retail downturn." }) }) })] })] })] }), _jsxs(motion.div, { initial: { y: 50, opacity: 0 }, whileInView: { y: 0, opacity: 1 }, transition: {
                        duration: 0.8,
                        ease: "easeOut"
                    }, viewport: { amount: 0.5, once: true }, className: "sidebar__single sidebar__tags", children: [_jsx("h3", { className: "sidebar__title", children: "Tags Cloud" }), _jsxs("ul", { className: "sidebar__tags-list clearfix list-unstyled", children: [_jsx("li", { children: _jsx("a", { href: "#", children: "Growth Accelerator" }) }), _jsx("li", { children: _jsx("a", { href: "#", children: "Management" }) }), _jsx("li", { children: _jsx("a", { href: "#", children: "Analysis" }) }), _jsx("li", { children: _jsx("a", { href: "#", children: "Planning" }) }), _jsx("li", { children: _jsx("a", { href: "#", children: "Solution" }) }), _jsx("li", { children: _jsx("a", { href: "#", children: "Advisory Service" }) })] })] })] }) }));
};
export default BlogSideBar;
