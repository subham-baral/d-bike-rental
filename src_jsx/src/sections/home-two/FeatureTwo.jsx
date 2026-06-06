import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import Link from 'next/link';
import bg1 from "../../assets/images/backgrounds/feature-one-bg-1.jpg";
import bg2 from "../../assets/images/backgrounds/feature-one-bg-2.jpg";
const featureItems = [
    {
        id: 1,
        title: "Are You Looking \nFor a Car ?",
        description: "Lorem ipsum is simply ipun txns mane so dummy text of free available in market the printing and typesetting industry",
        buttonText: "Get Started",
        link: "/inner/contact",
        bgImage: bg1,
    },
    {
        id: 2,
        title: "Do You Want to \nRent a Car ?",
        description: "Lorem ipsum is simply ipun txns mane so dummy text of free available in market the printing and typesetting industry",
        buttonText: "Rent Now",
        link: "/inner/car-list-v-1",
        bgImage: bg2,
    },
];
const FeatureTwo = () => {
    return (_jsx("section", { className: "feature-one", children: _jsx("div", { className: "container", children: _jsx("div", { className: "feature-one__inner", children: _jsx("div", { className: "row", children: featureItems.map((item) => (_jsx("div", { className: "col-xl-6 col-lg-6", children: _jsxs("div", { className: `feature-one__inner-single ${item.id === 2 ? "feature-one__inner-single--two" : ""} wow`, children: [_jsx("div", { className: "feature-one__inner-single-bg", style: { backgroundImage: `url(${item.bgImage})` } }), _jsx("h3", { className: "feature-one__inner-title", children: item.title.split("\n").map((line, i) => (_jsxs(React.Fragment, { children: [line, _jsx("br", {})] }, i))) }), _jsx("p", { className: "feature-one__inner-text", children: item.description }), _jsx("div", { className: "feature-one__inner-btn-box", children: _jsx(Link, { href: item.link, className: "thm-btn", children: item.buttonText }) })] }) }, item.id))) }) }) }) }));
};
export default FeatureTwo;
