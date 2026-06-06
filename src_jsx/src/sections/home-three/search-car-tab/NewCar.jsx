"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import CustomSelect from '../../../components/elements/CustomSelect';
const NewCar = () => {
    return (_jsxs(motion.div, { initial: { x: 60, opacity: 0 }, whileInView: { x: 0, opacity: 1 }, transition: {
            duration: 0.5,
            ease: "easeOut"
        }, viewport: { amount: 0.1 }, className: "tabs-content__inner", children: [_jsx("form", { className: "contact-form-validated search-car__form", onSubmit: (e) => e.preventDefault(), children: _jsxs("div", { className: "row", children: [_jsx("div", { className: "col-xl-4 col-lg-4 col-md-4", children: _jsxs("div", { className: "search-car__input-box", children: [_jsxs("p", { className: "search-car__input-title", children: [" ", _jsx("span", { className: "icon-pin-2" }), "Pickup"] }), _jsx("div", { className: "select-box", children: _jsx(CustomSelect, { optionArray: [
                                                { value: "Enter a Location", label: "Enter a Location" },
                                                { value: "Enter a Location 01", label: "Enter a Location 01" },
                                                { value: "Enter a Location 02", label: "Enter a Location 02" },
                                                { value: "Enter a Location 03", label: "Enter a Location 03" },
                                                { value: "Enter a Location 04", label: "Enter a Location 04" },
                                                { value: "Enter a Location 05", label: "Enter a Location 05" }
                                            ] }) })] }) }), _jsx("div", { className: "col-xl-4 col-lg-4 col-md-4", children: _jsxs("div", { className: "search-car__input-box", children: [_jsxs("p", { className: "search-car__input-title", children: [" ", _jsx("span", { className: "icon-date" }), "Pickup Date"] }), _jsx("input", { type: "date", placeholder: "mm/dd/yyy", name: "date", id: "datepicker" })] }) }), _jsx("div", { className: "col-xl-4 col-lg-4 col-md-4", children: _jsxs("div", { className: "search-car__input-box", children: [_jsxs("p", { className: "search-car__input-title", children: [" ", _jsx("span", { className: "icon-clock" }), "Pickup Time"] }), _jsx("input", { type: "time", name: "time", placeholder: "Chose A Time" })] }) }), _jsx("div", { className: "col-xl-4 col-lg-4 col-md-4", children: _jsxs("div", { className: "search-car__input-box", children: [_jsxs("p", { className: "search-car__input-title", children: [" ", _jsx("span", { className: "icon-pin-2" }), "Drop of"] }), _jsx("div", { className: "select-box", children: _jsx(CustomSelect, { optionArray: [
                                                { value: "Enter a Location", label: "Enter a Location" },
                                                { value: "Enter a Location 01", label: "Enter a Location 01" },
                                                { value: "Enter a Location 02", label: "Enter a Location 02" },
                                                { value: "Enter a Location 03", label: "Enter a Location 03" },
                                                { value: "Enter a Location 04", label: "Enter a Location 04" },
                                                { value: "Enter a Location 05", label: "Enter a Location 05" }
                                            ] }) })] }) }), _jsx("div", { className: "col-xl-4 col-lg-4 col-md-4", children: _jsxs("div", { className: "search-car__input-box", children: [_jsxs("p", { className: "search-car__input-title", children: [" ", _jsx("span", { className: "icon-date" }), "Drop of Date"] }), _jsx("input", { type: "date", placeholder: "mm/dd/yyy", name: "date", id: "datepicker-2" })] }) }), _jsx("div", { className: "col-xl-4 col-lg-4 col-md-4", children: _jsxs("div", { className: "search-car__input-box", children: [_jsxs("p", { className: "search-car__input-title", children: [" ", _jsx("span", { className: "icon-clock" }), "Drop of Time"] }), _jsx("input", { type: "time", name: "time", placeholder: "Chose A Time" })] }) }), _jsx("div", { className: "col-xl-12", children: _jsx("div", { className: "search-car__btn-box", children: _jsxs("button", { type: "submit", className: "thm-btn", children: ["Find a Vehicle", _jsx("span", { className: "fas fa-search" })] }) }) })] }) }), _jsx("div", { className: "result" })] }));
};
export default NewCar;
