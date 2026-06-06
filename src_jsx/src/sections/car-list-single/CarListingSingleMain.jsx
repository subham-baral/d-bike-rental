import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ListingSliders from './ListingSliders';
import ListingBottomLeft from './ListingBottomLeft';
import ListingBottomRight from './ListingBottomRight';
import ListingTop from './ListingTop';
const CarListingSingleMain = () => {
    return (_jsx("section", { className: "listing-single", children: _jsxs("div", { className: "container", children: [_jsx(ListingTop, {}), _jsx(ListingSliders, {}), _jsx("div", { className: "listing-single__bottom", children: _jsxs("div", { className: "row", children: [_jsx(ListingBottomLeft, {}), _jsx(ListingBottomRight, {})] }) })] }) }));
};
export default CarListingSingleMain;
