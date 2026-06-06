"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const QuantityOfProduct = ({ value = 1, onChange }) => {
    return (_jsxs("div", { className: "quantity-box", children: [_jsx("button", { type: "button", className: "sub", onClick: () => onChange?.(value > 1 ? value - 1 : value), children: _jsx("i", { className: "fa fa-minus" }) }), _jsx("input", { type: "number", value: value, onChange: (e) => onChange?.(Number(e.target.value) || 1) }), _jsx("button", { type: "button", className: "add", onClick: () => onChange?.(value + 1), children: _jsx("i", { className: "fa fa-plus" }) })] }));
};
export default QuantityOfProduct;
