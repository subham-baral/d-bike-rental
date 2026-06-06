"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { motion } from "framer-motion";
import CustomSelect from '../../components/elements/CustomSelect';
import contactMain from "../../assets/images/resources/contact-one-img-1.png";
import contactImg from "../../assets/images/shapes/section-title-tagline-shape-2.png";
import TextAnimation from '../../components/elements/TextAnimation';
const ContactThree = () => {
    const [service, setService] = useState("");
    const handleContactSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = {
            name: form.elements.namedItem('name').value,
            email: form.elements.namedItem('Email').value,
            phone: form.elements.namedItem('Phone').value,
            service, // from useState
            message: form.elements.namedItem('message').value,
        };
        console.log('Contact Form Data:', data);
        // basic validation
        if (!data.name || !data.email || !data.phone || !data.service) {
            return;
        }
        // 🔗 send to API here
        // await fetch('/api/contact', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(data),
        // });
        form.reset();
        setService('');
    };
    return (_jsxs("section", { className: "contact-one", id: 'contact', children: [_jsx("div", { className: "contact-one__bg jarallax" }), _jsx(motion.div, { initial: { x: 100, opacity: 0 }, whileInView: { x: 0, opacity: 1 }, transition: {
                    duration: 1,
                    ease: "easeOut"
                }, viewport: { amount: 0.02, once: true }, className: "contact-one__img wow", children: _jsx("img", { src: contactMain, alt: "Image" }) }), _jsx("div", { className: "container", children: _jsx("div", { className: "row", children: _jsx("div", { className: "col-xl-8 col-lg-8", children: _jsxs("div", { className: "contact-one__left", children: [_jsxs("div", { className: "section-title text-left sec-title-animation animation-style2", children: [_jsxs("div", { className: "section-title__tagline-box", children: [_jsx("div", { className: "section-title__tagline-shape", children: _jsx("img", { src: contactImg, alt: "Image" }) }), _jsx("span", { className: "section-title__tagline", children: "contact us" })] }), _jsxs("h2", { className: "section-title__title title-animation", children: [_jsx(TextAnimation, { text: 'We create online success' }), _jsx(TextAnimation, { text: 'Together with you.' })] })] }), _jsx("form", { className: "contact-form-validated contact-one__form", onSubmit: handleContactSubmit, children: _jsxs("div", { className: "row", children: [_jsx("div", { className: "col-xl-6 col-lg-6", children: _jsx("div", { className: "contact-one__input-box", children: _jsx("input", { type: "text", name: "name", placeholder: "Your Name", required: true }) }) }), _jsx("div", { className: "col-xl-6 col-lg-6", children: _jsx("div", { className: "contact-one__input-box", children: _jsx("input", { type: "email", name: "Email", placeholder: "Email Address", required: true }) }) }), _jsx("div", { className: "col-xl-6 col-lg-6", children: _jsx("div", { className: "contact-one__input-box", children: _jsx("input", { type: "text", name: "Phone", placeholder: "Phone Number", required: true }) }) }), _jsx("div", { className: "col-xl-6 col-lg-6", children: _jsx("div", { className: "contact-one__input-box", children: _jsx("div", { className: "select-box", children: _jsx(CustomSelect, { optionArray: [
                                                                { id: 1, value: "Service Type", label: "Service Type" },
                                                                { id: 2, value: "Type Of Service 1", label: "Type Of Service 1" },
                                                                { id: 3, value: "Type Of Service 2", label: "Type Of Service 2" },
                                                                { id: 4, value: "Type Of Service 3", label: "Type Of Service 3" },
                                                                { id: 5, value: "Type Of Service 4", label: "Type Of Service 4" },
                                                            ], value: service, onChange: (value) => setService(value) }) }) }) }), _jsxs("div", { className: "col-xl-12", children: [_jsx("div", { className: "contact-one__input-box text-message-box", children: _jsx("textarea", { name: "message", placeholder: "Messege" }) }), _jsx("div", { className: "contact-one__btn-box", children: _jsxs("button", { type: "submit", className: "thm-btn", children: ["send a message", _jsx("span", { className: "fas fa-arrow-right" })] }) })] })] }) }), _jsx("div", { className: "result" })] }) }) }) })] }));
};
export default ContactThree;
