import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import BlogSideBar from './BlogSideBar';
import BlogContent from './BlogContent';
const BlogLeftSidebarMain = () => {
    return (_jsx("section", { className: "blog-left-sidebar", children: _jsx("div", { className: "container", children: _jsxs("div", { className: "row", children: [_jsx(BlogSideBar, { mainWrapper: 'col-xl-4', wrapper: 'sidebar sidebar--two' }), _jsx(BlogContent, {})] }) }) }));
};
export default BlogLeftSidebarMain;
