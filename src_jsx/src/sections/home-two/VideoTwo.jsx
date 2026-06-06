"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import useGorentContext from '../../components/context/useGorentContext';
const VideoTwo = () => {
    const { handleVideoClick } = useGorentContext();
    return (_jsx("section", { className: "video-two", children: _jsx("div", { className: "container", children: _jsxs("div", { className: "video-two__inner", children: [_jsx("div", { className: "video-two__bg jarallax" }), _jsx("div", { className: "video-two__video-link", children: _jsx("a", { href: "#", onClick: (e) => handleVideoClick(e, "https://www.youtube.com/watch?v=Get7rqXYrbQ"), className: "video-popup", children: _jsxs("div", { className: "video-two__video-icon", children: [_jsx("span", { className: "icon-play" }), _jsx("i", { className: "ripple" })] }) }) }), _jsxs("h2", { className: "video-two__title", children: ["Want To Know More About? ", _jsx("br", {}), " Play Our Promotional Video Now!"] })] }) }) }));
};
export default VideoTwo;
