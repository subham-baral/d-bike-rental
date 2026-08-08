"use client";

import React, { useState } from 'react';
import ListingBottomLeft from './ListingBottomLeft';
import ListingBottomRight from './ListingBottomRight';
import DynamicBookingForm from './DynamicBookingForm';

const WhatsappIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.12.553 4.11 1.519 5.84L0 24l6.326-1.479A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.92 0-3.715-.494-5.284-1.361l-.379-.21-3.754.877.925-3.633-.243-.377C2.35 15.688 1.8 13.9 1.8 12 1.8 6.376 6.376 1.8 12 1.8S22.2 6.376 22.2 12 17.624 22.2 12 22.2z"/>
  </svg>
);

const MileageIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B79B5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 14l3-3"/>
    <path d="M3.34 19a10 10 0 1 1 17.32 0"/>
  </svg>
);

const FuelIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B79B5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="22" x2="15" y2="22"/>
    <line x1="4" y1="9" x2="14" y2="9"/>
    <path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18"/>
    <path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5"/>
  </svg>
);

const SeatIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B79B5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="17 11 12 6 7 11"/>
    <polyline points="17 13 12 18 7 13"/>
  </svg>
);

const DepositIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B79B5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const BookNowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
  </svg>
);

const LocationPinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0B79B5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const CarListingSingleMain = ({ vehicle }) => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const title = vehicle?.data?.title || 'Vehicle';
  const coverUrl = vehicle?.data?.cover_image?.file_path
    ? `https://cdn.one9ty.com/one9ty-travel/${vehicle.data.cover_image.file_path}`
    : '/assets/images/resources/listing-1-1.png';

  const vehicleType = vehicle?.taxonomy_terms_resolved?.find(
    (taxonomy) => taxonomy.taxonomy_slug === 'vehicle-type'
  )?.name || 'Scooter';

  const price = vehicle?.data?.price_per_day || 499;
  const pricePerHour = vehicle?.data?.price_per_hour || 99;
  const mileage = vehicle?.data?.mileage ? `${vehicle.data.mileage} kmpl` : '52 kmpl';
  const fuelCapacity = vehicle?.data?.fuel_capacity || '5.0 L';
  const seatHeight = vehicle?.data?.seat_height || '773 mm';
  const deposit = vehicle?.data?.deposit ? `₹${vehicle.data.deposit}` : '₹499';

  const phone = vehicle?.data?.phone || '+91 9178322260';
  const rawPhone = phone.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${rawPhone || '9178322260'}?text=${encodeURIComponent(`Hi, I am interested in renting the ${title} from your website.`)}`;

  return (
    <section className="listing-single-wrapper">
      <style jsx>{`
        .listing-single-wrapper {
          padding: 30px 0 60px;
          background: #ffffff;
        }

        .showcase-breadcrumb {
          font-size: 14px;
          color: #64748b;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .showcase-breadcrumb a {
          color: #64748b;
          text-decoration: none;
        }

        .showcase-breadcrumb a:hover {
          color: #0b79b5;
        }

        .showcase-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: start;
          margin-bottom: 50px;
        }

        @media (max-width: 991px) {
          .showcase-card {
            grid-template-columns: 1fr;
            gap: 30px;
          }
        }

        /* Left Image Container */
        .showcase-img-box {
          background: #f1f5f9;
          border-radius: 20px;
          padding: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 420px;
          position: relative;
          box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.02);
        }

        .showcase-img-box img {
          max-width: 100%;
          max-height: 380px;
          object-fit: contain;
          transition: transform 0.4s ease;
        }

        .showcase-img-box:hover img {
          transform: scale(1.03);
        }

        /* Right Content Area */
        .showcase-details {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .showcase-title {
          font-size: 32px;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.2;
          margin: 0;
        }

        .showcase-subtitle {
          font-size: 15px;
          color: #64748b;
          margin-top: -12px;
        }

        /* Price Cards Grid */
        .price-cards-wrap {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        @media (max-width: 480px) {
          .price-cards-wrap {
            grid-template-columns: 1fr;
          }
        }

        .single-price-card {
          border: 1.5px solid #e2e8f0;
          border-radius: 16px;
          padding: 14px 18px;
          background: #f8fafc;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .single-price-card.featured {
          border-color: #bae6fd;
          background: #f0f9ff;
        }

        .price-label-text {
          font-size: 13px;
          color: #64748b;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .price-value-box {
          display: flex;
          align-items: baseline;
          gap: 4px;
        }

        .price-currency {
          font-size: 18px;
          font-weight: 800;
          color: #087dba;
        }

        .price-number {
          font-size: 28px;
          font-weight: 800;
          color: #087dba;
        }

        .price-unit {
          font-size: 13px;
          color: #64748b;
          font-weight: 600;
        }

        .price-badge-tag {
          background: #e0f2fe;
          color: #0369a1;
          font-size: 11px;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: 10px;
        }

        /* 2x2 Specs Grid */
        .specs-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .spec-item {
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 14px 18px;
          display: flex;
          align-items: center;
          gap: 14px;
          background: #ffffff;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .spec-item:hover {
          border-color: #cbd5e1;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
        }

        .spec-icon-wrap {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: #f0f9ff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .spec-content {
          display: flex;
          flex-direction: column;
        }

        .spec-label {
          font-size: 12px;
          color: #64748b;
          font-weight: 500;
        }

        .spec-value {
          font-size: 16px;
          font-weight: 700;
          color: #0f172a;
        }

        /* Action Buttons */
        .action-buttons-group {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-top: 8px;
        }

        @media (max-width: 768px) {
          .listing-single-wrapper {
            padding-bottom: 90px;
          }

          .action-buttons-group {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 9999;
            background: #ffffff;
            padding: 12px 16px;
            box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.12);
            border-top: 1px solid #e2e8f0;
            grid-template-columns: 1fr 1fr;
            margin-top: 0;
            gap: 10px;
          }

          .btn-book-now,
          .btn-book-whatsapp {
            padding: 14px 10px !important;
            font-size: 14px !important;
            border-radius: 10px !important;
          }
        }

        .btn-book-now {
          background: #0e426a;
          color: #ffffff !important;
          border: none;
          border-radius: 12px;
          padding: 16px 24px;
          font-size: 16px;
          font-weight: 700;
          text-align: center;
          text-decoration: none !important;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 14px rgba(14, 66, 106, 0.25);
          position: relative;
          overflow: hidden;
        }

        .btn-book-now::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -60%;
          width: 50%;
          height: 200%;
          background: linear-gradient(
            120deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.45) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: rotate(25deg);
          animation: shineSweep 3s infinite ease-in-out;
          pointer-events: none;
        }

        @keyframes shineSweep {
          0% {
            left: -60%;
          }
          25% {
            left: 130%;
          }
          100% {
            left: 130%;
          }
        }

        .btn-book-now:hover {
          background: #092f4c;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(14, 66, 106, 0.35);
        }

        .btn-book-whatsapp {
          background: #25d366;
          color: #ffffff !important;
          border-radius: 12px;
          padding: 16px 24px;
          font-size: 16px;
          font-weight: 700;
          text-align: center;
          text-decoration: none !important;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 14px rgba(37, 211, 102, 0.25);
        }

        .btn-book-whatsapp:hover {
          background: #1fa851;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.35);
        }

        .sub-support-text {
          font-size: 13px;
          color: #64748b;
          text-align: center;
          margin-top: 4px;
        }

        /* Popup Modal Styling */
        .booking-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(15, 23, 42, 0.7);
          backdrop-filter: blur(6px);
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: modalOverlayFadeIn 0.25s ease-out;
        }

        .booking-modal-content {
          background: #ffffff;
          border-radius: 20px;
          width: 100%;
          max-width: 540px;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          position: relative;
          animation: modalSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes modalOverlayFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes modalSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .booking-modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 24px 16px;
          border-bottom: 1px solid #f1f5f9;
        }

        .booking-modal-header h4 {
          margin: 0;
          font-size: 20px;
          font-weight: 700;
          color: #0f172a;
        }

        .booking-modal-close {
          background: #f1f5f9;
          border: none;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          font-size: 22px;
          color: #64748b;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          line-height: 1;
        }

        .booking-modal-close:hover {
          background: #e2e8f0;
          color: #0f172a;
        }

        .booking-modal-body {
          padding: 20px 24px 28px;
        }

        .booking-modal-body :global(.dynamic-booking-form-wrapper) {
          box-shadow: none !important;
          padding: 0 !important;
          margin-bottom: 0 !important;
        }
      `}</style>

      <div className="container">
        {/* Top Breadcrumb */}
        <div className="showcase-breadcrumb">
          <a href="/vehicles">Bikes</a> / <span>{title}</span>
        </div>

        {/* Top Showcase Hero Section */}
        <div className="showcase-card">
          {/* Left Column: Image Box */}
          <div className="showcase-img-box">
            <img src={coverUrl} alt={title} />
          </div>

          {/* Right Column: Details, Specs, Actions */}
          <div className="showcase-details">
            <h1 className="showcase-title">{title}</h1>
            <p className="showcase-subtitle">{vehicleType} · Puri self-drive rental</p>

            {/* Price Cards Grid (Per Hour & Per Day) */}
            <div className="price-cards-wrap">
              <div className="single-price-card">
                <div>
                  <div className="price-label-text">Per Hour</div>
                  <div className="price-value-box">
                    <span className="price-currency">₹</span>
                    <span className="price-number">{pricePerHour}</span>
                    <span className="price-unit">/ hr</span>
                  </div>
                </div>
              </div>

              <div className="single-price-card featured">
                <div>
                  <div className="price-label-text">Per Day</div>
                  <div className="price-value-box">
                    <span className="price-currency">₹</span>
                    <span className="price-number">{price}</span>
                    <span className="price-unit">/ day</span>
                  </div>
                </div>
                <span className="price-badge-tag">Best Value</span>
              </div>
            </div>

            {/* 2x2 Specs Grid */}
            <div className="specs-grid">
              <div className="spec-item">
                <div className="spec-icon-wrap">
                  <MileageIcon />
                </div>
                <div className="spec-content">
                  <span className="spec-label">Mileage</span>
                  <span className="spec-value">{mileage}</span>
                </div>
              </div>

              <div className="spec-item">
                <div className="spec-icon-wrap">
                  <FuelIcon />
                </div>
                <div className="spec-content">
                  <span className="spec-label">Fuel Tank</span>
                  <span className="spec-value">{fuelCapacity}</span>
                </div>
              </div>

              <div className="spec-item">
                <div className="spec-icon-wrap">
                  <SeatIcon />
                </div>
                <div className="spec-content">
                  <span className="spec-label">Seat Height</span>
                  <span className="spec-value">{seatHeight}</span>
                </div>
              </div>

              <div className="spec-item">
                <div className="spec-icon-wrap">
                  <DepositIcon />
                </div>
                <div className="spec-content">
                  <span className="spec-label">Deposit</span>
                  <span className="spec-value">{deposit}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="action-buttons-group">
              <button 
                type="button" 
                onClick={() => setIsBookingOpen(true)} 
                className="btn-book-now"
              >
                <BookNowIcon /> Book Now
              </button>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-book-whatsapp">
                <WhatsappIcon /> Book via WhatsApp
              </a>
            </div>

            {/* Subtext info */}
            <p className="sub-support-text">
              Or call <a href={`tel:${rawPhone || '918249856382'}`} style={{ color: 'inherit', fontWeight: '600' }}>{phone}</a> · Free helmet · No KM limit
            </p>
          </div>
        </div>

        {/* Lower Details & Support Section */}
        <div className="listing-single__bottom">
          <div className="row">
            <ListingBottomLeft vehicle={vehicle} />
            <ListingBottomRight vehicle={vehicle} />
          </div>
        </div>
      </div>

      {/* Booking Form Popup Modal */}
      {isBookingOpen && (
        <div className="booking-modal-overlay" onClick={() => setIsBookingOpen(false)}>
          <div className="booking-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="booking-modal-header">
              <h4>Book {title}</h4>
              <button 
                type="button" 
                className="booking-modal-close" 
                onClick={() => setIsBookingOpen(false)}
                aria-label="Close"
              >
                &times;
              </button>
            </div>
            <div className="booking-modal-body">
              <DynamicBookingForm vehicleTitle={title} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CarListingSingleMain;
