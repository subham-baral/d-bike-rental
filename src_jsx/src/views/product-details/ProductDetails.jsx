import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Banner from '../../sections/common/Banner';
import ProductDetailsMain from '../../sections/product-details/ProductDetailsMain';
import ProductDescription from '../../sections/product-details/ProductDescription';
import ProductCarousel from '../../sections/product-details/ProductCarousel';
const ProductDetails = () => {
    return (_jsxs(_Fragment, { children: [_jsx(Banner, { breadcrumb: 'Product Details' }), _jsx(ProductDetailsMain, {}), _jsx(ProductDescription, {}), _jsx(ProductCarousel, {})] }));
};
export default ProductDetails;
