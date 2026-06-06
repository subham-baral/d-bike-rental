"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import AdvanceCountUp from '../../components/elements/AdvanceCountUp';
const counterDataTwo = [
    { id: 1, count: 1000, symbol: "+", text: "Vehicle fleet" },
    { id: 2, count: 10, symbol: "M+", text: "Miles of drive" },
    { id: 3, count: 15, symbol: "K+", text: "Booking reserved" },
    { id: 4, count: 50, symbol: "K+", text: "Pickup & drop" },
];
const CounterTwo = () => {
    return (_jsx("section", { className: "counter-two", children: _jsx("div", { className: "container", children: _jsx("div", { className: "counter-two__inner", children: _jsx("ul", { className: "list-unstyled counter-two__list", children: counterDataTwo.map((item) => (_jsx(motion.li, { initial: { x: item?.id % 2 === 0 ? 30 : -30, opacity: 0 }, whileInView: { x: 0, opacity: 1 }, transition: {
                            duration: 0.2 * item?.id,
                            ease: "easeOut"
                        }, viewport: { amount: 0.01, once: true }, children: _jsxs("div", { className: "counter-two__single", children: [_jsx("div", { className: "counter-two__shape-1" }), _jsx("div", { className: "counter-two__shape-2" }), _jsxs("div", { className: "counter-two__single-inner", children: [_jsx("div", { className: "counter-two__icon", children: _jsx("span", { className: "icon-car" }) }), _jsxs("div", { className: "counter-two__count-box", children: [_jsx("h3", { className: "odometer", children: _jsx(AdvanceCountUp, { ending: item?.count }) }), _jsx("span", { children: item?.symbol })] }), _jsx("p", { className: "counter-two__count-text", children: item?.text })] })] }) }, item.id))) }) }) }) }));
};
export default CounterTwo;
