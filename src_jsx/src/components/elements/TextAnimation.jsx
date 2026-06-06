"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
const TextAnimation = ({ text, textColor, fontSize, isSpan = true }) => {
    const letters = Array.from(text);
    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: {
                staggerChildren: 0.03,
                delayChildren: 0.04 * i
            }
        })
    };
    const child = {
        hidden: {
            opacity: 0,
            x: 20,
            y: -20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100
            }
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100
            }
        }
    };
    return (_jsx(motion.div, { className: "normal-case", style: {
            whiteSpace: "normal",
            display: "inline-block",
            fontSize: `clamp(20px, 4vw, ${fontSize}px)`, // Responsive text
            lineHeight: "1.3",
            width: "100%",
        }, variants: container, initial: "hidden", whileInView: "visible", viewport: { once: true, amount: 0.1 }, children: isSpan ? letters.map((letter, index) => (_jsx(motion.span, { variants: child, style: {
                color: textColor
                    ? textColor === "black"
                        ? "#05173d"
                        : textColor
                    : "",
                display: "inline-block"
            }, children: letter === " " ? "\u00A0" : letter }, `1B8vc${index}`))) : letters.map((letter, index) => (_jsx(motion.b, { variants: child, style: {
                color: textColor
                    ? textColor === "black"
                        ? "#05173d"
                        : textColor
                    : "",
                display: "inline-block"
            }, children: letter === " " ? "\u00A0" : letter }, `5hD3t${index}`))) }));
};
export default TextAnimation;
