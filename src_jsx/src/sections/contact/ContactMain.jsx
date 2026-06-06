"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
const ContactMain = () => {
    const handleContactSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const contactData = {
            name: form.elements.namedItem('name').value,
            email: form.elements.namedItem('email').value,
            number: form.elements.namedItem('number').value,
            company: form.elements.namedItem('company').value,
            message: form.elements.namedItem('message').value,
        };
        console.log('Contact Data:', contactData);
        if (!contactData.name || !contactData.email) {
            return;
        }
        // 🔗 API call here
        // await fetch('/api/contact', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(contactData),
        // });
        form.reset();
    };
    return (_jsxs(_Fragment, { children: [_jsx("section", { className: "contact-info", children: _jsx("div", { className: "container", children: _jsxs("div", { className: "row", children: [_jsx("div", { className: "col-xl-4 col-lg-4", children: _jsxs("div", { className: "contact-info__single", children: [_jsx("div", { className: "contact-info__icon", children: _jsx("span", { className: "icon-call" }) }), _jsx("p", { children: "Contact Us" }), _jsx("h3", { children: _jsx("a", { href: "tel:558270575405", children: "+55 827 057 5405" }) })] }) }), _jsx("div", { className: "col-xl-4 col-lg-4", children: _jsxs("div", { className: "contact-info__single", children: [_jsx("div", { className: "contact-info__icon", children: _jsx("span", { className: "icon-email" }) }), _jsx("p", { children: "Mail Us" }), _jsx("h3", { children: _jsx("a", { href: "mailto:example@gamil.com", children: "example@gamil.com" }) })] }) }), _jsx("div", { className: "col-xl-4 col-lg-4", children: _jsxs("div", { className: "contact-info__single", children: [_jsx("div", { className: "contact-info__icon", children: _jsx("span", { className: "icon-location" }) }), _jsx("p", { children: "Our Office Location" }), _jsx("h3", { children: "12 Green Road 05 New Yark" })] }) })] }) }) }), _jsx("section", { className: "contact-page", children: _jsx("div", { className: "container", children: _jsx("div", { className: "contact-page__inner", children: _jsxs("div", { className: "row", children: [_jsx("div", { className: "col-xl-6", children: _jsx("div", { className: "contact-page__left", children: _jsx("iframe", { src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd", className: "google-map__one" }) }) }), _jsx("div", { className: "col-xl-6", children: _jsxs("div", { className: "contact-page__right", children: [_jsx("h3", { className: "contact-page__form-title", children: "Get A Free Quote" }), _jsx("form", { onSubmit: handleContactSubmit, id: "contact-form", className: "contact-form-validated contact-page__form", children: _jsxs("div", { className: "row", children: [_jsx("div", { className: "col-xl-6 col-lg-6 col-md-6", children: _jsx("div", { className: "contact-page__input-box", children: _jsx("input", { type: "text", name: "name", placeholder: "Your name", required: true }) }) }), _jsx("div", { className: "col-xl-6 col-lg-6 col-md-6", children: _jsx("div", { className: "contact-page__input-box", children: _jsx("input", { type: "email", name: "email", placeholder: "Your Email", required: true }) }) }), _jsx("div", { className: "col-xl-6 col-lg-6 col-md-6", children: _jsx("div", { className: "contact-page__input-box", children: _jsx("input", { type: "text", placeholder: "Mobile", name: "number" }) }) }), _jsx("div", { className: "col-xl-6 col-lg-6 col-md-6", children: _jsx("div", { className: "contact-page__input-box", children: _jsx("input", { type: "text", placeholder: "Company", name: "company" }) }) }), _jsxs("div", { className: "col-xl-12", children: [_jsx("div", { className: "contact-page__input-box text-message-box", children: _jsx("textarea", { name: "message", placeholder: "Messege" }) }), _jsx("div", { className: "contact-page__btn-box", children: _jsxs("button", { type: "submit", className: "thm-btn contact-page__btn", "data-loading-text": "Please wait...", children: [_jsx("span", { className: "thm-btn-text", children: "Send A Message" }), _jsx("span", { className: "thm-btn-icon-box", children: _jsx("i", { className: "fas fa-arrow-right" }) })] }) })] })] }) }), _jsx("p", { className: "ajax-response mb-0" })] }) })] }) }) }) })] }));
};
export default ContactMain;
