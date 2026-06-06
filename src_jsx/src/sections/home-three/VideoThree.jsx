"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Link from 'next/link';
import useGorentContext from '../../components/context/useGorentContext';
const VideoThree = () => {
    const { handleVideoClick } = useGorentContext();
    return (_jsxs("section", { className: "video-one", children: [_jsx("div", { className: "video-one__bg jarallax" }), _jsx("div", { className: "container", children: _jsxs("div", { className: "video-one__inner", children: [_jsxs("h2", { className: "video-one__title", children: ["Want To Know More About? ", _jsx("br", {}), " Play Our Promotional Video Now!"] }), _jsx("div", { className: "video-one__video-link", children: _jsx(Link, { href: "#", className: "video-popup", onClick: (e) => handleVideoClick(e, 'https://www.youtube.com/watch?v=Get7rqXYrbQ'), children: _jsxs("div", { className: "video-one__video-icon", children: [_jsx("span", { className: "icon-play" }), _jsx("i", { className: "ripple" })] }) }) })] }) })] }));
};
export default VideoThree;
