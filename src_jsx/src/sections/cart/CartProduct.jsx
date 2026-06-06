"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Link from 'next/link';
import QuantityOfProduct from '../product-details/QuantityOfProduct';
const CartProduct = ({ product, removeProduct }) => {
    const [quantityValue, setQuantityValue] = useState(1);
    return (_jsxs("tr", { children: [_jsx("td", { children: _jsxs("div", { className: "product-box", children: [_jsx("div", { className: "img-box", children: _jsx("img", { src: product.image, alt: product.name }) }), _jsx("h3", { children: _jsx(Link, { href: product.link, children: product.name }) })] }) }), _jsxs("td", { children: ["$", product.price] }), _jsx("td", { children: _jsx(QuantityOfProduct, { value: quantityValue, onChange: setQuantityValue }) }), _jsxs("td", { children: ["$", (product?.price * quantityValue).toFixed(2)] }), _jsx("td", { children: _jsx("div", { className: "cross-icon", style: { cursor: "pointer" }, onClick: () => removeProduct(product?.id), children: _jsx("i", { className: "fas fa-times" }) }) })] }));
};
export default CartProduct;
