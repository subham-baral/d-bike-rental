"use client";

import React, { useState, useEffect } from 'react';

const categoryOptions = [
    { slug: "self-drive", label: "Self Drive" },
    { slug: "with-driver", label: "With Driver" }
];

const vehicleTypeOptions = [
    { slug: "bike", label: "Bike" },
    { slug: "scooter", label: "Scooter" },
    { slug: "car", label: "Car" },
    { slug: "minibus", label: "Minibus" }
];

const fuelTypeOptions = [
    { slug: "petrol", label: "Petrol" },
    { slug: "diesel", label: "Diesel" },
    { slug: "electric", label: "Electric" }
];

const CarListingRight = ({ filters, setFilters, setCurrentPage }) => {
  const [localSearch, setLocalSearch] = useState(filters?.search || "");
  const [localPrice, setLocalPrice] = useState(filters?.priceRange || 500);

  // Sync local price slider to parent filter on debounce
  useEffect(() => {
    const handler = setTimeout(() => {
      if (filters.priceRange !== localPrice) {
          setCurrentPage(1);
          setFilters(prev => ({ ...prev, priceRange: localPrice }));
      }
    }, 300);
    return () => clearTimeout(handler);
  }, [localPrice, setFilters, setCurrentPage, filters.priceRange]);

  const min = 100;
  const max = 500;
  const percentage = ((localPrice - min) / (max - min)) * 100;

  // Handlers
  const handleCategoryChange = slug => {
    setCurrentPage(1);
    setFilters(prev => {
      const isSelected = prev.categories.includes(slug);
      return {
        ...prev,
        categories: isSelected
          ? prev.categories.filter(c => c !== slug)
          : [...prev.categories, slug]
      };
    });
  };

  const handleVehicleTypeChange = slug => {
    setCurrentPage(1);
    setFilters(prev => {
      const isSelected = prev.vehicleTypes.includes(slug);
      return {
        ...prev,
        vehicleTypes: isSelected
          ? prev.vehicleTypes.filter(c => c !== slug)
          : [...prev.vehicleTypes, slug]
      };
    });
  };

  const handleFuelTypeChange = slug => {
    setCurrentPage(1);
    setFilters(prev => {
      const isSelected = prev.fuelTypes.includes(slug);
      return {
        ...prev,
        fuelTypes: isSelected
          ? prev.fuelTypes.filter(c => c !== slug)
          : [...prev.fuelTypes, slug]
      };
    });
  };

  const handleSearchSubmit = e => {
    e.preventDefault();
    setCurrentPage(1);
    setFilters(prev => ({ ...prev, search: localSearch }));
  };

  return (
    <div className="col-xl-3">
      <div className="car-listing-page-one__right">
        <div className="car-listing__sidebar">
          {/* SEARCH SYSTEM */}
          <div className="car-listing__search car-listing__sidebar-single">
            <form onSubmit={handleSearchSubmit}>
              <input 
                type="text" 
                name="search" 
                placeholder="Search" 
                value={localSearch}
                onChange={e => setLocalSearch(e.target.value)}
              />
              <button type="submit"><i className="fa fa-search"></i></button>
            </form>
          </div>

          {/* FILTER PRICE */}
          <div className="car-listing__price-ranger car-listing__sidebar-single">
            <h3 className="car-listing__sidebar-title">Filter Price</h3>
            <div className="price-ranger">
              <div className="ranger-min-max-block">
                <input 
                  type="range" 
                  min={min} 
                  max={max} 
                  value={localPrice} 
                  onChange={e => setLocalPrice(Number(e.target.value))} 
                  style={{
                    WebkitAppearance: 'none',
                    appearance: 'none',
                    width: '100%',
                    height: '8px',
                    borderRadius: '5px',
                    outline: 'none',
                    background: `linear-gradient(to right, #FFB51D ${percentage}%, #ddd ${percentage}%)`
                  }}
                  className="custom-range-slider" 
                />
                <div className="d-flex justify-content-between valuRange">
                  <div className="d-flex values">
                    <span>{localPrice}</span>
                    <span>-</span>
                    <span>{max}</span>
                  </div>
                  <button onClick={() => setFilters(prev => ({ ...prev, priceRange: localPrice }))}>Filter</button>
                </div>
              </div>
            </div>
          </div>

          {/* CATEGORIES */}
          <div className="car-listing__category car-listing__sidebar-single">
            <h3 className="car-listing__sidebar-title">Categories</h3>
            <ul className="list-unstyled">
              {categoryOptions.map(cat => (
                <li key={cat.slug}>
                  <div className="checked-box">
                    <input 
                      type="checkbox" 
                      id={`cat_${cat.slug}`} 
                      checked={filters?.categories.includes(cat.slug)} 
                      onChange={() => handleCategoryChange(cat.slug)} 
                    />
                    <label htmlFor={`cat_${cat.slug}`}><span></span>{cat.label}</label>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* VEHICLE TYPE */}
          <div className="car-listing__category car-listing__sidebar-single">
            <h3 className="car-listing__sidebar-title">Vehicle Type</h3>
            <ul className="list-unstyled">
              {vehicleTypeOptions.map(vt => (
                <li key={vt.slug}>
                  <div className="checked-box">
                    <input 
                      type="checkbox" 
                      id={`vt_${vt.slug}`} 
                      checked={filters?.vehicleTypes.includes(vt.slug)} 
                      onChange={() => handleVehicleTypeChange(vt.slug)} 
                    />
                    <label htmlFor={`vt_${vt.slug}`}><span></span>{vt.label}</label>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* FUEL TYPE */}
          <div className="car-listing__category car-listing__tuel-type car-listing__sidebar-single">
            <h3 className="car-listing__sidebar-title">Fuel Type</h3>
            <ul className="list-unstyled">
              {fuelTypeOptions.map(ft => (
                <li key={ft.slug}>
                  <div className="checked-box">
                    <input 
                      type="checkbox" 
                      id={`ft_${ft.slug}`} 
                      checked={filters?.fuelTypes.includes(ft.slug)} 
                      onChange={() => handleFuelTypeChange(ft.slug)} 
                    />
                    <label htmlFor={`ft_${ft.slug}`}><span></span>{ft.label}</label>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CarListingRight;