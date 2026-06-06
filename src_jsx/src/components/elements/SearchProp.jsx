"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import useGorentContext from '../context/useGorentContext';
const SearchProp = () => {
    const { isSearch, setIsSearch } = useGorentContext();
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const search = form.search.value;
        if (search) {
            form.reset();
        }
        ;
    };
    return (_jsxs("div", { className: `search-popup ${isSearch ? 'active' : ''}`, children: [_jsx("div", { className: "search-popup__overlay search-toggler", onClick: () => setIsSearch((pre) => !pre) }), _jsx("div", { className: "search-popup__content", children: _jsxs("form", { onSubmit: handleSubmit, children: [_jsx("label", { htmlFor: "search", className: "sr-only", children: "search here" }), _jsx("input", { type: "text", id: "search", name: 'search', placeholder: "Search Here..." }), _jsx("button", { type: "submit", "aria-label": "search submit", className: "thm-btn", children: _jsx("i", { className: "fas fa-search" }) })] }) })] }));
};
export default SearchProp;
