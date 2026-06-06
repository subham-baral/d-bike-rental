"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { motion } from "framer-motion";
import CustomSelect from '../../../components/elements/CustomSelect';
const LuxuryCar = () => {
    const [pickupLocation, setPickupLocation] = useState('');
    const [pickupDate, setPickupDate] = useState('');
    const [pickupTime, setPickupTime] = useState('');
    const [dropoffLocation, setDropoffLocation] = useState('');
    const [dropoffDate, setDropoffDate] = useState('');
    const [dropoffTime, setDropoffTime] = useState('');
    const handleSearch = (e) => {
        e.preventDefault();
        const searchData = {
            pickupLocation,
            pickupDate,
            pickupTime,
            dropoffLocation,
            dropoffDate,
            dropoffTime,
        };
        if (!pickupLocation ||
            !pickupDate ||
            !pickupTime ||
            !dropoffLocation ||
            !dropoffDate ||
            !dropoffTime) {
            if (searchData)
                return;
        }
        // 🚀 API / route navigation here
        // navigate(`/cars?${new URLSearchParams(searchData)}`)
    };
    return (_jsxs(motion.div, { initial: { y: 60, opacity: 0 }, whileInView: { y: 0, opacity: 1 }, transition: {
            duration: 0.5,
            ease: "easeOut"
        }, viewport: { amount: 0.1 }, className: "tabs-content__inner", children: [_jsx("form", { className: "contact-form-validated search-car__form", onSubmit: handleSearch, children: _jsxs("div", { className: "row", children: [_jsx("div", { className: "col-xl-4 col-lg-4 col-md-4", children: _jsxs("div", { className: "search-car__input-box", children: [_jsxs("p", { className: "search-car__input-title", children: [" ", _jsx("span", { className: "icon-pin-2" }), "Pickup"] }), _jsx("div", { className: "select-box", children: _jsx(CustomSelect, { optionArray: [
                                                { value: "Enter a Location", label: "Enter a Location" },
                                                { value: "Enter a Location 01", label: "Enter a Location 01" },
                                                { value: "Enter a Location 02", label: "Enter a Location 02" },
                                                { value: "Enter a Location 03", label: "Enter a Location 03" },
                                                { value: "Enter a Location 04", label: "Enter a Location 04" },
                                                { value: "Enter a Location 05", label: "Enter a Location 05" }
                                            ], value: pickupLocation, onChange: setPickupLocation }) })] }) }), _jsx("div", { className: "col-xl-4 col-lg-4 col-md-4", children: _jsxs("div", { className: "search-car__input-box", children: [_jsxs("p", { className: "search-car__input-title", children: [" ", _jsx("span", { className: "icon-date" }), "Pickup Date"] }), _jsx("input", { type: "date", value: pickupDate, onChange: (e) => setPickupDate(e.target.value) })] }) }), _jsx("div", { className: "col-xl-4 col-lg-4 col-md-4", children: _jsxs("div", { className: "search-car__input-box", children: [_jsxs("p", { className: "search-car__input-title", children: [" ", _jsx("span", { className: "icon-clock" }), "Pickup Time"] }), _jsx("input", { type: "time", value: pickupTime, onChange: (e) => setPickupTime(e.target.value) })] }) }), _jsx("div", { className: "col-xl-4 col-lg-4 col-md-4", children: _jsxs("div", { className: "search-car__input-box", children: [_jsxs("p", { className: "search-car__input-title", children: [" ", _jsx("span", { className: "icon-pin-2" }), "Drop of"] }), _jsx("div", { className: "select-box", children: _jsx(CustomSelect, { optionArray: [
                                                { value: "Enter a Location", label: "Enter a Location" },
                                                { value: "Enter a Location 01", label: "Enter a Location 01" },
                                                { value: "Enter a Location 02", label: "Enter a Location 02" },
                                                { value: "Enter a Location 03", label: "Enter a Location 03" },
                                                { value: "Enter a Location 04", label: "Enter a Location 04" },
                                                { value: "Enter a Location 05", label: "Enter a Location 05" }
                                            ], value: dropoffLocation, onChange: setDropoffLocation }) })] }) }), _jsx("div", { className: "col-xl-4 col-lg-4 col-md-4", children: _jsxs("div", { className: "search-car__input-box", children: [_jsxs("p", { className: "search-car__input-title", children: [" ", _jsx("span", { className: "icon-date" }), "Drop of Date"] }), _jsx("input", { type: "date", value: dropoffDate, onChange: (e) => setDropoffDate(e.target.value) })] }) }), _jsx("div", { className: "col-xl-4 col-lg-4 col-md-4", children: _jsxs("div", { className: "search-car__input-box", children: [_jsxs("p", { className: "search-car__input-title", children: [" ", _jsx("span", { className: "icon-clock" }), "Drop of Time"] }), _jsx("input", { type: "time", value: dropoffTime, onChange: (e) => setDropoffTime(e.target.value) })] }) }), _jsx("div", { className: "col-xl-12", children: _jsx("div", { className: "search-car__btn-box", children: _jsxs("button", { type: "submit", className: "thm-btn", children: ["Find a Vehicle", _jsx("span", { className: "fas fa-search" })] }) }) })] }) }), _jsx("div", { className: "result" })] }));
};
export default LuxuryCar;
