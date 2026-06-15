"use client";

import React from 'react';

const ListingBottomLeft = ({ vehicle }) => {
  if (!vehicle || !vehicle.data) return null;

  const getTaxonomyTerm = (slug) => {
    const tax = vehicle.taxonomy_terms_resolved?.find(t => t.taxonomy_slug === slug);
    return tax ? tax.name : null;
  };

  const { mileage, full_description } = vehicle.data;
  const fuelType = getTaxonomyTerm('fuel-type') || 'Petrol';
  const vehicleType = getTaxonomyTerm('vehicle-type') || 'Standard';
  const pickupLocation = getTaxonomyTerm('pickup-location') || 'Bhubaneswar Airport';

  return (
    <div className="col-xl-8 col-lg-7">
      <div className="listing-single__bottom-left">
        <div className="listing-single__car-overview">
          <h3 className="listing-single__car-overview-title">Vehicle Overview</h3>
          <div className="listing-single__car-overview-points-box">
            <ul className="list-unstyled listing-single__car-overview-point">
              <li>
                <div className="listing-single__car-overview-point-left">
                  <i className="fas fa-motorcycle"></i>
                  <p>Type</p>
                </div>
                <div className="listing-single__car-overview-point-right">
                  <p>{vehicleType}</p>
                </div>
              </li>
              <li>
                <div className="listing-single__car-overview-point-left">
                  <i className="icon-fuel-type"></i>
                  <p>Fuel</p>
                </div>
                <div className="listing-single__car-overview-point-right">
                  <p>{fuelType}</p>
                </div>
              </li>
              <li>
                <div className="listing-single__car-overview-point-left">
                  <i className="icon-mileage"></i>
                  <p>Mileage</p>
                </div>
                <div className="listing-single__car-overview-point-right">
                  <p>{mileage || 'Unlimited'}</p>
                </div>
              </li>
            </ul>
            <ul className="list-unstyled listing-single__car-overview-point">
              <li>
                <div className="listing-single__car-overview-point-left">
                  <i className="icon-pin-2"></i>
                  <p>Pickup</p>
                </div>
                <div className="listing-single__car-overview-point-right">
                  <p>{pickupLocation}</p>
                </div>
              </li>
              <li>
                <div className="listing-single__car-overview-point-left">
                  <i className="icon-date"></i>
                  <p>Year</p>
                </div>
                <div className="listing-single__car-overview-point-right">
                  <p>2024</p>
                </div>
              </li>
              <li>
                <div className="listing-single__car-overview-point-left">
                  <i className="icon-seat"></i>
                  <p>Seats</p>
                </div>
                <div className="listing-single__car-overview-point-right">
                  <p>2</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="listing-single__description">
          <h3 className="listing-single__description-title">Description</h3>
          <div 
            className="cms-editor-paragraph"
            dangerouslySetInnerHTML={{ __html: full_description || '<p>No description provided.</p>' }}
          />
        </div>

        <div className="listing-single__feature">
          <h3 className="listing-single__feature-title">Features</h3>
          <div className="listing-single__feature-points-box">
            <div className="listing-single__feature-point-single">
              <h4 className="listing-single__feature-point-title">Included</h4>
              <ul className="list-unstyled listing-single__feature-point">
                {vehicle.data.helmet_included && (
                  <li>
                    <div className="icon"><span className="icon-cheack"></span></div>
                    <div className="text"><p>Helmet Included</p></div>
                  </li>
                )}
                {vehicle.data.insurance_included && (
                  <li>
                    <div className="icon"><span className="icon-cheack"></span></div>
                    <div className="text"><p>Insurance</p></div>
                  </li>
                )}
                {vehicle.data.gps && (
                  <li>
                    <div className="icon"><span className="icon-cheack"></span></div>
                    <div className="text"><p>GPS Navigation</p></div>
                  </li>
                )}
                {vehicle.data.air_conditioning && (
                  <li>
                    <div className="icon"><span className="icon-cheack"></span></div>
                    <div className="text"><p>Air Conditioning</p></div>
                  </li>
                )}
                {!vehicle.data.helmet_included && !vehicle.data.insurance_included && !vehicle.data.gps && !vehicle.data.air_conditioning && (
                  <li>
                    <div className="text"><p>Standard Features Only</p></div>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ListingBottomLeft;