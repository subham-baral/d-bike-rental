import React from 'react';
import ListingBottomLeft from './ListingBottomLeft';
import ListingBottomRight from './ListingBottomRight';
import ListingTop from './ListingTop';

const CarListingSingleMain = ({ vehicle }) => {
  const coverUrl = vehicle?.data?.cover_image?.file_path
    ? `https://cdn.one9ty.com/one9ty-travel/${vehicle.data.cover_image.file_path}`
    : '/assets/images/resources/listing-1-1.png';
  const vehicleType = vehicle?.taxonomy_terms_resolved?.find(
    (taxonomy) => taxonomy.taxonomy_slug === 'vehicle-type'
  )?.name;
  const fuelType = vehicle?.taxonomy_terms_resolved?.find(
    (taxonomy) => taxonomy.taxonomy_slug === 'fuel-type'
  )?.name;
  const metaItems = [
    vehicle?.data?.title || 'Vehicle',
    vehicle?.data?.mileage ? `${vehicle.data.mileage} Mileage` : 'Unlimited Mileage',
    vehicleType || 'Standard',
    fuelType || 'Petrol',
  ];

  return <section className="listing-single">
            <div className="container">
                <ListingTop vehicle={vehicle} />
                <div className="listing-single__inner">
                    <div className="listing-single__main-content">
                        <div className="listing-single__main-content-inner">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6">
                                    <div className="listing-single__left">
                                        <div className="listing-single__img">
                                            <img src={coverUrl} alt={vehicle?.data?.title || 'Vehicle image'} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="listing-single__right">
                                        <h3 className="listing-single__title-two">{vehicle?.data?.title}</h3>
                                        <p className="listing-single__text">{vehicle?.data?.short_description || vehicle?.data?.title}</p>
                                        <ul className="list-unstyled listing-single__meta">
                                            {metaItems.map((item, index) => <li key={index}>
                                                    <div className="icon">
                                                        <span className="far fa-check-circle"></span>
                                                    </div>
                                                    <div className="text">
                                                        <p>{item}</p>
                                                    </div>
                                                </li>)}
                                        </ul>
                                        <div className="listing-single__btn-and-video-box">
                                            <div className="listing-single__btn-box">
                                                <a href="#booking-form-section" className="thm-btn">
                                                    Book Now
                                                    <span className="fas fa-arrow-right"></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="listing-single__bottom">
                    <div className="row">
                        <ListingBottomLeft vehicle={vehicle} />
                        <ListingBottomRight vehicle={vehicle} />
                    </div>
                </div>
            </div>
        </section>;
};
export default CarListingSingleMain;
