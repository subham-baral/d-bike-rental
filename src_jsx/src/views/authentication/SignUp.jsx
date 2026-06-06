"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Banner from '../../sections/common/Banner';
import googleIcon from '../../assets/images/icon/icon-google-2.png';
import facebookIcon from '../../assets/images/icon/icon-facebook.png';
import Link from 'next/link';
const SignUp = () => {
    const socialLogins = [
        {
            href: '#',
            icon: googleIcon,
            alt: 'Google',
            text: 'Continue with Google'
        },
        {
            href: '#',
            icon: facebookIcon,
            alt: 'Facebook',
            text: 'Continue with Facebook'
        }
    ];
    const handleSignup = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const signUpInfo = {
            name: formData.get('form_name'),
            email: formData.get('form_email'),
            phone: formData.get('form_phone'),
            password: formData.get('form_password')
        };
        if (signUpInfo) {
            form.reset();
        }
    };
    return (_jsxs(_Fragment, { children: [_jsx(Banner, { breadcrumb: 'Sign up' }), _jsx("section", { className: "sign-up-one", children: _jsx("div", { className: "container", children: _jsxs("div", { className: "sign-up-one__form", children: [_jsx("div", { className: "inner-title text-center", children: _jsx("h2", { children: "Sign Up" }) }), _jsxs("form", { onSubmit: handleSignup, children: [_jsxs("div", { className: "row", children: [_jsx("div", { className: "col-xl-12", children: _jsx("div", { className: "form-group", children: _jsx("div", { className: "input-box", children: _jsx("input", { type: "text", name: "form_name", id: "formName", placeholder: "Name...", required: true }) }) }) }), _jsx("div", { className: "col-xl-12", children: _jsx("div", { className: "form-group", children: _jsx("div", { className: "input-box", children: _jsx("input", { type: "email", name: "form_email", id: "formEmail", placeholder: "Email...", required: true }) }) }) }), _jsx("div", { className: "col-xl-12", children: _jsx("div", { className: "form-group", children: _jsx("div", { className: "input-box", children: _jsx("input", { type: "tel", name: "form_phone", id: "formPhone", placeholder: "Phone...", required: true }) }) }) }), _jsx("div", { className: "col-xl-12", children: _jsx("div", { className: "form-group", children: _jsx("div", { className: "input-box", children: _jsx("input", { type: "password", name: "form_password", id: "formPassword", placeholder: "Password...", required: true }) }) }) }), _jsx("div", { className: "col-xl-12", children: _jsx("div", { className: "form-group", children: _jsxs("button", { className: "thm-btn", type: "submit", "data-loading-text": "Please wait...", children: ["Sign Up", _jsx("span", { children: _jsx("i", { className: "icon-diagonal-arrow" }) })] }) }) })] }), _jsx("div", { className: "google-facebook", children: socialLogins.map((social) => (_jsxs("a", { href: social.href, rel: "noopener noreferrer", children: [_jsx("div", { className: "icon", children: _jsx("img", { src: social.icon, alt: social.alt }) }), social.text] }, social.alt))) }), _jsx("div", { className: "create-account text-center", children: _jsxs("p", { children: ["Already have an account? ", _jsx(Link, { href: "/inner/login", children: "Login Here" })] }) })] })] }) }) })] }));
};
export default SignUp;
