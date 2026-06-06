import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Header from '../../sections/common/Header';
import Gallery from '../../sections/common/Gallery';
import Footer from '../../sections/common/Footer';
import StrickyHeader from '../../sections/common/StrickyHeader';
import SuspenseWrapper from '../../components/elements/SuspenseWrapper';
const InnerLayout = () => {
    return (_jsxs("div", { className: 'page-wrapper', children: [_jsx(Header, {}), _jsx(SuspenseWrapper, { children: _jsx(Outlet, {}) }), _jsx(Gallery, {}), _jsx(Footer, {}), _jsx(StrickyHeader, {})] }));
};
export default InnerLayout;
