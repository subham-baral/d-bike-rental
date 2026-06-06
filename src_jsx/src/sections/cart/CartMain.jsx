"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import CustomSelect from '../../components/elements/CustomSelect';
import productImg1 from "../../assets/images/shop/cart-page-img-1.jpg";
import productImg2 from "../../assets/images/shop/cart-page-img-2.jpg";
import productImg3 from "../../assets/images/shop/cart-page-img-3.jpg";
import productImg4 from "../../assets/images/shop/cart-page-img-4.jpg";
import Link from 'next/link';
import CartProduct from './CartProduct';
import useGorentContext from '../../components/context/useGorentContext';
const cartProducts = [
    {
        id: 1,
        name: "Gree Air Conditioner",
        image: productImg1,
        price: 10.99,
        link: "/inner/product-details"
    },
    {
        id: 2,
        name: "Pliers | Cutting, Gripping",
        image: productImg2,
        price: 10.99,
        link: "/inner/product-details"
    },
    {
        id: 3,
        name: "Gear and wrench",
        image: productImg3,
        price: 10.99,
        link: "/inner/product-details"
    },
    {
        id: 4,
        name: "Nut Driver",
        image: productImg4,
        price: 10.99,
        link: "/inner/product-details"
    }
];
const CartMain = () => {
    const { setCartCount } = useGorentContext();
    const [cartProduct, setCartProduct] = useState(cartProducts);
    const [country, setCountry] = useState('');
    const [stateCity, setStateCity] = useState('');
    const [zipCode, setZipCode] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const shippingData = {
            country,
            stateCity,
            zipCode,
        };
        console.log('Shipping Data:', shippingData);
        if (!country || !stateCity || !zipCode) {
            return;
        }
        // send to API / update cart here
    };
    const removeProduct = (id) => {
        if (id) {
            setCartProduct((pre) => pre.filter((p) => p.id !== id));
            setCartCount(cartProduct.length - 1);
        }
    };
    return (_jsx("section", { className: "cart-page", children: _jsx("div", { className: "container", children: _jsxs("div", { className: "row", children: [_jsx("div", { className: "col-xl-8 col-lg-7", children: _jsx("div", { className: "cart-page__left", children: _jsx("div", { className: "table-responsive", children: _jsxs("table", { className: "table cart-table", children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { children: "Item" }), _jsx("th", { children: "Price" }), _jsx("th", { children: "Quantity" }), _jsx("th", { children: "Total" }), _jsx("th", { children: "Remove" })] }) }), _jsx("tbody", { children: cartProduct.map((product) => _jsx(CartProduct, { product: product, removeProduct: removeProduct }, product?.id)) })] }) }) }) }), _jsx("div", { className: "col-xl-4 col-lg-5", children: _jsx("div", { className: "cart-page__right", children: _jsxs("div", { className: "cart-page__sidebar", children: [_jsxs("div", { className: "cart-page__shipping", children: [_jsx("h3", { className: "cart-page__shipping-title", children: "Calculated Shipping" }), _jsx("form", { onSubmit: handleSubmit, className: "cart-page__shipping-form", children: _jsxs("div", { className: "row", children: [_jsx("div", { className: "col-xl-12", children: _jsx("div", { className: "cart-page__shipping-input-box", children: _jsx("div", { className: "select-box", children: _jsx(CustomSelect, { optionArray: [
                                                                            { id: 1, value: "Country", label: "Country" },
                                                                            { id: 2, value: "Ban", label: "Ban" },
                                                                            { id: 3, value: "Ind", label: "Ind" },
                                                                            { id: 4, value: "Pak", label: "Pak" },
                                                                            { id: 5, value: "USA", label: "USA" },
                                                                        ], value: country, onChange: (value) => setCountry(value) }) }) }) }), _jsx("div", { className: "col-xl-6 col-lg-6 col-md-6", children: _jsx("div", { className: "cart-page__shipping-input-box", children: _jsx("div", { className: "select-box", children: _jsx(CustomSelect, { optionArray: [
                                                                            { id: 1, value: "State/City", label: "State/City" },
                                                                            { id: 2, value: "Ban", label: "Ban" },
                                                                            { id: 3, value: "Ind", label: "Ind" },
                                                                            { id: 4, value: "Pak", label: "Pak" },
                                                                            { id: 5, value: "USA", label: "USA" },
                                                                        ], value: stateCity, onChange: (value) => setStateCity(value) }) }) }) }), _jsx("div", { className: "col-xl-6 col-lg-6 col-md-6", children: _jsx("div", { className: "cart-page__shipping-input-box", children: _jsx("input", { type: "text", placeholder: "Zip Code", value: zipCode, onChange: (e) => setZipCode(e.target.value) }) }) }), _jsx("div", { className: "cart-page__btn-box", children: _jsxs("button", { type: "submit", className: "thm-btn", children: ["Update ", _jsx("span", { className: "fas fa-arrow-right" })] }) })] }) })] }), _jsxs("div", { className: "cart-page__coupon-code", children: [_jsx("h3", { className: "cart-page__coupon-code-title", children: "Coupon Code" }), _jsx("p", { className: "cart-page__coupon-code-text", children: "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born" }), _jsxs("form", { onSubmit: (e) => e.preventDefault(), className: "default-form cart-page__coupon-code-form", children: [_jsx("input", { type: "text", name: 'Coupon_Code', placeholder: "Enter Coupon Code" }), _jsxs("button", { className: "thm-btn", type: "submit", children: ["Apply Coupon ", _jsx("span", { className: "fas fa-arrow-right" })] })] })] }), _jsxs("div", { className: "cart-page__cart-total", children: [_jsxs("ul", { className: "cart-total list-unstyled", children: [_jsxs("li", { children: [_jsx("span", { children: "Cart Subtotal" }), _jsx("span", { children: "$20.98 USD " })] }), _jsxs("li", { children: [_jsx("span", { children: "Shipping Cost" }), _jsx("span", { children: "-$40.00 USD" })] }), _jsxs("li", { children: [_jsx("span", { children: "Discount" }), _jsx("span", { children: "$0.00 USD" })] }), _jsxs("li", { children: [_jsx("span", { children: "Cart Total" }), _jsx("span", { className: "cart-total-amount", children: "$20.98 USD" })] })] }), _jsxs("div", { className: "cart-page__buttons", children: [_jsx("div", { className: "cart-page__buttons-1", children: _jsxs(Link, { href: "/inner/checkout", className: "thm-btn", children: ["Update ", _jsx("span", { className: "fas fa-arrow-right" }), " "] }) }), _jsx("div", { className: "cart-page__buttons-2", children: _jsxs(Link, { href: "/inner/checkout", className: "thm-btn", children: ["Checkout ", _jsx("span", { className: "fas fa-arrow-right" })] }) })] })] })] }) }) })] }) }) }));
};
export default CartMain;
