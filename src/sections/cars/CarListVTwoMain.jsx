"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import CarListingRight from './CarListingRight';

const CarListVTwoMain = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  
  const [filters, setFilters] = useState({
      search: "",
      priceRange: 500,
      categories: [],
      vehicleTypes: [],
      fuelTypes: []
  });

  useEffect(() => {
      const fetchVehicles = async () => {
          setLoading(true);
          try {
              const url = `${process.env.NEXT_PUBLIC_CMS_API_URL}/delivery/contents?page=${currentPage}`;
              const requestBody = {
                  content_type_id: "vehicle",
                  status: "published",
                  sort_by: "created_at",
                  sort_order: "desc",
                  per_page: 2
              };

              if (filters.search) {
                  requestBody.search = filters.search;
              }
              
              // We append max_price if applicable, assuming the API supports it
              if (filters.priceRange < 500) {
                  requestBody.max_price = filters.priceRange;
              }

              if (filters.categories.length > 0 || filters.vehicleTypes.length > 0 || filters.fuelTypes.length > 0) {
                  requestBody.taxonomy_terms = {};
                  if (filters.categories.length > 0) requestBody.taxonomy_terms["rental-category"] = filters.categories;
                  if (filters.vehicleTypes.length > 0) requestBody.taxonomy_terms["vehicle-type"] = filters.vehicleTypes;
                  if (filters.fuelTypes.length > 0) requestBody.taxonomy_terms["fuel-type"] = filters.fuelTypes;
              }
              
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
                  setVehicles(result.data.data);
                  setTotalPages(result.data.last_page);
                  setCurrentPage(result.data.current_page);
              }
          } catch (error) {
              console.error("Failed to fetch vehicles:", error);
          } finally {
              setLoading(false);
          }
      };

      fetchVehicles();
  }, [currentPage, filters]);

  // Handle page change
  const handlePageChange = page => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };
  
  return <section className="car-listing-page-two">
            <div className="container">
                <div className="row">
                    <div className="col-xl-9">
                        <div className="car-listing-page-two__left">
                            <div className="row">
                                {loading ? (
                                    <div className="text-center" style={{ padding: '50px 0', width: '100%' }}>
                                        <div className="spinner-border text-primary" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    </div>
                                ) : vehicles.length > 0 ? (
                                    vehicles.map((item, i) => {
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
                                                handlePageChange(currentPage - 1);
                                                e.preventDefault();
                                            }} disabled={currentPage === 1}><i className="fas fa-angle-left"></i></button>
                                        </li>
                                        {Array.from({ length: totalPages }).map((_, index) => (
                                            <li key={index} className={`count ${currentPage === index + 1 ? "active" : ""}`}>
                                                <button onClick={() => handlePageChange(index + 1)} className="pg-btn">
                                                    {index + 1}
                                                </button>
                                            </li>
                                        ))}
                                        <li className="next">
                                            <button aria-label="Next" onClick={e => {
                                                handlePageChange(currentPage + 1);
                                                e.preventDefault();
                                            }} disabled={currentPage === totalPages}><i className="fas fa-angle-right"></i></button>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                    <CarListingRight filters={filters} setFilters={setFilters} setCurrentPage={setCurrentPage} />
                </div>
            </div>
        </section>;
};
export default CarListVTwoMain;