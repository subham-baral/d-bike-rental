"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
const AdvanceCountUp = ({ ending = 32, durations = 3, }) => {
    const [animationRef, animationInView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    if (ending) {
        return (_jsx("span", { ref: animationRef, children: animationInView && _jsx(CountUp, { start: 0, end: ending, duration: durations, delay: 0, separator: ",", decimal: ".", prefix: "", suffix: "" }) }));
    }
    return _jsx("span", { children: 200 });
};
export default AdvanceCountUp;
