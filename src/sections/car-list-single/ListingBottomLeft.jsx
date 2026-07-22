"use client";

import React from 'react';

const OverviewIcon = ({ type }) => {
  switch (type) {
    case 'type':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0e426a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="5.5" cy="17.5" r="3.5"/>
          <circle cx="18.5" cy="17.5" r="3.5"/>
          <path d="M15 6h2l3 6.5M5.5 17.5l3-9.5h5l2.5 5"/>
        </svg>
      );
    case 'fuel':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0e426a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="22" x2="15" y2="22"/>
          <line x1="4" y1="9" x2="14" y2="9"/>
          <path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18"/>
          <path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5"/>
        </svg>
      );
    case 'mileage':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0e426a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 14l3-3"/>
          <path d="M3.34 19a10 10 0 1 1 17.32 0"/>
        </svg>
      );
    case 'location':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0e426a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      );
    case 'year':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0e426a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
          <line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
      );
    case 'seats':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0e426a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      );
    default:
      return null;
  }
};

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const ListingBottomLeft = ({ vehicle }) => {
  if (!vehicle || !vehicle.data) return null;

  const getTaxonomyTerm = (slug) => {
    const tax = vehicle.taxonomy_terms_resolved?.find(t => t.taxonomy_slug === slug);
    return tax ? tax.name : null;
  };

  const { mileage, full_description, year } = vehicle.data;
  const fuelType = getTaxonomyTerm('fuel-type') || 'Petrol';
  const vehicleType = getTaxonomyTerm('vehicle-type') || 'Standard Scooter';
  const pickupLocation = getTaxonomyTerm('pickup-location') || 'Puri City';

  const overviewItems = [
    { label: 'Vehicle Type', value: vehicleType, icon: 'type' },
    { label: 'Fuel Type', value: fuelType, icon: 'fuel' },
    { label: 'Mileage', value: mileage ? `${mileage} kmpl` : '52 kmpl', icon: 'mileage' },
    // { label: 'Primary Pickup', value: pickupLocation, icon: 'location' },
    { label: 'Model Year', value: year || '2024', icon: 'year' },
    { label: 'Seating', value: '2 Persons', icon: 'seats' },
  ];

  const features = [];
  if (vehicle.data.helmet_included !== false) features.push('Free Helmet Included');
  if (vehicle.data.insurance_included) features.push('Comprehensive Insurance');
  features.push('24/7 Roadside Support');
  features.push('Unlimited Kilometers');
  features.push('Clean & Sanitized Vehicle');
  if (vehicle.data.gps) features.push('GPS Navigation Support');
  if (vehicle.data.air_conditioning) features.push('Air Conditioning');

  return (
    <div className="col-xl-8 col-lg-7">
      <style jsx>{`
        .details-left-wrapper {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .section-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 28px 32px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
          transition: border-color 0.2s ease;
        }

        .section-card:hover {
          border-color: #cbd5e1;
        }

        .section-title-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
          padding-bottom: 12px;
          border-bottom: 2px solid #f1f5f9;
        }

        .title-accent-line {
          width: 4px;
          height: 22px;
          background: #0e426a;
          border-radius: 2px;
        }

        .section-title {
          font-size: 20px;
          font-weight: 800;
          color: #0f172a;
          margin: 0;
          letter-spacing: -0.2px;
        }

        /* Grid of Overview Items */
        .overview-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        @media (max-width: 768px) {
          .overview-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .overview-grid {
            grid-template-columns: 1fr;
          }
        }

        .overview-box {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 16px;
          display: flex;
          align-items: center;
          gap: 14px;
          transition: all 0.2s ease;
        }

        .overview-box:hover {
          background: #ffffff;
          border-color: #0e426a;
          box-shadow: 0 4px 12px rgba(14, 66, 106, 0.06);
        }

        .overview-icon-wrapper {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: #f0f9ff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .overview-info {
          display: flex;
          flex-direction: column;
        }

        .overview-label {
          font-size: 11px;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .overview-value {
          font-size: 15px;
          font-weight: 700;
          color: #0f172a;
          margin-top: 2px;
        }

        /* Description Content */
        .description-body {
          font-size: 15px;
          line-height: 1.7;
          color: #334155;
        }

        .description-body :global(p) {
          margin-bottom: 16px;
        }

        .description-body :global(p:last-child) {
          margin-bottom: 0;
        }

        /* Features List */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }

        @media (max-width: 576px) {
          .features-grid {
            grid-template-columns: 1fr;
          }
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 12px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          padding: 12px 16px;
        }

        .feature-check-icon {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: #dcfce7;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .feature-text {
          font-size: 14px;
          font-weight: 600;
          color: #1e293b;
        }
      `}</style>

      <div className="details-left-wrapper">
        {/* Section 1: Overview */}
        <div className="section-card">
          <div className="section-title-wrap">
            <span className="title-accent-line"></span>
            <h3 className="section-title">Vehicle Specifications</h3>
          </div>
          <div className="overview-grid">
            {overviewItems.map((item, idx) => (
              <div key={idx} className="overview-box">
                <div className="overview-icon-wrapper">
                  <OverviewIcon type={item.icon} />
                </div>
                <div className="overview-info">
                  <span className="overview-label">{item.label}</span>
                  <span className="overview-value">{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Features & Inclusions */}
        <div className="section-card">
          <div className="section-title-wrap">
            <span className="title-accent-line"></span>
            <h3 className="section-title">Features & Rental Inclusions</h3>
          </div>
          <div className="features-grid">
            {features.map((feat, idx) => (
              <div key={idx} className="feature-item">
                <div className="feature-check-icon">
                  <CheckIcon />
                </div>
                <span className="feature-text">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Description */}
        {full_description && (
          <div className="section-card">
            <div className="section-title-wrap">
              <span className="title-accent-line"></span>
              <h3 className="section-title">Vehicle Description</h3>
            </div>
            <div 
              className="description-body"
              dangerouslySetInnerHTML={{ __html: full_description }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ListingBottomLeft;