import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Link from 'next/link';
const Banner = ({ breadcrumb }) => {
    return (_jsxs("section", { className: "page-header", children: [_jsx("div", { className: "page-header__bg" }), _jsx("div", { className: "page-header__shape-1" }), _jsx("div", { className: "container", children: _jsxs("div", { className: "page-header__inner", children: [_jsx("h3", { children: breadcrumb }), _jsx("div", { className: "thm-breadcrumb__inner", children: _jsxs("ul", { className: "thm-breadcrumb list-unstyled", children: [_jsx("li", { children: _jsx(Link, { href: "/", children: "Home" }) }), _jsx("li", { children: _jsx("span", { className: "icon-arrow-left" }) }), _jsx("li", { children: breadcrumb })] }) })] }) })] }));
};
export default Banner;
