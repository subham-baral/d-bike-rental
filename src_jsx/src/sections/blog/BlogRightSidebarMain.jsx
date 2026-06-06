import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import BlogContent from './BlogContent';
import BlogSideBar from './BlogSideBar';
const BlogRightSidebarMain = () => {
    return (_jsx("section", { className: "blog-right-sidebar", children: _jsx("div", { className: "container", children: _jsxs("div", { className: "row", children: [_jsx(BlogContent, {}), _jsx(BlogSideBar, { mainWrapper: 'col-xl-4', wrapper: 'sidebar sidebar--two' })] }) }) }));
};
export default BlogRightSidebarMain;
