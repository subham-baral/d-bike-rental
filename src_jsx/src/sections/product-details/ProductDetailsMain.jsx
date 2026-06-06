"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useRouter as useNavigate } from 'next/navigation';
import QuantityOfProduct from './QuantityOfProduct';
import NavForSlider from './NavForSlider';
const ProductDetailsMain = () => {
    const [quantityValue, setQuantityValue] = useState(1);
    const [selectedSize, setSelectedSize] = useState('XXL');
    const sizes = ['XXL', 'XL', 'XS', 'M', 'L', 'S'];
    const navigate = useNavigate();
    const handleSizeChange = (size) => {
        setSelectedSize(size);
    };
    const handleAddToWishlist = () => {
        navigate("/inner/wishlist");
    };
    const handleAddToCart = () => {
        navigate("/inner/cart");
    };
    return (_jsx("section", { className: "product-details", children: _jsx("div", { className: "container", children: _jsxs("div", { className: "row", children: [_jsx("div", { className: "col-lg-6 col-xl-6", children: _jsx("div", { className: "product-details__left", children: _jsx("div", { className: "product-details__left-inner", children: _jsx(NavForSlider, {}) }) }) }), _jsx("div", { className: "col-lg-6 col-xl-6", children: _jsxs("div", { className: "product-details__right", children: [_jsx("div", { className: "product-details__top", children: _jsxs("h3", { className: "product-details__title", children: ["Think, Plan, Achieve ", _jsx("span", { children: "$86.00" })] }) }), _jsxs("div", { className: "product-details__reveiw", children: [[...Array(5)].map((_, index) => (_jsx("i", { className: "icon-star" }, index))), _jsx("span", { children: "55 customer reviews" })] }), _jsxs("div", { className: "product-details__content", children: [_jsx("p", { className: "product-details__content-text1", children: "The power to be found between the pages of a book is formidable, indeed. And these 80 inspiring quotes about books and importance of reading are here to remind you of that. From beloved bestsellers to iconic celebrities, these quotes exemplify the benefits of reading and of a good books to comfort, challenge, and inspire you." }), _jsxs("p", { className: "product-details__content-text2", children: ["REF. 4231/406 ", _jsx("br", {}), "Available in store"] })] }), _jsx("div", { className: "product-details__select", children: _jsxs("div", { className: "product-details__select-size", children: [_jsx("h3", { children: "Size:" }), _jsx("ul", { className: "list-unstyled", children: sizes.map((size, index) => (_jsxs("li", { children: [_jsx("input", { type: "radio", id: `size${index + 1}`, name: "size", value: size, checked: selectedSize === size, onChange: () => handleSizeChange(size) }), _jsxs("label", { htmlFor: `size${index + 1}`, children: [_jsx("i", {}), _jsx("span", { children: size })] })] }, size))) })] }) }), _jsxs("div", { className: "product-details__inner", children: [_jsxs("div", { className: "product-details__quantity", children: [_jsx("h3", { className: "product-details__quantity-title", children: "Quantity" }), _jsx(QuantityOfProduct, { value: quantityValue, onChange: setQuantityValue })] }), _jsxs("div", { className: "product-details__buttons-boxes", children: [_jsx("div", { className: "product-details__buttons-1", children: _jsxs("button", { onClick: handleAddToWishlist, className: "thm-btn", type: "button", children: ["Add to Wishlist", _jsx("span", { children: _jsx("i", { className: "icon-diagonal-arrow" }) })] }) }), _jsx("div", { className: "product-details__buttons-2", children: _jsxs("button", { onClick: handleAddToCart, className: "thm-btn", type: "button", children: ["Add to Cart", _jsx("span", { children: _jsx("i", { className: "icon-diagonal-arrow" }) })] }) })] })] }), _jsxs("div", { className: "product-details__social", children: [_jsx("div", { className: "title", children: _jsx("h3", { children: "Share with friends:" }) }), _jsxs("div", { className: "product-details__social-link", children: [_jsx("a", { href: "#", onClick: (e) => e.preventDefault(), children: _jsx("span", { className: "fab fa-twitter" }) }), _jsx("a", { href: "#", onClick: (e) => e.preventDefault(), children: _jsx("span", { className: "fab fa-facebook" }) }), _jsx("a", { href: "#", onClick: (e) => e.preventDefault(), children: _jsx("span", { className: "fab fa-pinterest-p" }) }), _jsx("a", { href: "#", onClick: (e) => e.preventDefault(), children: _jsx("span", { className: "fab fa-instagram" }) })] })] })] }) })] }) }) }));
};
export default ProductDetailsMain;
