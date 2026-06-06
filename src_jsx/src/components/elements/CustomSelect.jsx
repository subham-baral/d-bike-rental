"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect, useRef } from "react";
const defaultOptions = [
    { value: "Enter a Location", label: "Enter a Location" },
    { value: "Enter a Location 01", label: "Enter a Location 01" },
    { value: "Enter a Location 02", label: "Enter a Location 02" },
];
const CustomSelect = ({ optionArray = defaultOptions, value, onChange, }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [selected, setSelected] = React.useState(value || optionArray[0].value);
    const selectRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (selectRef.current && !selectRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    const handleSelect = (val) => {
        setSelected(val);
        onChange?.(val);
        setIsOpen(false);
    };
    return (_jsxs("div", { ref: selectRef, className: `nice-select selectmenu wide ${isOpen ? "open" : ""}`, onClick: () => setIsOpen(!isOpen), children: [_jsx("span", { className: "current", children: selected }), _jsx("ul", { className: "list", children: optionArray.map((item, index) => (_jsx("li", { "data-value": item.value, className: `option ${selected === item.value ? "focus" : ""}`, onClick: () => handleSelect(item.value), children: item.label }, item?.id || index))) })] }));
};
export default CustomSelect;
