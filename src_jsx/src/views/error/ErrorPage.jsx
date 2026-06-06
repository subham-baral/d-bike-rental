import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Banner from '../../sections/common/Banner';
import Link from 'next/link';
import errorImg from "../../assets/images/resources/error-page-img1.png";
import Header from '../../sections/common/Header';
import StrickyHeader from '../../sections/common/StrickyHeader';
import Footer from '../../sections/common/Footer';
import Gallery from '../../sections/common/Gallery';
const ErrorPage = () => {
    return (_jsxs(_Fragment, { children: [_jsx(Header, {}), _jsx(Banner, { breadcrumb: '404 Error' }), _jsx("section", { className: "error-page", children: _jsx("div", { className: "container", children: _jsxs("div", { className: "error-page__inner text-center", children: [_jsx("div", { className: "error-page__img float-bob-y", children: _jsx("img", { src: errorImg, alt: "error image" }) }), _jsxs("div", { className: "error-page__content", children: [_jsx("h2", { children: "Oops! Page Not Found!" }), _jsx("p", { children: "The page you are looking for does not exist. It might have been moved or deleted." }), _jsx("div", { className: "btn-box", children: _jsxs(Link, { href: "/", className: "thm-btn", children: ["Back To Home ", _jsx("span", { className: "fas fa-arrow-right" }), " "] }) })] })] }) }) }), _jsx(Gallery, {}), _jsx(Footer, {}), _jsx(StrickyHeader, {})] }));
};
export default ErrorPage;
