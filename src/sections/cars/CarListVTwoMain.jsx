import React from "react";
import Link from "next/link";
// import CarListingRight from "./CarListingRight";

const ITEMS_PER_PAGE = 6;
const REVALIDATE_SECONDS = 86400;
const disabledPageLinkStyle = {
  alignItems: "center",
  color: "#9a9a9a",
  cursor: "not-allowed",
  display: "inline-flex",
  justifyContent: "center",
  minHeight: "44px",
  minWidth: "44px",
};

const getVehicles = async () => {
  const url = `${process.env.NEXT_PUBLIC_CMS_API_URL}/delivery/contents?page=1`;
  const requestBody = {
    content_type_id: "vehicle",
    status: "published",
    sort_by: "created_at",
    sort_order: "desc",
    per_page: 100,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_CMS_API_TOKEN}`,
      },
      body: JSON.stringify(requestBody),
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!response.ok) {
      return [];
    }

    const result = await response.json();
    return result?.success && result?.data ? result.data.data || [] : [];
  } catch (error) {
    console.error("Failed to fetch vehicles:", error);
    return [];
  }
};

const getPageHref = (page) => (page <= 1 ? "/vehicles" : `/vehicles?page=${page}`);

const CarListVTwoMain = async ({ currentPage = 1 }) => {
  const allVehicles = await getVehicles();
  const totalPages = Math.max(1, Math.ceil(allVehicles.length / ITEMS_PER_PAGE));
  const validCurrentPage = Math.min(Math.max(currentPage, 1), totalPages);
  const currentVehicles = allVehicles.slice(
    (validCurrentPage - 1) * ITEMS_PER_PAGE,
    validCurrentPage * ITEMS_PER_PAGE
  );

  return (
    <section className="car-listing-page-two">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="car-listing-page-two__left">
              {/*
              Mobile filter toggle is paused while filters are disabled.
              <div className="d-xl-none mb-4 text-start">
                <button
                  className="thm-btn"
                  style={{ padding: "8px 15px", fontSize: "14px", display: "inline-flex", alignItems: "center", gap: "5px" }}
                >
                  <i className="fas fa-filter"></i> Filters
                </button>
              </div>
              */}

              <div className="row">
                {currentVehicles.length > 0 ? (
                  currentVehicles.map((item, i) => {
                    const categoryTaxonomy = item.taxonomy_terms_resolved?.find(
                      (taxonomy) => taxonomy.taxonomy_slug === "rental-category"
                    );
                    const category = categoryTaxonomy ? categoryTaxonomy.name : "Self Drive";
                    const imageUrl = item.data?.cover_image?.file_path
                      ? `https://cdn.one9ty.com/one9ty-travel/${item.data.cover_image.file_path}`
                      : "/assets/images/resources/listing-1-1.png";
                    const title = item.data?.title || item.title;
                    const slug = item.data?.slug || item.slug;

                    return (
                      <div key={item?.id || i} className="col-xl-4 col-lg-4 col-md-6">
                        <div className="listing-two__single">
                          <div className="listing-two__img-box">
                            <div className="listing-two__img">
                              <img
                                src={imageUrl}
                                alt={title}
                                style={{ height: "200px", objectFit: "cover", width: "100%" }}
                              />
                            </div>
                          </div>
                          <div className="listing-two__content">
                            <p className="listing-two__sub-title">{category}</p>
                            <h3 className="listing-two__title">
                              <Link href={`/vehicles/${slug}`}>{title}</Link>
                            </h3>
                            <div className="listing-two__price-and-btn">
                              <div className="listing-two__price-box">
                                <span>From</span>
                                <p>Rs. {item.data?.price_per_day || 499} /day</p>
                              </div>
                              <div className="listing-two__btn-box">
                                <Link href={`/vehicles/${slug}`} className="thm-btn">
                                  Book Now
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="col-12 text-center" style={{ padding: "50px 0" }}>
                    <h4>No vehicles found</h4>
                  </div>
                )}
              </div>

              {totalPages > 1 && (
                <div className="car-listing__pagination">
                  <ul className="pg-pagination list-unstyled">
                    <li className="prev">
                      {validCurrentPage > 1 ? (
                        <Link href={getPageHref(validCurrentPage - 1)} aria-label="Previous page">
                          <i className="fas fa-angle-left"></i>
                        </Link>
                      ) : (
                        <span aria-hidden="true" style={disabledPageLinkStyle}>
                          <i className="fas fa-angle-left"></i>
                        </span>
                      )}
                    </li>
                    {Array.from({ length: totalPages }).map((_, index) => {
                      const pageNumber = index + 1;

                      return (
                        <li
                          key={pageNumber}
                          className={`count ${validCurrentPage === pageNumber ? "active" : ""}`}
                        >
                          <Link href={getPageHref(pageNumber)} className="pg-btn">
                            {pageNumber}
                          </Link>
                        </li>
                      );
                    })}
                    <li className="next">
                      {validCurrentPage < totalPages ? (
                        <Link href={getPageHref(validCurrentPage + 1)} aria-label="Next page">
                          <i className="fas fa-angle-right"></i>
                        </Link>
                      ) : (
                        <span aria-hidden="true" style={disabledPageLinkStyle}>
                          <i className="fas fa-angle-right"></i>
                        </span>
                      )}
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/*
          Filters are temporarily disabled.
          <CarListingRight
            filters={filters}
            setFilters={setFilters}
            setCurrentPage={setCurrentPage}
            isMobileOpen={isMobileOpen}
            setIsMobileOpen={setIsMobileOpen}
          />
          */}
        </div>
      </div>
    </section>
  );
};

export default CarListVTwoMain;
