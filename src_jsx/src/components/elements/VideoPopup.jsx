"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useEffect } from "react";
import useGorentContext from "../context/useGorentContext";
const VideoPopup = () => {
    const { setShowVideoPopup, setCurrentVideoUrl, showVideoPopup, currentVideoUrl, } = useGorentContext();
    // Close popup (memoized)
    const onClose = useCallback(() => {
        setShowVideoPopup(false);
        setCurrentVideoUrl("");
    }, [setShowVideoPopup, setCurrentVideoUrl]);
    const extractYouTubeVideoId = useCallback((url) => {
        if (!url)
            return null;
        const patterns = [
            /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&\n?#]+)/,
            /(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([^&\n?#]+)/,
            /(?:https?:\/\/)?youtu\.be\/([^&\n?#]+)/,
            /(?:https?:\/\/)?(?:www\.)?youtube\.com\/v\/([^&\n?#]+)/,
        ];
        for (const pattern of patterns) {
            const match = url.match(pattern);
            if (match)
                return match[1];
        }
        return null;
    }, []);
    const getEmbedUrl = useCallback((url) => {
        if (!url) {
            return "https://www.youtube-nocookie.com/embed/MLpWrANjFbI?autoplay=1&rel=0&modestbranding=1&showinfo=0";
        }
        const videoId = extractYouTubeVideoId(url);
        if (videoId) {
            return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&showinfo=0&iv_load_policy=3`;
        }
        return url;
    }, [extractYouTubeVideoId]);
    useEffect(() => {
        if (typeof window === "undefined")
            return;
        const handleEscKey = (e) => {
            if (e.key === "Escape")
                onClose();
        };
        if (showVideoPopup) {
            document.addEventListener("keydown", handleEscKey);
            document.body.style.overflow = "hidden";
        }
        else {
            document.body.style.overflow = "";
        }
        return () => {
            document.removeEventListener("keydown", handleEscKey);
            document.body.style.overflow = "";
        };
    }, [showVideoPopup, onClose]);
    const handleOverlayClick = () => onClose();
    const handleContentClick = (e) => {
        e.stopPropagation();
    };
    if (!showVideoPopup)
        return null;
    const embedUrl = getEmbedUrl(currentVideoUrl);
    return (_jsx("div", { className: "video-popup-overlay active", onClick: handleOverlayClick, children: _jsxs("div", { className: "video-popup-content", onClick: handleContentClick, children: [_jsx("button", { type: "button", "aria-label": "Close video popup", className: "video-popup-close", onClick: onClose, children: "\u00D7" }), _jsx("iframe", { className: "video-iframe", width: "800", height: "450", src: embedUrl, title: "YouTube video player", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", allowFullScreen: true, referrerPolicy: "strict-origin-when-cross-origin", style: {
                        maxWidth: "100%",
                        height: "auto",
                        aspectRatio: "16 / 9",
                        border: "none",
                    } })] }) }));
};
export default VideoPopup;
