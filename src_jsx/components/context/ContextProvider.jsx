"use client";

import React, { useState } from 'react';
import GorentContext from './GorentContext';
const ContextProvider = ({
  children
}) => {
  const [isMobileManu, setIsMobileManu] = useState(false);
  const [isSidebar, setIsSidebar] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [showVideoPopup, setShowVideoPopup] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");
  const [activeSection, setActiveSection] = useState("home");
  const [cartCount, setCartCount] = useState(4);
  const handleVideoClick = (e, videoUrl = "https://www.youtube.com/embed/MLpWrANjFbI?autoplay=1") => {
    e.preventDefault();
    setCurrentVideoUrl(videoUrl);
    setShowVideoPopup(true);
  };
  const info = {
    isMobileManu,
    setIsMobileManu,
    isSidebar,
    setIsSidebar,
    isSearch,
    setIsSearch,
    showVideoPopup,
    setShowVideoPopup,
    currentVideoUrl,
    setCurrentVideoUrl,
    handleVideoClick,
    activeSection,
    setActiveSection,
    cartCount,
    setCartCount
  };
  return <GorentContext.Provider value={info}>
            {children}
        </GorentContext.Provider>;
};
export default ContextProvider;