"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import Link from 'next/link';
/* =======================
   Image Imports (TOP)
======================= */
import wishlistImg1 from "../../assets/images/shop/wishlist-page-img-1.jpg";
import wishlistImg2 from "../../assets/images/shop/wishlist-page-img-2.jpg";
import wishlistImg3 from "../../assets/images/shop/wishlist-page-img-3.jpg";
import wishlistImg4 from "../../assets/images/shop/wishlist-page-img-4.jpg";
/* =======================
   Data Array
======================= */
const wishlistItems = [
    {
        id: 1,
        name: "Fite ON AC_DC Adapter",
        price: 120.99,
        stock: "In Stock",
        image: wishlistImg1
    },
    {
        id: 2,
        name: "Gaming Headset",
        price: 100.99,
        stock: "In Stock",
        image: wishlistImg2
    },
    {
        id: 3,
        name: "Wireless Mouse",
        price: 106.99,
        stock: "In Stock",
        image: wishlistImg3
    },
    {
        id: 4,
        name: "Screwdriver and wrench",
        price: 170.0,
        stock: "In Stock",
        image: wishlistImg4
    }
];
/* =======================
   Component
======================= */
const WishlistMain = () => {
    const [wishlistProduct, setWishlistProduct] = useState(wishlistItems);
    const removeProduct = (id) => {
        setWishlistProduct((pre) => pre.filter((p) => p.id !== id));
    };
    return (_jsx("section", { className: "wishlist-page", children: _jsxs("div", { className: "container", children: [_jsx("div", { className: "table-responsive", children: _jsxs("table", { className: "table wishlist-table", children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { children: "Product Name" }), _jsx("th", { children: "Unit Price" }), _jsx("th", { children: "Stock Status" }), _jsx("th", { children: "Action" })] }) }), _jsx("tbody", { children: wishlistProduct.map((item) => (_jsxs("tr", { children: [_jsx("td", { children: _jsxs("div", { className: "product-box", children: [_jsx("div", { className: "cross-icon", children: _jsx("a", { href: "#", onClick: () => removeProduct(item?.id), children: _jsx("i", { className: "fas fa-times" }) }) }), _jsx("div", { className: "img-box", children: _jsx("img", { src: item.image, alt: item.name }) }), _jsx("h3", { children: _jsx(Link, { href: "/inner/product-details", children: item.name }) })] }) }), _jsxs("td", { children: ["$", item.price.toFixed(2)] }), _jsx("td", { children: item.stock }), _jsx("td", { children: _jsx("div", { className: "product-select", children: _jsxs(Link, { className: "thm-btn wishlist-page__btn", href: "/inner/product-details", children: ["Select Product", _jsx("span", { className: "fas fa-arrow-right" })] }) }) })] }, item.id))) })] }) }), _jsxs("div", { className: "product-details__social two", children: [_jsx("div", { className: "title", children: _jsx("h3", { children: "Share with friends:" }) }), _jsxs("div", { className: "product-details__social-link", children: [_jsx("a", { href: "#", children: _jsx("span", { className: "fab fa-twitter" }) }), _jsx("a", { href: "#", children: _jsx("span", { className: "fab fa-facebook" }) }), _jsx("a", { href: "#", children: _jsx("span", { className: "fab fa-pinterest-p" }) }), _jsx("a", { href: "#", children: _jsx("span", { className: "fab fa-instagram" }) })] })] })] }) }));
};
export default WishlistMain;
