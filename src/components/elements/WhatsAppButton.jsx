"use client";

import React from 'react';

const WhatsAppButton = () => {
    return (
        <a 
            href="https://wa.me/918112003520" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="whatsapp-float-btn"
            aria-label="Chat on WhatsApp"
        >
            <i className="fab fa-whatsapp"></i>
            <style jsx>{`
                @keyframes pulse-whatsapp {
                    0% {
                        box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.8);
                    }
                    70% {
                        box-shadow: 0 0 0 15px rgba(37, 211, 102, 0);
                    }
                    100% {
                        box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
                    }
                }
                .whatsapp-float-btn {
                    position: fixed;
                    width: 60px;
                    height: 60px;
                    bottom: 40px;
                    right: 40px;
                    background-color: #25d366;
                    color: #FFF !important;
                    border-radius: 50px;
                    text-align: center;
                    font-size: 32px;
                    z-index: 1000;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                    animation: pulse-whatsapp 2s infinite;
                }
                .whatsapp-float-btn i {
                    color: #FFF !important;
                }
                .whatsapp-float-btn:hover {
                    background-color: #128c7e;
                    color: #fff !important;
                    transform: translateY(-3px);
                }
                .whatsapp-float-btn:hover i {
                    color: #FFF !important;
                }
                @media (max-width: 767px) {
                    .whatsapp-float-btn {
                        width: 50px;
                        height: 50px;
                        bottom: 20px;
                        right: 20px;
                        font-size: 26px;
                    }
                }
            `}</style>
        </a>
    );
};

export default WhatsAppButton;
