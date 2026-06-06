import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import AllProducts from './AllProducts';
import ProductSidebar from './ProductSidebar';
const ProductsMain = () => {
    return (_jsx("section", { className: "product", children: _jsx("div", { className: "container", children: _jsxs("div", { className: "row", children: [_jsx(AllProducts, {}), _jsx(ProductSidebar, {})] }) }) }));
};
export default ProductsMain;
