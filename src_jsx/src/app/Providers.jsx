"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ContextProvider from '../components/context/ContextProvider';
import useGorentContext from '../components/context/useGorentContext';
import CustomCursor from '../components/elements/CustomCursor';
import VideoPopup from '../components/elements/VideoPopup';
import SearchProp from '../components/elements/SearchProp';
import SideBar from '../components/elements/SideBar';
import MobileNav from '../components/elements/MobileNav';
import ScrollToTop from '../components/elements/ScrollToTop';
const GlobalElements = ({ children }) => {
    const { isMobileManu, isSearch } = useGorentContext();
    return (_jsxs("div", { className: `custom-cursor ${isMobileManu || isSearch ? 'locked' : ''}`, children: [_jsx(CustomCursor, {}), children, _jsx(SearchProp, {}), _jsx(SideBar, {}), _jsx(MobileNav, {}), _jsx(ScrollToTop, {}), _jsx(VideoPopup, {})] }));
};
export default function Providers({ children }) {
    return (_jsx(ContextProvider, { children: _jsx(GlobalElements, { children: children }) }));
}
