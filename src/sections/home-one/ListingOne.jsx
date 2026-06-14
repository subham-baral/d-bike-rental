"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import TextAnimation from '../../components/elements/TextAnimation';

const ListingOne = () => {
    const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchVehicles = async () => {
            try {
                const res = await fetch('/api/vehicles');
                const result = await res.json();
                if (result.success && result.data) {
                    setVehicles(result.data);
                }
            } catch (error) {
                console.error("Failed to fetch vehicles:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchVehicles();
    }, []);

    return (
        <section className="listing-one" id='cars'>
            <div className="">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <div className="section-title__tagline-box justify-content-center">
                        <div className="section-title__tagline-shape">
                            <img src="/icon/motorbike.png" alt="shape" />
                        </div>
                        <span className="section-title__tagline">Checkout our new vehicles</span>
                    </div>
                    <h2 className="section-title__title title-animation"><TextAnimation text='Explore Most Popular Vehicles' /></h2>
                </div>
                
                {loading ? (
                    <div className="text-center" style={{ padding: '50px 0' }}>
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : (
                    <div className="listing-one__tab-box listing-one-tabs-box">
                        <div className="p-tabs-content">
                            <div className="p-tab active-tab">
                                <div className="listing-one__inner">
                                    <div className="listing-one__carousel owl-carousel owl-theme owl-loaded owl-drag">
                                        <Swiper slidesPerView={1} spaceBetween={30} loop={vehicles.length > 5} autoplay={{
                                            delay: 4000,
                                            disableOnInteraction: false
                                        }} pagination={{ clickable: true }} speed={1000} modules={[Navigation, Autoplay, Pagination]} breakpoints={{
                                            792: { slidesPerView: 2, spaceBetween: 0 },
                                            1024: { slidesPerView: 3, spaceBetween: 0 },
                                            1324: { slidesPerView: 4, spaceBetween: 0 },
                                            1624: { slidesPerView: 5, spaceBetween: 0 }
                                        }}>
                                            {vehicles.map((item, i) => {
                                                const fuelTaxonomy = item.taxonomy_terms_resolved?.find(t => t.taxonomy_slug === 'fuel-type');
                                                const categoryTaxonomy = item.taxonomy_terms_resolved?.find(t => t.taxonomy_slug === 'rental-category');
                                                const fuelType = fuelTaxonomy ? fuelTaxonomy.name : "Petrol";
                                                const category = categoryTaxonomy ? categoryTaxonomy.name : "Self Drive";
                                                const imageUrl = item.data?.cover_image?.file_path ? `https://cdn.one9ty.com/one9ty-travel/${item.data.cover_image.file_path}` : "/assets/images/resources/listing-1-1.png";

                                                return (
                                                    <SwiperSlide key={item.id || i}>
                                                        <div className="item">
                                                            <div className="listing-one__single MX100">
                                                                <div className="listing-one__img">
                                                                    <img src={imageUrl} alt={item.data?.title || item.title} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                                                                </div>
                                                                <div className="listing-one__content">
                                                                    <h3 className="listing-one__title"><Link href={`/listing-single`}>{item.data?.title || item.title}</Link></h3>
                                                                    <div className="listing-one__meta-box-info">
                                                                        <ul className="list-unstyled listing-one__meta">
                                                                            <li>
                                                                                <div className="icon"><span className="icon-manual"></span></div>
                                                                                <div className="text"><p>Manual</p></div>
                                                                            </li>
                                                                            <li>
                                                                                <div className="icon"><span className="icon-mileage"></span></div>
                                                                                <div className="text"><p>{item.data?.mileage || "45 km"}</p></div>
                                                                            </li>
                                                                            <li>
                                                                                <div className="icon"><span className="icon-fuel-type"></span></div>
                                                                                <div className="text"><p>{fuelType}</p></div>
                                                                            </li>
                                                                        </ul>
                                                                        <ul className="list-unstyled listing-one__meta listing-one__meta--two">
                                                                            <li>
                                                                                <div className="icon"><span className="icon-test-drive"></span></div>
                                                                                <div className="text"><p>{category}</p></div>
                                                                            </li>
                                                                            <li>
                                                                                <div className="icon"><span className="icon-avatar"></span></div>
                                                                                <div className="text"><p>Age 18+</p></div>
                                                                            </li>
                                                                            <li>
                                                                                <div className="icon"><span className="icon-in-person"></span></div>
                                                                                <div className="text"><p>{item.data?.seating_capacity || 2} Persons</p></div>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="listing-one__bottom-flex">
                                                                        <div className="listing-one__car-rent-box">
                                                                            <p className="listing-one__car-rent">Starting From <span>₹{item.data?.price_per_day || 499}/</span> Day</p>
                                                                        </div>
                                                                        <div className="listing-one__btn-box">
                                                                            <Link href={`/listing-single`} className="thm-btn">
                                                                                View Details <span className="fas fa-arrow-right"></span>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                );
                                            })}
                                        </Swiper>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ListingOne;