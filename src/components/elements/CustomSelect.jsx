"use client";

import React, { useEffect, useRef } from "react";
const defaultOptions = [{
  value: "Enter a Location",
  label: "Enter a Location"
}, {
  value: "Enter a Location 01",
  label: "Enter a Location 01"
}, {
  value: "Enter a Location 02",
  label: "Enter a Location 02"
}];
const CustomSelect = ({
  optionArray = defaultOptions,
  value,
  onChange
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(value || optionArray[0].value);
  const selectRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = e => {
      if (selectRef.current && !selectRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const handleSelect = val => {
    setSelected(val);
    onChange?.(val);
    setIsOpen(false);
  };
  return <div ref={selectRef} className={`nice-select selectmenu wide ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
            <span className="current">
                {selected}
            </span>

            <ul className="list">
                {optionArray.map((item, index) => <li key={item?.id || index} data-value={item.value} className={`option ${selected === item.value ? "focus" : ""}`} onClick={() => handleSelect(item.value)}>
                        {item.label}
                    </li>)}
            </ul>
        </div>;
};
export default CustomSelect;