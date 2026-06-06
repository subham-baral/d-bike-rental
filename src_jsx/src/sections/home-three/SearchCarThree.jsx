"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import UsedCar from './search-car-tab/UsedCar';
import NewCar from './search-car-tab/NewCar';
import SportsCar from './search-car-tab/SportsCar';
import LuxuryCar from './search-car-tab/LuxuryCar';
const tab = [
    { tabId: 'usedcar', text: 'Used car' },
    { tabId: 'newcar', text: 'New car' },
    { tabId: 'sportscars', text: 'Sports car' },
    { tabId: 'luxurycars', text: 'Luxury Sedans' },
];
const SearchCarThree = () => {
    const [activeTab, setActiveTab] = useState('usedcar');
    return (_jsxs("section", { className: "search-car", children: [_jsx("div", { className: "search-car__shape-1" }), _jsx("div", { className: "search-car__shape-2" }), _jsx("div", { className: "container", children: _jsx("div", { className: "search-car__inner", children: _jsxs("div", { className: "search-car__tab-box tabs-box", children: [_jsx("ul", { className: "tab-buttons clearfix list-unstyled", children: tab.map((item) => (_jsx("li", { className: `tab-btn ${item?.tabId === activeTab ? "active-btn" : ""}`, onClick: () => setActiveTab(item?.tabId), children: _jsx("span", { children: item?.text }) }, item?.tabId))) }), _jsxs("div", { className: "tabs-content", children: [_jsx("div", { className: `tab ${activeTab === "usedcar" ? "active-tab" : ""}`, style: { display: `${activeTab === "usedcar" ? "block" : 'none'}` }, children: _jsx(UsedCar, {}) }), _jsx("div", { className: `tab ${activeTab === "newcar" ? "active-tab" : ""}`, style: { display: `${activeTab === "newcar" ? "block" : 'none'}` }, children: _jsx(NewCar, {}) }), _jsx("div", { className: `tab ${activeTab === "sportscars" ? "active-tab" : ""}`, style: { display: `${activeTab === "sportscars" ? "block" : 'none'}` }, children: _jsx(SportsCar, {}) }), _jsx("div", { className: `tab ${activeTab === "luxurycars" ? "active-tab" : ""}`, style: { display: `${activeTab === "luxurycars" ? "block" : 'none'}` }, children: _jsx(LuxuryCar, {}) })] })] }) }) })] }));
};
export default SearchCarThree;
