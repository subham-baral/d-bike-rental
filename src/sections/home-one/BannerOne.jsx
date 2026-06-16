"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';
import CustomSelect from "../../components/elements/CustomSelect";

const sliderData = [{
    id: 1,
    titleHighlight: "Rentals"
}, {
    id: 2,
    titleHighlight: "Cars"
}, {
    id: 3,
    titleHighlight: "Scooters"
}];

const BannerOne = () => {
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const router = useRouter();

    const [taxonomies, setTaxonomies] = useState([]);
    
    // Selected IDs
    const [pickupLocation, setPickupLocation] = useState('');
    const [vehicleType, setVehicleType] = useState('');
    const [fuelType, setFuelType] = useState('');
    const [brand, setBrand] = useState('');

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
                    setTaxonomies(json.data);
                }
            } catch (err) {
                console.error("Error fetching taxonomies:", err);
            }
        };
        fetchTaxonomies();
    }, []);

    const getTaxonomyOptions = (slug) => {
        const tax = taxonomies.find(t => t.slug === slug);
        if (!tax || !tax.terms) return [{ value: "", label: "Loading..." }];
        
        const defaultOption = { value: "", label: "Select..." };
        const termOptions = tax.terms.map(t => ({ value: String(t.id), label: t.name }));
        return [defaultOption, ...termOptions];
    };

    const handleSubmit = e => {
        e.preventDefault();
        
        const params = new URLSearchParams();
        if (pickupLocation) params.append('pickup-location', pickupLocation);
        if (vehicleType) params.append('rental-category', vehicleType);
        if (fuelType) params.append('fuel-type', fuelType);
        if (brand) params.append('brand', brand);

        const queryString = params.toString();
        const targetUrl = `/vehicles${queryString ? `?${queryString}` : ''}`;
        
        router.push(targetUrl);
    };

    return (
        <section className="main-slider" id='home' style={{ position: 'relative' }}>
            {/* Static Background Image outside of the slider */}
            <div className="main-slider__bg" style={{
                backgroundImage: `url(/bikes/close-up-photo-high-power-motorcycle-part.png)`
            }} />

            <div className="main-slider__carousel">
                <div className="item active">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12">
                                <div className="main-slider__content text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <div className="main-slider__sub-title-box">
                                        <p className="main-slider__sub-title">Welcome to</p>
                                    </div>
                                    <h2 className="main-slider__title">
                                        D Bike <span>Rental</span>
                                    </h2>
                                    <p className="main-slider__sub-title-two" style={{ maxWidth: '600px', fontSize: '18px', marginTop: '20px', lineHeight: '1.6', color: 'rgb(255, 255, 255)' }}>
                                        Explore the city with freedom and ease. We offer a premium fleet of well-maintained motorcycles and scooters for an unforgettable riding experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Static Booking Form Overlay */}
            <div className="container booking-one banner-booking-container">
                <div className="row w-100 mx-0 justify-content-center">
                    <div className="col-xl-10 col-lg-12 col-md-12" style={{ pointerEvents: 'auto', marginTop: '20px', marginBottom: '30px' }}>
                        <motion.div initial={{ y: 80, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ amount: 0.01, once: true }} className="booking-one__right wow fadeInUp">
                            <div className="booking-one__content" style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.2)', padding: '0', overflow: 'visible', borderRadius: '10px', backgroundColor: '#fff' }}>
                                <div className="booking-one__title-box" style={{ padding: '25px 0', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}>
                                    <div className="booking-one__title-shape" />
                                    <h3 className="booking-one__title" style={{ fontSize: '20px' }}>Book your ride with D Bike Rental</h3>
                                </div>
                                <div style={{ padding: '20px 30px 30px' }}>

                                <form className="booking-one__form" onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-xl col-lg-4 col-md-6 col-6">
                                            <div className="booking-one__input-box" style={{ marginBottom: '15px' }}>
                                                <p className="booking-one__input-title" style={{ marginBottom: '5px' }}><span className="fas fa-map-marker-alt" style={{ marginRight: "5px", color: 'var(--gorent-secondary, #EE4325)' }}></span> Pickup</p>
                                                <div className="select-box">
                                                    <CustomSelect optionArray={getTaxonomyOptions('pickup-location')} value={pickupLocation} onChange={value => setPickupLocation(value)} /> 
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl col-lg-4 col-md-6 col-6">
                                            <div className="booking-one__input-box" style={{ marginBottom: '15px' }}>
                                                <p className="booking-one__input-title" style={{ marginBottom: '5px' }}><span className="fas fa-motorcycle" style={{ marginRight: "5px", color: 'var(--gorent-secondary, #EE4325)' }}></span> Vehicle</p>
                                                <div className="select-box">
                                                    <CustomSelect optionArray={getTaxonomyOptions('rental-category')} value={vehicleType} onChange={value => setVehicleType(value)} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl col-lg-4 col-md-6 col-6">
                                            <div className="booking-one__input-box" style={{ marginBottom: '15px' }}>
                                                <p className="booking-one__input-title" style={{ marginBottom: '5px' }}><span className="fas fa-gas-pump" style={{ marginRight: "5px", color: 'var(--gorent-secondary, #EE4325)' }}></span> Fuel</p>
                                                <div className="select-box">
                                                    <CustomSelect optionArray={getTaxonomyOptions('fuel-type')} value={fuelType} onChange={value => setFuelType(value)} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl col-lg-4 col-md-6 col-6">
                                            <div className="booking-one__input-box" style={{ marginBottom: '15px' }}>
                                                <p className="booking-one__input-title" style={{ marginBottom: '5px' }}><span className="fas fa-tag" style={{ marginRight: "5px", color: 'var(--gorent-secondary, #EE4325)' }}></span> Brand</p>
                                                <div className="select-box">
                                                    <CustomSelect optionArray={getTaxonomyOptions('brand')} value={brand} onChange={value => setBrand(value)} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl col-lg-4 col-md-6 col-12 d-flex align-items-end justify-content-center">
                                            <div className="booking-one__btn-box" style={{ marginBottom: '15px' }}>
                                                <button type="submit" className="thm-btn" style={{ justifyContent: 'center', padding: '10px 30px' }}>
                                                    Search
                                                    <span className="fas fa-search" style={{ marginLeft: '10px' }}></span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BannerOne;