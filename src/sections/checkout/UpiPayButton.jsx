"use client";

import React from 'react';

export default function UpiPayButton({
  amount,
  upiId = "9937958910-6@ybl",
  businessName = "One9Ty Digital Solution",
  orderId,
  phone = "",
  name = ""
}) {
  // Note formatted as requested: Booking Reference ID: DBR-XXXXXX Mobile Number, Name
  const note = `Booking Reference ID: ${orderId} ${phone} ${name}`.trim();
  const upiLink = `upi://pay?pa=${encodeURIComponent(upiId)}&pn=${encodeURIComponent(businessName)}&am=${amount}&cu=INR&tn=${encodeURIComponent(note)}`;

  return (
    <div className="upi-pay-container">
      <a 
        href={upiLink}
        className="upi-pay-btn"
      >
        <span className="upi-icon-wrap">
          <i className="fas fa-bolt"></i>
        </span>
        <span>Pay ₹{amount} via UPI App</span>
        <span className="upi-arrow">
          <i className="fas fa-arrow-right"></i>
        </span>
      </a>

      <div className="upi-badges">
        <span className="upi-id-pill">
          <i className="fas fa-mobile-alt"></i> UPI ID: <strong>{upiId}</strong>
        </span>
        <div className="supported-apps">
          <span>GPay</span>
          <span>•</span>
          <span>PhonePe</span>
          <span>•</span>
          <span>Paytm</span>
          <span>•</span>
          <span>BHIM</span>
        </div>
      </div>

      <style jsx>{`
        .upi-pay-container {
          width: 100%;
          margin: 24px 0 16px;
        }
        .upi-pay-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          width: 100%;
          background: #16a34a;
          color: #ffffff;
          padding: 16px 24px;
          border-radius: 12px;
          font-size: 18px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.25s ease;
          box-shadow: 0 4px 14px rgba(22, 163, 74, 0.35);
        }
        .upi-pay-btn:hover {
          background: #15803d;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(22, 163, 74, 0.45);
          color: #ffffff;
        }
        .upi-icon-wrap {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          font-size: 16px;
        }
        .upi-arrow {
          margin-left: 4px;
          transition: transform 0.2s ease;
        }
        .upi-pay-btn:hover .upi-arrow {
          transform: translateX(4px);
        }
        .upi-badges {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 10px;
          padding: 0 4px;
          flex-wrap: wrap;
          gap: 8px;
        }
        .upi-id-pill {
          font-size: 12.5px;
          color: #475569;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #f1f5f9;
          padding: 4px 10px;
          border-radius: 6px;
        }
        .upi-id-pill strong {
          color: #0e426a;
          font-family: monospace;
          font-size: 13px;
        }
        .supported-apps {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: #64748b;
          font-weight: 600;
        }
        @media (max-width: 600px) {
          .upi-badges {
            flex-direction: column;
            align-items: center;
            gap: 6px;
          }
        }
      `}</style>
    </div>
  );
}
