import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import AdvanceCountUp from '../../components/elements/AdvanceCountUp';
// Data Array
const counterData = [
    {
        id: 1,
        iconClass: 'icon-car',
        count: 1050,
        suffix: 'K',
        label: 'Vehicle fleet',
    },
    {
        id: 2,
        iconClass: 'icon-mileage',
        count: 5000,
        suffix: '+',
        label: 'Miles of drive',
    },
    {
        id: 3,
        iconClass: 'icon-reviews',
        count: 140,
        suffix: 'K',
        label: 'Happy customer',
    },
    {
        id: 4,
        iconClass: 'icon-pin-2',
        count: 1000,
        suffix: '+',
        label: 'Pickup & drop',
    },
];
const CounterThree = () => {
    return (_jsxs("section", { className: "counter-three", children: [_jsx("div", { className: "counter-three__bg jarallax" }), _jsx("div", { className: "container", children: _jsx("ul", { className: "row list-unstyled", children: counterData.map((item) => (_jsx("li", { className: "col-xl-3 col-lg-6 col-md-6", children: _jsxs("div", { className: "counter-three__single", children: [_jsx("div", { className: "counter-three__icon", children: _jsx("span", { className: item.iconClass }) }), _jsxs("div", { className: "counter-three__count-box", children: [_jsx("h3", { className: "odometer", children: _jsx(AdvanceCountUp, { ending: item?.count }) }), _jsx("span", { children: item.suffix })] }), _jsx("p", { className: "counter-three__count-text", children: item.label })] }) }, item.id))) }) })] }));
};
export default CounterThree;
