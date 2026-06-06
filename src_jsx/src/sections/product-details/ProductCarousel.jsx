"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Swiper, SwiperSlide } from 'swiper/react';
import { productsList } from '../../all-content/products/productData';
import Link from 'next/link';
import { Autoplay } from 'swiper/modules';
const ProductCarousel = () => {
    return (_jsx("section", { className: "related-products", children: _jsxs("div", { className: "container", children: [_jsxs("div", { className: "related-products__title", children: [_jsx("h3", { children: "Related Products" }), _jsx("p", { children: "Interdum et malesuada fames ac ante ipsum primis in faucibus." })] }), _jsx("div", { className: "row", children: _jsx("div", { className: "related-products__carousel owl-carousel owl-theme owl-dot-style1", children: _jsx(Swiper, { modules: [Autoplay], spaceBetween: 30, slidesPerView: 1, loop: true, autoplay: {
                                delay: 4000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: false,
                            }, speed: 1000, breakpoints: {
                                768: {
                                    slidesPerView: 2,
                                },
                                992: {
                                    slidesPerView: 3,
                                },
                                1320: {
                                    slidesPerView: 4,
                                },
                            }, children: productsList.map((product) => (_jsx(SwiperSlide, { children: _jsxs("div", { className: "single-product-style1 instyle--2", children: [_jsxs("div", { className: "single-product-style1__img", children: [_jsx("img", { src: product?.image, alt: "Image" }), _jsx("img", { src: product?.image, alt: "Image" }), product?.isNew || product?.discouunt
                                                    ?
                                                        (_jsx("ul", { className: "single-product-style1__overlay", children: product?.isNew && product?.discouunt ? _jsxs(_Fragment, { children: [_jsx("li", { children: _jsx("p", { children: "New" }) }), _jsx("li", { children: _jsxs("p", { children: [product?.discouunt, "% Off"] }) })] }) : _jsx("li", { children: _jsx("p", { children: product?.isNew ? "New" : `${product?.discouunt}% Off` }) }) }))
                                                    :
                                                        "", _jsxs("ul", { className: "single-product-style1__info", children: [_jsx("li", { children: _jsx("a", { href: "#", title: "Add to Wishlist", children: _jsx("i", { className: "fa fa-regular fa-heart" }) }) }), _jsx("li", { children: _jsx("a", { href: "#", title: "Add to cart", children: _jsx("i", { className: "fa fa-solid fa-cart-plus" }) }) }), _jsx("li", { children: _jsx("a", { href: "#", title: "Quick View", children: _jsx("i", { className: "fa fa-regular fa-eye" }) }) }), _jsx("li", { children: _jsx("a", { href: "#", title: "Compare", children: _jsx("i", { className: "fa fa-solid fa-repeat" }) }) })] })] }), _jsxs("div", { className: "single-product-style1__content", children: [_jsxs("div", { className: "single-product-style1__content-left", children: [_jsx("h4", { children: _jsx(Link, { href: "/inner/product-details", children: product?.title }) }), product?.previousPrice ? _jsxs("p", { children: [_jsxs("del", { children: ["$", product?.previousPrice, ".00"] }), " $", product?.price, ".00"] }) : _jsxs("p", { children: ["$", product?.price, ".00"] })] }), _jsx("div", { className: "single-product-style1__content-right", children: _jsxs("div", { className: "single-product-style1__review", children: [_jsx("i", { className: "fa fa-star" }), _jsx("p", { children: product?.rating })] }) })] })] }) }, product.id))) }) }) })] }) }));
};
export default ProductCarousel;
