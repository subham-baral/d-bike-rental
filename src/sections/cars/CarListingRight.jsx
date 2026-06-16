"use client";

import React, { useState, useEffect } from 'react';

const CarListingRight = ({ filters, setFilters, setCurrentPage, isMobileOpen, setIsMobileOpen }) => {
  const [localSearch, setLocalSearch] = useState(filters?.search || "");
  const [localPrice, setLocalPrice] = useState(filters?.priceRange || [100, 1500]);
  
  const [apiTaxonomies, setApiTaxonomies] = useState([]);
  const [loadingTaxonomies, setLoadingTaxonomies] = useState(true);

  // Accordion state (hidden by default)
  const [openTaxonomies, setOpenTaxonomies] = useState({});

  // Fetch taxonomies from API
  useEffect(() => {
    const fetchTaxonomies = async () => {
      try {
        const res = await fetch('https://cmsapi.one9ty.com/api/v1/delivery/taxonomies?content_type=vehicle', {
          headers: {
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_CMS_API_TOKEN}`,
            'Accept': 'application/json'
          }
        });
        const json = await res.json();
        if (json.success && json.data) {
          setApiTaxonomies(json.data);
          
          // Optionally, initialize them as closed:
          const initialOpenState = {};
          json.data.forEach(tax => {
              initialOpenState[tax.id] = false;
          });
          setOpenTaxonomies(initialOpenState);
        }
      } catch (err) {
        console.error("Error fetching taxonomies:", err);
      } finally {
        setLoadingTaxonomies(false);
      }
    };
    fetchTaxonomies();
  }, []);

  // Sync local price slider to parent filter on debounce
  useEffect(() => {
    const handler = setTimeout(() => {
      if (filters.priceRange[0] !== localPrice[0] || filters.priceRange[1] !== localPrice[1]) {
          setCurrentPage(1);
          setFilters(prev => ({ ...prev, priceRange: localPrice }));
      }
    }, 300);
    return () => clearTimeout(handler);
  }, [localPrice, setFilters, setCurrentPage, filters.priceRange]);

  const min = 100;
  const max = 1500;
  
  // Calculate percentages for the background track of the dual slider
  const minPercent = ((localPrice[0] - min) / (max - min)) * 100;
  const maxPercent = ((localPrice[1] - min) / (max - min)) * 100;

  // Generic handler for taxonomy checkbox clicks
  const handleTaxonomyChange = (taxonomySlug, termId) => {
    setCurrentPage(1);
    setFilters(prev => {
      const currentTaxonomies = { ...prev.taxonomies };
      const currentTerms = currentTaxonomies[taxonomySlug] || [];
      
      const isSelected = currentTerms.includes(termId);
      
      if (isSelected) {
        currentTaxonomies[taxonomySlug] = currentTerms.filter(t => t !== termId);
        if (currentTaxonomies[taxonomySlug].length === 0) {
            delete currentTaxonomies[taxonomySlug];
        }
      } else {
        currentTaxonomies[taxonomySlug] = [...currentTerms, termId];
      }
      
      return {
        ...prev,
        taxonomies: currentTaxonomies
      };
    });
  };

  const handleSearchSubmit = e => {
    e.preventDefault();
    setCurrentPage(1);
    setFilters(prev => ({ ...prev, search: localSearch }));
  };

  const toggleTaxonomy = (id) => {
      setOpenTaxonomies(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      <div className={`col-xl-3 car-listing-sidebar-wrapper ${isMobileOpen ? 'mobile-open' : 'mobile-closed'}`}>
        
        {/* Mobile close button */}
        {isMobileOpen && (
            <div className="d-xl-none d-flex justify-content-end mb-3">
                <button onClick={() => setIsMobileOpen(false)} style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer' }}>&times;</button>
            </div>
        )}

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
                <div className="ranger-min-max-block" style={{ position: 'relative', paddingBottom: '30px' }}>
                  
                  {/* Dual Slider Container */}
                  <div style={{ position: 'relative', width: '100%', height: '8px', background: '#ddd', borderRadius: '5px', marginTop: '20px', marginBottom: '20px' }}>
                    
                    {/* Colored Track */}
                    <div style={{ 
                        position: 'absolute', 
                        left: `${minPercent}%`, 
                        right: `${100 - maxPercent}%`, 
                        height: '100%', 
                        background: '#FFB51D', 
                        borderRadius: '5px' 
                    }}></div>
                    
                    {/* Min Input */}
                    <input 
                      type="range" 
                      min={min} 
                      max={max} 
                      value={localPrice[0]} 
                      onChange={e => {
                          const val = Math.min(Number(e.target.value), localPrice[1] - 10);
                          setLocalPrice([val, localPrice[1]]);
                      }} 
                      className="dual-range-input"
                    />

                    {/* Max Input */}
                    <input 
                      type="range" 
                      min={min} 
                      max={max} 
                      value={localPrice[1]} 
                      onChange={e => {
                          const val = Math.max(Number(e.target.value), localPrice[0] + 10);
                          setLocalPrice([localPrice[0], val]);
                      }} 
                      className="dual-range-input"
                    />

                  </div>

                  <div className="d-flex justify-content-between valuRange align-items-center">
                    <div className="d-flex values" style={{ gap: '5px', fontWeight: 'bold' }}>
                      <span>₹{localPrice[0]}</span>
                      <span>-</span>
                      <span>₹{localPrice[1]}</span>
                    </div>
                    <button onClick={() => setFilters(prev => ({ ...prev, priceRange: localPrice }))}>Filter</button>
                  </div>
                </div>
              </div>
            </div>

            {/* DYNAMIC TAXONOMIES (ACCORDION STYLE) */}
            {loadingTaxonomies ? (
              <div className="car-listing__sidebar-single"><p>Loading filters...</p></div>
            ) : (
              apiTaxonomies.map(taxonomy => {
                  const isOpen = openTaxonomies[taxonomy.id];
                  
                  return (
                    <div key={taxonomy.id} className="car-listing__category car-listing__sidebar-single">
                      <h3 
                          className="car-listing__sidebar-title" 
                          onClick={() => toggleTaxonomy(taxonomy.id)}
                          style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: 0 }}
                      >
                        {taxonomy.name}
                        <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'}`} style={{ fontSize: '14px', transition: 'all 0.3s' }}></i>
                      </h3>
                      
                      {isOpen && (
                          <ul className="list-unstyled" style={{ marginTop: '20px' }}>
                            {taxonomy.terms && taxonomy.terms.map(term => {
                              const isChecked = filters?.taxonomies?.[taxonomy.slug]?.includes(term.id) || false;
                              const inputId = `tax_${taxonomy.slug}_${term.id}`;
                              return (
                                <li key={term.id}>
                                  <div className="checked-box">
                                    <input 
                                      type="checkbox" 
                                      id={inputId} 
                                      checked={isChecked} 
                                      onChange={() => handleTaxonomyChange(taxonomy.slug, term.id)} 
                                    />
                                    <label htmlFor={inputId}><span></span>{term.name}</label>
                                  </div>
                                </li>
                              );
                            })}
                          </ul>
                      )}
                    </div>
                  );
              })
            )}

          </div>
        </div>
      </div>

      {/* Basic Inline Styles for Dual Slider and Mobile Drawer */}
      <style jsx global>{`
        .dual-range-input {
            position: absolute;
            top: 0;
            width: 100%;
            height: 8px;
            background: transparent;
            pointer-events: none;
            -webkit-appearance: none;
        }
        .dual-range-input::-webkit-slider-thumb {
            pointer-events: auto;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: #FFB51D;
            cursor: pointer;
            -webkit-appearance: none;
            box-shadow: 0 0 5px rgba(0,0,0,0.2);
            margin-top: -6px; /* align center with track */
        }
        .dual-range-input::-moz-range-thumb {
            pointer-events: auto;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: #FFB51D;
            cursor: pointer;
            border: none;
            box-shadow: 0 0 5px rgba(0,0,0,0.2);
        }
        
        /* Mobile Drawer Styles */
        @media (max-width: 1199px) {
            .car-listing-sidebar-wrapper.mobile-closed {
                display: none;
            }
            .car-listing-sidebar-wrapper.mobile-open {
                display: block;
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                background: white;
                z-index: 9999;
                overflow-y: auto;
                padding: 20px;
                box-shadow: 2px 0 10px rgba(0,0,0,0.1);
            }
        }
      `}</style>
    </>
  );
};

export default CarListingRight;