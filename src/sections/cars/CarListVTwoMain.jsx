"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import CarListingRight from './CarListingRight';

const CarListVTwoMain = () => {
  const searchParams = useSearchParams();

  // Read query params for initial filter state
  const initialTaxonomies = {};
  if (searchParams) {
      for (const [key, value] of searchParams.entries()) {
          // Check if it's one of our expected taxonomy keys
          if (['pickup-location', 'rental-category', 'fuel-type', 'brand'].includes(key)) {
              if (value) {
                  // We store term.ids as numbers in our state
                  initialTaxonomies[key] = [Number(value)];
              }
          }
      }
  }

  const [allVehicles, setAllVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  
  const [filters, setFilters] = useState({
      search: "",
      priceRange: [100, 1500],
      taxonomies: initialTaxonomies
  });

  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // 1. Fetch all vehicles once on mount
  useEffect(() => {
      const fetchAllVehicles = async () => {
          setLoading(true);
          try {
              const url = `${process.env.NEXT_PUBLIC_CMS_API_URL}/delivery/contents?page=1`;
              const requestBody = {
                  content_type_id: "vehicle",
                  status: "published",
                  sort_by: "created_at",
                  sort_order: "desc",
                  per_page: 100 // Fetch a large number to get all vehicles for local filtering
              };
              
              const res = await fetch(url, {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_CMS_API_TOKEN}`
                  },
                  body: JSON.stringify(requestBody)
              });
              
              const result = await res.json();
              if (result.success && result.data) {
                  setAllVehicles(result.data.data || []);
              }
          } catch (error) {
              console.error("Failed to fetch vehicles:", error);
          } finally {
              setLoading(false);
          }
      };

      fetchAllVehicles();
  }, []); // Run only once

  // 2. Filter locally whenever filters or allVehicles change
  const filteredVehicles = allVehicles.filter(vehicle => {
      // Search text
      if (filters.search && !vehicle.title.toLowerCase().includes(filters.search.toLowerCase())) {
          return false;
      }
      
      // Price
      const vehiclePrice = vehicle.data?.price_per_day || 499;
      if (vehiclePrice < filters.priceRange[0] || vehiclePrice > filters.priceRange[1]) {
          return false;
      }

      // Taxonomies
      for (const [taxonomySlug, selectedTermIds] of Object.entries(filters.taxonomies)) {
          if (!selectedTermIds || selectedTermIds.length === 0) continue;
          
          // Use taxonomy_index which is always reliably populated with term IDs
          const vehicleTermIds = vehicle.taxonomy_index?.[taxonomySlug] || [];
          
          // Vehicle must have at least one of the selected terms for this taxonomy group
          const hasMatch = selectedTermIds.some(id => vehicleTermIds.includes(id));
          if (!hasMatch) {
              return false;
          }
      }
      
      return true;
  });

  // 3. Paginate locally
  const totalPages = Math.ceil(filteredVehicles.length / itemsPerPage) || 1;
  // Ensure we don't end up on an invalid page if filtering reduces total pages
  const validCurrentPage = Math.min(currentPage, totalPages);
  
  const currentVehicles = filteredVehicles.slice((validCurrentPage - 1) * itemsPerPage, validCurrentPage * itemsPerPage);

  const handlePageChange = page => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };
  
  // Sync page state if it was out of bounds
  useEffect(() => {
    if (currentPage !== validCurrentPage) {
        setCurrentPage(validCurrentPage);
    }
  }, [validCurrentPage, currentPage]);

  return <section className="car-listing-page-two">
            <div className="container">
                <div className="row">
                    <div className="col-xl-9">
                        <div className="car-listing-page-two__left">
                            {/* MOBILE TOGGLE BUTTON */}
                            <div className="d-xl-none mb-4 text-start">
                                <button 
                                    className="thm-btn" 
                                    style={{ padding: '8px 15px', fontSize: '14px', display: 'inline-flex', alignItems: 'center', gap: '5px' }} 
                                    onClick={() => setIsMobileOpen(true)}
                                >
                                    <i className="fas fa-filter"></i> Filters
                                </button>
                            </div>
                            
                            <div className="row">
                                {loading ? (
                                    <div className="text-center" style={{ padding: '50px 0', width: '100%' }}>
                                        <div className="spinner-border text-primary" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    </div>
                                ) : currentVehicles.length > 0 ? (
                                    currentVehicles.map((item, i) => {
                                        const categoryTaxonomy = item.taxonomy_terms_resolved?.find(t => t.taxonomy_slug === 'rental-category');
                                        const category = categoryTaxonomy ? categoryTaxonomy.name : "Self Drive";
                                        const imageUrl = item.data?.cover_image?.file_path ? `https://cdn.one9ty.com/one9ty-travel/${item.data.cover_image.file_path}` : "/assets/images/resources/listing-1-1.png";

                                        return (
                                            <div key={item?.id || i} className="col-xl-4 col-lg-4 col-md-6">
                                                <div className="listing-two__single">
                                                    <div className="listing-two__img-box">
                                                        <div className="listing-two__img">
                                                            <img src={imageUrl} alt={item.data?.title || item.title} style={{ height: '200px', objectFit: 'cover', width: '100%' }} />
                                                        </div>
                                                    </div>
                                                    <div className="listing-two__content">
                                                        <p className="listing-two__sub-title">{category}</p>
                                                        <h3 className="listing-two__title"><Link href={`/vehicles/${item.data?.slug || item.slug}`}>{item.data?.title || item.title}</Link></h3>
                                                        <div className="listing-two__price-and-btn">
                                                            <div className="listing-two__price-box">
                                                                <span>From</span>
                                                                <p>₹{item.data?.price_per_day || 499} /day</p>
                                                            </div>
                                                            <div className="listing-two__btn-box">
                                                                <Link href={`/vehicles/${item.data?.slug || item.slug}`} className="thm-btn">Book Now</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })
                                ) : (
                                    <div className="col-12 text-center" style={{ padding: '50px 0' }}>
                                        <h4>No vehicles found</h4>
                                    </div>
                                )}
                            </div>
                            
                            {!loading && totalPages > 1 && (
                                <div className="car-listing__pagination">
                                    <ul className="pg-pagination list-unstyled">
                                        <li className="prev">
                                            <button onClick={e => {
                                                handlePageChange(validCurrentPage - 1);
                                                e.preventDefault();
                                            }} disabled={validCurrentPage === 1}><i className="fas fa-angle-left"></i></button>
                                        </li>
                                        {Array.from({ length: totalPages }).map((_, index) => (
                                            <li key={index} className={`count ${validCurrentPage === index + 1 ? "active" : ""}`}>
                                                <button onClick={() => handlePageChange(index + 1)} className="pg-btn">
                                                    {index + 1}
                                                </button>
                                            </li>
                                        ))}
                                        <li className="next">
                                            <button aria-label="Next" onClick={e => {
                                                handlePageChange(validCurrentPage + 1);
                                                e.preventDefault();
                                            }} disabled={validCurrentPage === totalPages}><i className="fas fa-angle-right"></i></button>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                    <CarListingRight 
                        filters={filters} 
                        setFilters={setFilters} 
                        setCurrentPage={setCurrentPage} 
                        isMobileOpen={isMobileOpen} 
                        setIsMobileOpen={setIsMobileOpen} 
                    />
                </div>
            </div>
            
            <style jsx global>{`
                .car-listing-page-two {
                    z-index: 1;
                    padding: 60px 0;
                    display: block;
                    position: relative;
                }
                @media (max-width: 1199px) {
                    .car-listing-page-two {
                        padding: 30px 0;
                    }
                }
            `}</style>
        </section>;
};
export default CarListVTwoMain;