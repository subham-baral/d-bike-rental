"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const logo = "/d-bike-logo.png";
import useGorentContext from "../context/useGorentContext";
import Link from 'next/link';
const SideBar = () => {
    const { isSidebar, setIsSidebar } = useGorentContext();
    const handleCloceSideBar = () => {
        setIsSidebar((pre) => !pre);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const name = form.elements.namedItem('name').value;
        const email = form.elements.namedItem('email').value;
        const message = form.elements.namedItem('message').value;
        if (name && email && message) {
            console.log({ name, email, message });
            form.reset();
        }
    };
    return (_jsxs("div", { className: `xs-sidebar-group info-group info-sidebar ${isSidebar ? 'isActive' : ''}`, children: [_jsx("div", { className: "xs-overlay xs-bg-black", onClick: handleCloceSideBar }), _jsx("div", { className: "xs-sidebar-widget", children: _jsxs("div", { className: "sidebar-widget-container", children: [_jsx("div", { className: "widget-heading", children: _jsx("a", { href: "#", className: "close-side-widget", onClick: handleCloceSideBar, children: "X" }) }), _jsx("div", { className: "sidebar-textwidget", children: _jsx("div", { className: "sidebar-info-contents", children: _jsxs("div", { className: "content-inner", children: [_jsx("div", { className: "logo", children: _jsx(Link, { href: "/", onClick: handleCloceSideBar, children: _jsx("img", { src: logo, alt: "Logo" }) }) }), _jsxs("div", { className: "content-box", children: [_jsx("h4", { children: "About Us" }), _jsx("div", { className: "inner-text", children: _jsx("p", { children: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC." }) })] }), _jsxs("div", { className: "form-inner", children: [_jsx("h4", { children: "Get a free quote" }), _jsxs("form", { onSubmit: handleSubmit, children: [_jsx("div", { className: "form-group", children: _jsx("input", { type: "text", name: "name", placeholder: "Name", required: true }) }), _jsx("div", { className: "form-group", children: _jsx("input", { type: "email", name: "email", placeholder: "Email", required: true }) }), _jsx("div", { className: "form-group", children: _jsx("textarea", { name: "message", placeholder: "Message..." }) }), _jsx("div", { className: "form-group message-btn", children: _jsx("button", { type: "submit", className: "thm-btn form-inner__btn", children: "Submit Now" }) })] })] }), _jsxs("div", { className: "sidebar-contact-info", children: [_jsx("h4", { children: "Contact Info" }), _jsxs("ul", { className: "list-unstyled", children: [_jsxs("li", { children: [_jsx("span", { className: "icon-pin" }), "88 Brooklyn Street, New York"] }), _jsxs("li", { children: [_jsx("span", { className: "icon-call" }), _jsx("a", { href: "tel:+15559990153", children: "+1 555-9990-153" })] }), _jsxs("li", { children: [_jsx("span", { className: "icon-envelope" }), _jsx("a", { href: "mailto:info@example.com", children: "info@example.com" })] })] })] }), _jsx("div", { className: "thm-social-link1", children: _jsxs("ul", { className: "social-box list-unstyled", children: [_jsx("li", { children: _jsx("a", { href: "#", children: _jsx("i", { className: "icon-facebook" }) }) }), _jsx("li", { children: _jsx("a", { href: "#", children: _jsx("i", { className: "icon-twitter" }) }) }), _jsx("li", { children: _jsx("a", { href: "#", children: _jsx("i", { className: "icon-linkedin" }) }) }), _jsx("li", { children: _jsx("a", { href: "#", children: _jsx("i", { className: "icon-dribble-big-logo" }) }) })] }) })] }) }) })] }) })] }));
};
export default SideBar;
