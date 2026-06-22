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
  // Default to empty string if no value provided to show the first option (placeholder)
  const [selected, setSelected] = React.useState(value || "");
  const selectRef = useRef(null);

  useEffect(() => {
      // Sync local state if parent value changes
      if (value !== undefined) {
          setSelected(value);
      }
  }, [value]);

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

  // Find the label for the currently selected value
  const selectedOption = optionArray.find(opt => opt.value === selected) || optionArray[0];

  return <div ref={selectRef} className={`nice-select selectmenu wide ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
            <span className="current">
                {selectedOption ? selectedOption.label : "Select..."}
            </span>

            <ul className="list">
                {optionArray.map((item, index) => <li key={item?.id || index} data-value={item.value} className={`option ${selected === item.value ? "focus" : ""}`} onClick={() => handleSelect(item.value)}>
                        {item.label}
                    </li>)}
            </ul>
        </div>;
};
export default CustomSelect;