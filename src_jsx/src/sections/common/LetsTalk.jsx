import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Link from 'next/link';
const LetsTalk = () => {
    return (_jsxs("section", { className: "lets-talk", children: [_jsx("div", { className: "lets-talk__bg" }), _jsx("div", { className: "container", children: _jsxs("div", { className: "lets-talk__inner", children: [_jsxs("div", { className: "lets-talk__title", children: [_jsx("p", { children: "Rent Your Car" }), _jsx("h2", { children: "Interested in Renting?" })] }), _jsxs("div", { className: "lets-talk__btn-boxes", children: [_jsx("div", { className: "lets-talk__btn-1", children: _jsxs(Link, { href: "/inner/contact", className: "thm-btn", children: ["Contact Us", _jsx("span", { className: "fas fa-arrow-right" })] }) }), _jsx("div", { className: "lets-talk__btn-2", children: _jsxs(Link, { href: "/inner/car-list-v-1", className: "thm-btn", children: ["Rent Now", _jsx("span", { className: "fas fa-arrow-right" })] }) })] })] }) })] }));
};
export default LetsTalk;
