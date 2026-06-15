import React from 'react';

const ListingTop = ({ vehicle }) => {
  if (!vehicle || !vehicle.data) return null;

  const { title, short_description, price_per_day, mileage, helmet_included, air_conditioning, gps } = vehicle.data;

  // Find some taxonomies if needed
  const getTaxonomyTerm = (slug) => {
    const tax = vehicle.taxonomy_terms_resolved?.find(t => t.taxonomy_slug === slug);
    return tax ? tax.name : 'N/A';
  };

  const fuelType = getTaxonomyTerm('fuel-type');
  const vehicleType = getTaxonomyTerm('vehicle-type');
  const brand = getTaxonomyTerm('brand');

  return (
    <div className="listing-single__top">
      <div className="listing-single__top-left">
        <h3 className="listing-single__title">{title}</h3>
        <p className="listing-single__sub-title">{short_description || brand}</p>
        <div className="listing-single__car-details-box">
          <ul className="list-unstyled listing-single__car-details">
            <li>
              <span className="icon-date"></span>
              <p>{vehicle.data.model || 'Current Model'}</p>
            </li>
            <li>
              <span className="icon-mileage"></span>
              <p>{mileage ? `${mileage} Mileage` : 'Unlimited Mileage'}</p>
            </li>
            <li>
              <span className="fas fa-motorcycle"></span>
              <p>{vehicleType !== 'N/A' ? vehicleType : 'Standard'}</p>
            </li>
            <li>
              <span className="icon-fuel-type"></span>
              <p>{fuelType !== 'N/A' ? fuelType : 'Petrol'}</p>
            </li>
          </ul>
          <ul className="list-unstyled listing-single__car-details">
            {helmet_included && (
              <li>
                <span className="fas fa-hard-hat"></span>
                <p>Helmet Included</p>
              </li>
            )}
            {air_conditioning && (
              <li>
                <span className="icon-air-conditioning"></span>
                <p>Air Conditioning</p>
              </li>
            )}
            {gps && (
              <li>
                <span className="icon-gps"></span>
                <p>GPS</p>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="listing-single__top-right">
        <h2 className="listing-single__price">₹{price_per_day || 499} <span>/day</span></h2>
        <div className="listing-single__offer-price">
          <div className="icon">
            <span className="icon-tag-2"></span>
          </div>
          <div className="text">
            <p>Best Price Guarantee</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingTop;