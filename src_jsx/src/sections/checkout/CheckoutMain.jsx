"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Link from 'next/link';
const CheckoutMain = () => {
    const [selected, setSelected] = useState("");
    const [country, setCountry] = useState("");
    const [isCheckPay, setCheckPay] = useState(1);
    const [accountCheck, setAccountCheck] = useState(false);
    const [termsAccepted, setTermsAccepted] = useState(false);
    const shippingOptions = [
        { id: "flat", label: "Flat Rate: $9.00" },
        { id: "free", label: "Free Shipping" },
        { id: "pickup", label: "Local Pickup" },
    ];
    const orderItems = [
        { id: 1, name: "Bolt Sweatshirt", price: 88.00 },
        { id: 2, name: "Cock Kat Kitten Milk X 02", price: 188.00 },
    ];
    const handleShopping = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const userInfo = {
            userCountry: country,
            firstName: formData.get('first_name'),
            lastName: formData.get('last_name'),
            companyName: formData.get('company_name'),
            address: formData.get('address'),
            appartment: formData.get('appartment'),
            townOrCity: formData.get('townOrCity'),
            state: formData.get('state'),
            formZip: formData.get('form_zip'),
            email: formData.get('email'),
            formPhone: formData.get('form_phone'),
            formOrderNotes: formData.get('form_order_notes'),
            isCheckedAccount: accountCheck
        };
        console.log(userInfo);
    };
    const handleCountryChange = (e) => {
        setCountry(e.target.value);
    };
    const handleShippingOptionChange = (optionId) => {
        setSelected(optionId);
    };
    const handleAccountCheckChange = () => {
        setAccountCheck(prev => !prev);
    };
    const handleTermsChange = () => {
        setTermsAccepted(prev => !prev);
    };
    const calculateSubtotal = () => {
        return orderItems.reduce((total, item) => total + item.price, 0);
    };
    const calculateTotal = () => {
        const subtotal = calculateSubtotal();
        const shippingCost = selected === 'flat' ? 9.00 : 0;
        return subtotal + shippingCost;
    };
    return (_jsx("section", { className: "checkout-page", children: _jsx("div", { className: "container", children: _jsxs("div", { className: "row", children: [_jsx("div", { className: "col-xl-8", children: _jsxs("div", { className: "billing_details", children: [_jsxs("div", { className: "billing_title", children: [_jsxs("p", { children: ["Returning Customer? ", _jsx("a", { href: "#", children: "Click here to Login" })] }), _jsx("h2", { children: "Billing details" })] }), _jsxs("form", { onSubmit: handleShopping, className: "billing_details_form", children: [_jsx("div", { className: "row", children: _jsx("div", { className: "col-xl-12", children: _jsx("div", { className: "billing_input_box", children: _jsxs("select", { className: "form-select this-select select-box", "aria-label": "Sort Options", value: country, onChange: handleCountryChange, required: true, children: [_jsx("option", { value: "", disabled: true, hidden: true, children: "Select a country" }), _jsx("option", { value: "Canada", children: "Canada" }), _jsx("option", { value: "England", children: "England" }), _jsx("option", { value: "Australia", children: "Australia" }), _jsx("option", { value: "USA", children: "USA" })] }) }) }) }), _jsxs("div", { className: "row bs-gutter-x-20", children: [_jsx("div", { className: "col-xl-6 col-lg-6 col-md-6", children: _jsx("div", { className: "billing_input_box", children: _jsx("input", { type: "text", name: "first_name", placeholder: "First name", required: true }) }) }), _jsx("div", { className: "col-xl-6 col-lg-6 col-md-6", children: _jsx("div", { className: "billing_input_box", children: _jsx("input", { type: "text", name: "last_name", placeholder: "Last name", required: true }) }) })] }), _jsxs("div", { className: "row", children: [_jsx("div", { className: "col-xl-12", children: _jsx("div", { className: "billing_input_box", children: _jsx("input", { type: "text", name: "company_name", placeholder: "Company" }) }) }), _jsx("div", { className: "col-xl-12", children: _jsx("div", { className: "billing_input_box", children: _jsx("input", { type: "text", name: "address", placeholder: "Address", required: true }) }) }), _jsx("div", { className: "col-xl-12", children: _jsx("div", { className: "billing_input_box", children: _jsx("input", { type: "text", name: "appartment", placeholder: "Appartment, unit, etc. (optional)" }) }) }), _jsx("div", { className: "col-xl-12", children: _jsx("div", { className: "billing_input_box", children: _jsx("input", { type: "text", name: "townOrCity", placeholder: "Town / City", required: true }) }) })] }), _jsxs("div", { className: "row bs-gutter-x-20", children: [_jsx("div", { className: "col-xl-6 col-lg-6 col-md-6", children: _jsx("div", { className: "billing_input_box", children: _jsx("input", { type: "text", name: "state", placeholder: "State", required: true }) }) }), _jsx("div", { className: "col-xl-6 col-lg-6 col-md-6", children: _jsx("div", { className: "billing_input_box", children: _jsx("input", { name: "form_zip", type: "text", pattern: "[0-9]*", placeholder: "Zip code", required: true }) }) }), _jsx("div", { className: "col-xl-6 col-lg-6 col-md-6", children: _jsx("div", { className: "billing_input_box", children: _jsx("input", { name: "email", type: "email", placeholder: "Email address", required: true }) }) }), _jsx("div", { className: "col-xl-6 col-lg-6 col-md-6", children: _jsx("div", { className: "billing_input_box", children: _jsx("input", { type: "tel", name: "form_phone", required: true, placeholder: "Phone" }) }) })] }), _jsx("div", { className: "row", children: _jsx("div", { className: "col-xl-12", children: _jsx("div", { className: "billing_input_box", children: _jsx("textarea", { placeholder: "Type your note", name: "form_order_notes" }) }) }) }), _jsx("div", { className: "row", children: _jsx("div", { className: "col-xl-12", children: _jsxs("div", { className: "form-check check-boxx", children: [_jsx("input", { className: "form-check-input backGround", type: "checkbox", checked: accountCheck, onChange: handleAccountCheckChange, id: "defaultCheck1" }), _jsx("label", { className: "form-check-label", htmlFor: "defaultCheck1", children: "Create an account?" })] }) }) }), _jsx("div", { className: "row", children: _jsx("div", { className: "col-xl-12", children: _jsxs("div", { className: "billing_details_form-btns", children: [_jsx("div", { className: "billing_details_form-btn-1", children: _jsxs("button", { type: "submit", className: "thm-btn", children: ["Continue Shopping", _jsx("span", { children: _jsx("i", { className: "icon-diagonal-arrow" }) })] }) }), _jsx("div", { className: "billing_details_form-btn-2", children: _jsx(Link, { href: "/inner/cart", children: _jsxs("button", { type: "button", className: "thm-btn", children: ["Return To Cart", _jsx("span", { children: _jsx("i", { className: "icon-diagonal-arrow" }) })] }) }) })] }) }) })] })] }) }), _jsx("div", { className: "col-xl-4", children: _jsxs("div", { className: "sidebar-order-summary", children: [_jsx("div", { className: "title-box", children: _jsx("h3", { children: "Your Order" }) }), _jsxs("ul", { className: "sidebar-order-summary__list list-unstyled", children: [orderItems.map((item) => (_jsxs("li", { children: [_jsx("div", { className: "left-text", children: _jsx("p", { children: item.name }) }), _jsx("div", { className: "right-text", children: _jsxs("p", { children: ["$", item.price.toFixed(2)] }) })] }, item.id))), _jsxs("li", { children: [_jsx("div", { className: "left-text", children: _jsx("p", { children: "Sub total" }) }), _jsx("div", { className: "right-text", children: _jsxs("p", { children: ["$", calculateSubtotal().toFixed(2)] }) })] }), _jsxs("li", { className: 'shipping', children: [_jsx("div", { className: "", children: shippingOptions.map((item) => (_jsxs("div", { className: "form-check check-boxx", children: [_jsx("input", { className: "form-check-input backGround", type: "checkbox", id: item.id, checked: selected === item.id, onChange: () => handleShippingOptionChange(item.id) }), _jsx("label", { className: "form-check-label", htmlFor: item.id, children: item.label })] }, item.id))) }), _jsx("div", { className: "left-text", children: _jsx("p", { children: "Shipping" }) })] }), _jsxs("li", { children: [_jsx("div", { className: "left-text", children: _jsx("p", { children: "Total" }) }), _jsx("div", { className: "right-text", children: _jsxs("p", { children: ["$", calculateTotal().toFixed(2)] }) })] })] }), _jsxs("div", { className: "sidebar-order-summary__Payment", children: [_jsx("div", { className: "title-box", children: _jsx("h3", { children: "Payment Method" }) }), _jsxs("div", { className: "checkout__payment", children: [_jsxs("div", { className: `checkout__payment__item ${isCheckPay === 1 ? 'checkout__payment__item--active' : ''}`, children: [_jsx("h3", { onClick: () => setCheckPay(1), className: "checkout__payment__title", children: "Direct bank transfer" }), _jsx("div", { className: "checkout__payment__content", style: { display: isCheckPay === 1 ? 'block' : 'none' }, children: "A Direct Bank Transfer is a method of sending money from one bank account to another without using cash, checks, or third-party payment services." })] }), _jsxs("div", { className: `checkout__payment__item ${isCheckPay === 2 ? 'checkout__payment__item--active' : ''}`, children: [_jsx("h3", { onClick: () => setCheckPay(2), className: "checkout__payment__title", children: "Paypal payment" }), _jsx("div", { className: "checkout__payment__content", style: { display: isCheckPay === 2 ? 'block' : 'none' }, children: "PayPal is an online payment system that allows users to send and receive money securely. It supports personal and business transactions, including shopping, invoicing, and international transfers." })] }), _jsxs("div", { className: `checkout__payment__item ${isCheckPay === 3 ? 'checkout__payment__item--active' : ''}`, children: [_jsx("h3", { onClick: () => setCheckPay(3), className: "checkout__payment__title", children: "Cheque Payment" }), _jsx("div", { className: "checkout__payment__content", style: { display: isCheckPay === 3 ? 'block' : 'none' }, children: "A cheque payment is a written, dated, and signed document that instructs a bank to pay a specific amount of money from the issuer's account to the payee." })] })] })] }), _jsxs("div", { className: "sidebar-order-summary__bottom", children: [_jsxs("p", { className: "text1", children: ["your personal data will be used to process your order your support experience throughout this website and for other purposes described in our", ' ', _jsx("a", { href: "#", children: "privacy policy" })] }), _jsxs("div", { className: "form-check d-flex gap-2 mt-4", children: [_jsx("input", { className: "form-check-input backGround", type: "checkbox", id: "defaultCheck2", checked: termsAccepted, onChange: handleTermsChange }), _jsxs("label", { className: "form-check-label", htmlFor: "defaultCheck2", children: ["I have read and agree to the website ", _jsx("br", {}), _jsx("a", { href: "#", children: "terms and conditions" })] })] }), _jsx("div", { className: "sidebar-order-summary__btn", children: _jsxs(Link, { href: "#", className: "thm-btn", children: ["Place your order", _jsx("span", { children: _jsx("i", { className: "icon-diagonal-arrow" }) })] }) })] })] }) })] }) }) }));
};
export default CheckoutMain;
