"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import sectionShape from "../../assets/images/shapes/section-title-tagline-shape-1.png";
import { blogData } from "../../all-content/blog/blogData";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import TextAnimation from "../../components/elements/TextAnimation";
import Link from 'next/link';
const BlogOne = () => {
    const [swiperInstance, setSwiperInstance] = useState(null);
    return (_jsxs("section", { className: "blog-one", id: "blog", children: [_jsx("div", { className: "blog-one__shape-1" }), _jsx("div", { className: "blog-one__shape-2" }), _jsxs("div", { className: "container", children: [_jsxs("div", { className: "section-title text-left sec-title-animation animation-style2", children: [_jsxs("div", { className: "section-title__tagline-box", children: [_jsx("div", { className: "section-title__tagline-shape", children: _jsx("img", { src: sectionShape, alt: "shape" }) }), _jsx("span", { className: "section-title__tagline", children: "Our Blog" })] }), _jsx("h2", { className: "section-title__title title-animation", children: _jsx(TextAnimation, { text: "Our Latest Blog" }) })] }), _jsxs("div", { className: "blog-one__carousel owl-carousel owl-theme owl-loaded owl-drag", children: [_jsx(Swiper, { slidesPerView: 3, spaceBetween: 30, loop: true, autoplay: {
                                    delay: 4000,
                                    disableOnInteraction: false,
                                }, onSwiper: setSwiperInstance, speed: 1000, modules: [Navigation, Autoplay], breakpoints: {
                                    0: { slidesPerView: 1, spaceBetween: 10 },
                                    640: { slidesPerView: 2, spaceBetween: 20 },
                                    1024: { slidesPerView: 3, spaceBetween: 30 },
                                }, children: blogData.map((blog) => (_jsx(SwiperSlide, { children: _jsx("div", { className: "item", children: _jsxs("div", { className: "blog-one__single", children: [_jsxs("div", { className: "blog-one__img-box", children: [_jsxs("div", { className: "blog-one__img", children: [_jsx("img", { src: blog.image, alt: blog.title }), _jsx("div", { className: "blog-one__tags", children: _jsx("span", { children: blog.tag }) })] }), _jsxs("div", { className: "blog-one__date", children: [_jsx("p", { children: blog.day }), _jsx("span", { children: blog.month })] })] }), _jsxs("div", { className: "blog-one__content", children: [_jsxs("ul", { className: "blog-one__meta list-unstyled", children: [_jsx("li", { children: _jsxs(Link, { href: blog.link, children: [_jsx("span", { className: "fas fa-user" }), blog.author] }) }), _jsx("li", { children: _jsxs(Link, { href: blog.link, children: [_jsx("span", { className: "fas fa-comments" }), blog.commentsText] }) })] }), _jsx("h3", { className: "blog-one__title", children: _jsx(Link, { href: blog.link, children: blog.title }) }), _jsx("p", { className: "blog-one__text", children: blog.description }), _jsxs(Link, { href: blog.link, className: "blog-one__read-more", children: ["Read More ", _jsx("span", { className: "fas fa-arrow-right" })] })] })] }) }) }, blog.id))) }), _jsxs("div", { className: "owl-nav", style: { zIndex: '105' }, children: [_jsx("button", { type: "button", className: "owl-prev", onClick: () => swiperInstance?.slidePrev(), children: _jsx("span", { className: "far fa-long-arrow-left" }) }), _jsx("button", { type: "button", className: "owl-next", onClick: () => swiperInstance?.slideNext(), children: _jsx("span", { className: "far fa-long-arrow-right" }) })] })] })] })] }));
};
export default BlogOne;
