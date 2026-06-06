"use client";

import React, { useEffect, useState } from 'react';
const TypingEffect = ({
  stringArray = ['Rental', 'Booking']
}) => {
  const [typedText, setTypedText] = useState('');
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  // Typing effect
  useEffect(() => {
    const typedStrings = stringArray || [];
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseDuration = 2000;
    const timer = setTimeout(() => {
      const currentString = typedStrings[currentStringIndex];
      if (!isDeleting) {
        if (currentCharIndex < currentString.length) {
          setTypedText(currentString.substring(0, currentCharIndex + 1));
          setCurrentCharIndex(prev => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        if (currentCharIndex > 0) {
          setTypedText(currentString.substring(0, currentCharIndex - 1));
          setCurrentCharIndex(prev => prev - 1);
        } else {
          setIsDeleting(false);
          setCurrentStringIndex(prev => (prev + 1) % typedStrings.length);
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed);
    return () => clearTimeout(timer);
  }, [currentCharIndex, currentStringIndex, isDeleting, stringArray]);
  return <>
            {typedText}
            <span className="cursor" style={{
      animation: 'blink 1s infinite',
      marginLeft: '2px'
    }}>|</span>
        </>;
};
export default TypingEffect;