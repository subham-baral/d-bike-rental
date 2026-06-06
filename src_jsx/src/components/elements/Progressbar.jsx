"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { useInView } from "react-intersection-observer";
const Progresbar = ({ title = "", value = 80 }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        if (inView) {
            let start = 0;
            const end = value;
            const duration = 700; // total animation time in ms
            const frameRate = 20; // update every 20ms
            const increment = end / (duration / frameRate);
            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    start = end;
                    clearInterval(timer);
                }
                setProgress(Math.round(start)); // both text + bar update together
            }, frameRate);
            return () => clearInterval(timer);
        }
    }, [inView, value]);
    return (_jsx("li", { children: _jsxs("div", { className: "about-one__progress", ref: ref, children: [_jsx("h4", { className: "about-one__progress-title", children: title }), _jsxs("div", { className: "bar", children: [_jsxs("span", { className: "countText", children: [progress, "%"] }), _jsx(ProgressBar, { completed: progress, maxCompleted: 100, bgColor: "#FFB51D", baseBgColor: "#E3E3E3", height: "10px", isLabelVisible: false, className: "progressWrapper", barContainerClassName: "barContainer", animateOnRender: false })] })] }) }));
};
export default Progresbar;
