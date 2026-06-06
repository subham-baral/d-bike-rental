import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Marquee from 'react-fast-marquee';
const slidingTextData = [
    { id: 1, text: "Premium", icon: "icon-jeep" },
    { id: 2, text: "Rates", icon: "icon-cuv" },
    { id: 3, text: "Car", icon: "icon-jeep" },
    { id: 4, text: "Rental", icon: "icon-cuv" },
    { id: 5, text: "Worldwide", icon: "icon-jeep" },
    { id: 6, text: "Affordable", icon: "icon-cuv" },
];
const DATAONE = [
    ...slidingTextData,
    ...slidingTextData,
    ...slidingTextData,
    ...slidingTextData,
    ...slidingTextData,
    ...slidingTextData,
    ...slidingTextData,
    ...slidingTextData,
    ...slidingTextData,
    ...slidingTextData,
    ...slidingTextData,
    ...slidingTextData,
];
const SlidingTextOne = () => {
    return (_jsx("section", { className: "sliding-text-one", children: _jsx("div", { className: "sliding-text-one__wrap", children: _jsx("ul", { className: "sliding-text__list list-unstyled marquee_mode", children: _jsx(Marquee, { speed: 60, pauseOnHover: true, direction: "left", gradient: false, children: DATAONE.map((item, i) => (_jsx("span", { children: _jsxs("h2", { className: "sliding-text__title", "data-hover": item.text, children: [item.text, _jsx("span", { className: item.icon })] }) }, i))) }) }) }) }));
};
export default SlidingTextOne;
