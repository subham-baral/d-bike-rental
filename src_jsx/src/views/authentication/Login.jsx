"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import Banner from '../../sections/common/Banner';
import Link from 'next/link';
const Login = () => {
    const [rememberMe, setRememberMe] = useState(false);
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const loginData = {
            email: formData.get('form_email'),
            password: formData.get('form_password'),
            rememberMe: rememberMe
        };
        if (loginData) {
            form.reset();
        }
    };
    const handleRememberMeChange = (e) => {
        setRememberMe(e.target.checked);
    };
    return (_jsxs(_Fragment, { children: [_jsx(Banner, { breadcrumb: 'Login' }), _jsx("section", { className: "login-one", children: _jsx("div", { className: "container", children: _jsxs("div", { className: "login-one__form", children: [_jsx("div", { className: "inner-title text-center", children: _jsx("h2", { children: "Login Here" }) }), _jsx("form", { onSubmit: handleLogin, children: _jsxs("div", { className: "row", children: [_jsx("div", { className: "col-xl-12", children: _jsx("div", { className: "form-group", children: _jsx("div", { className: "input-box", children: _jsx("input", { type: "email", name: "form_email", id: "formEmail1", placeholder: "Email...", required: true }) }) }) }), _jsx("div", { className: "col-xl-12", children: _jsx("div", { className: "form-group", children: _jsx("div", { className: "input-box", children: _jsx("input", { type: "password", name: "form_password", id: "formEmail2", placeholder: "Password...", required: true }) }) }) }), _jsx("div", { className: "col-xl-12", children: _jsx("div", { className: "form-group", children: _jsxs("button", { className: "thm-btn", type: "submit", "data-loading-text": "Please wait...", children: ["Login Here", _jsx("span", { children: _jsx("i", { className: "icon-diagonal-arrow" }) })] }) }) }), _jsxs("div", { className: "remember-forget", children: [_jsxs("div", { className: "checked-box1", children: [_jsx("input", { className: "form-check-input mt-1", type: "checkbox", id: "rememberMe", checked: rememberMe, onChange: handleRememberMeChange, "aria-label": "Remember me checkbox" }), _jsx("label", { htmlFor: "rememberMe", children: "Remember me" })] }), _jsx("div", { className: "forget", children: _jsx("a", { href: "#", children: "Forget password?" }) })] }), _jsx("div", { className: "create-account text-center", children: _jsxs("p", { children: ["Not registered yet? ", _jsx(Link, { href: "/inner/sign-up", children: "Create an Account" })] }) })] }) })] }) }) })] }));
};
export default Login;
