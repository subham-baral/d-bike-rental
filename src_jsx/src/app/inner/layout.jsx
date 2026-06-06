"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Header from '../../sections/common/Header';
import Gallery from '../../sections/common/Gallery';
import Footer from '../../sections/common/Footer';
import StrickyHeader from '../../sections/common/StrickyHeader';
export default function InnerLayout({ children }) {
    return (_jsxs("div", { className: 'page-wrapper', children: [_jsx(Header, {}), children, _jsx(Gallery, {}), _jsx(Footer, {}), _jsx(StrickyHeader, {})] }));
}
