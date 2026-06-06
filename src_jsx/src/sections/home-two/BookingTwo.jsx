"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { motion } from "framer-motion";
import CustomSelect from '../../components/elements/CustomSelect';
import titleImg from "../../assets/images/resources/booking-two-img-1.jpg";
const BookingTwo = () => {
    const [pickupLocation, setPickupLocation] = useState('');
    const [dropoffLocation, setDropoffLocation] = useState('');
    const [carType, setCarType] = useState('');
    const [date, setDate] = useState('');
    const validate = () => {
        const newErrors = {};
        if (!pickupLocation || pickupLocation === 'Enter a Location')
            newErrors.pickup = 'Pickup location required';
        if (!dropoffLocation || dropoffLocation === 'Enter a Location')
            newErrors.dropoff = 'Dropoff location required';
        if (!carType)
            newErrors.carType = 'Car type required';
        if (!date)
            newErrors.date = 'Date required';
        return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate())
            return;
        const bookingData = {
            pickupLocation,
            dropoffLocation,
            carType,
            date,
        };
        if (bookingData)
            return;
    };
    return (_jsx("section", { className: "booking-two", children: _jsx("div", { className: "container", children: _jsxs("div", { className: "row", children: [_jsx("div", { className: "col-xl-7 col-lg-6", children: _jsx(motion.div, { initial: { x: -80, opacity: 0 }, whileInView: { x: 0, opacity: 1 }, transition: {
                                duration: 0.6,
                                ease: "easeOut"
                            }, viewport: { amount: 0.01, once: true }, className: "booking-two__left", children: _jsxs("div", { className: "booking-one__content", children: [_jsxs("div", { className: "booking-one__title-box", children: [_jsx("div", { className: "booking-one__title-shape" }), _jsx("h3", { className: "booking-one__title", children: "Book a car" })] }), _jsx("form", { className: "booking-one__form", onSubmit: handleSubmit, children: _jsxs("div", { className: "row", children: [_jsx("div", { className: "col-xl-6 col-lg-6 col-md-6", children: _jsxs("div", { className: "booking-one__input-box", children: [_jsxs("p", { className: "booking-one__input-title", children: [_jsx("span", { className: "icon-pin-2" }), " Pickup"] }), _jsx("div", { className: "select-box", children: _jsx(CustomSelect, { optionArray: [
                                                                        { value: "Enter a Location", label: "Enter a Location" },
                                                                        { value: "Enter a Location 01", label: "Enter a Location 01" },
                                                                        { value: "Enter a Location 02", label: "Enter a Location 02" },
                                                                        { value: "Enter a Location 03", label: "Enter a Location 03" },
                                                                        { value: "Enter a Location 04", label: "Enter a Location 04" },
                                                                        { value: "Enter a Location 05", label: "Enter a Location 05" },
                                                                    ], value: pickupLocation, onChange: (value) => setPickupLocation(value) }) })] }) }), _jsx("div", { className: "col-xl-6 col-lg-6 col-md-6", children: _jsxs("div", { className: "booking-one__input-box", children: [_jsxs("p", { className: "booking-one__input-title", children: [_jsx("span", { className: "icon-pin-2" }), " Drop off"] }), _jsx("div", { className: "select-box", children: _jsx(CustomSelect, { optionArray: [
                                                                        { value: "Enter a Location", label: "Enter a Location" },
                                                                        { value: "Enter a Location 01", label: "Enter a Location 01" },
                                                                        { value: "Enter a Location 02", label: "Enter a Location 02" },
                                                                        { value: "Enter a Location 03", label: "Enter a Location 03" },
                                                                        { value: "Enter a Location 04", label: "Enter a Location 04" },
                                                                        { value: "Enter a Location 05", label: "Enter a Location 05" },
                                                                    ], value: dropoffLocation, onChange: (value) => setDropoffLocation(value) }) })] }) }), _jsx("div", { className: "col-xl-6 col-lg-6 col-md-6", children: _jsxs("div", { className: "booking-one__input-box", children: [_jsxs("p", { className: "booking-one__input-title", children: [_jsx("span", { className: "icon-cuv" }), " Your car type"] }), _jsx("div", { className: "select-box", children: _jsx(CustomSelect, { optionArray: [
                                                                        { value: "Sedan", label: "Sedan" },
                                                                        { value: "SUV", label: "SUV" },
                                                                        { value: "Microbus", label: "Microbus" },
                                                                        { value: "Luxury", label: "Luxury" },
                                                                    ], value: carType, onChange: (value) => setCarType(value) }) })] }) }), _jsx("div", { className: "col-xl-6 col-lg-6 col-md-6", children: _jsxs("div", { className: "booking-one__input-box", children: [_jsxs("p", { className: "booking-one__input-title", children: [_jsx("span", { className: "icon-date" }), " Date"] }), _jsx("input", { type: "date", placeholder: "mm/dd/yyy", name: "date", id: "datepicker", value: date, onChange: (e) => setDate(e.target.value) })] }) }), _jsx("div", { className: "col-xl-12", children: _jsx("div", { className: "booking-one__btn-box", children: _jsxs("button", { type: "submit", className: "thm-btn", children: ["Book Now", _jsx("span", { className: "fas fa-arrow-right" })] }) }) })] }) }), _jsx("div", { className: "result" })] }) }) }), _jsx(motion.div, { initial: { x: 80, opacity: 0 }, whileInView: { x: 0, opacity: 1 }, transition: {
                            duration: 0.6,
                            ease: "easeOut"
                        }, viewport: { amount: 0.01, once: true }, className: "col-xl-5 col-lg-6", children: _jsx("div", { className: "booking-two__right", children: _jsx("div", { className: "booking-two__img", children: _jsx("img", { src: titleImg, alt: "Image" }) }) }) })] }) }) }));
};
export default BookingTwo;
