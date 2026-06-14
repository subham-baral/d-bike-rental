"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { motion } from "framer-motion";
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

    const [pickupLocation, setPickupLocation] = useState('');
    const [dropoffLocation, setDropoffLocation] = useState('');
    const [carType, setCarType] = useState('');
    const [date, setDate] = useState('');

    const validate = () => {
        const newErrors = {};
        if (!pickupLocation || pickupLocation === 'Enter a Location') newErrors.pickup = 'Pickup location required';
        if (!dropoffLocation || dropoffLocation === 'Enter a Location') newErrors.dropoff = 'Dropoff location required';
        if (!carType) newErrors.carType = 'Car type required';
        if (!date) newErrors.date = 'Date required';
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async e => {
        e.preventDefault();
        if (!validate()) return;
        const bookingData = { pickupLocation, dropoffLocation, carType, date };
        if (bookingData) return;
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
                            <div className="booking-one__content" style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.2)', padding: '0', overflow: 'hidden' }}>
                                <div className="booking-one__title-box" style={{ padding: '25px 0' }}>
                                    <div className="booking-one__title-shape" />
                                    <h3 className="booking-one__title" style={{ fontSize: '20px' }}>Book your ride with D Bike Rental</h3>
                                </div>
                                <div style={{ padding: '20px 30px 30px' }}>

                                <form className="booking-one__form" onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-xl-2 col-lg-2 col-md-4 col-6">
                                            <div className="booking-one__input-box" style={{ marginBottom: '15px' }}>
                                                <p className="booking-one__input-title" style={{ marginBottom: '5px' }}><span className="icon-pin-2" style={{ marginRight: "5px" }}></span> Pickup</p>
                                                <div className="select-box">
                                                    <CustomSelect optionArray={[{ value: "Enter a Location", label: "Enter a Location" }, { value: "Puri Station", label: "Puri Station" }]} value={pickupLocation} onChange={value => setPickupLocation(value)} /> 
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-2 col-lg-2 col-md-4 col-6">
                                            <div className="booking-one__input-box" style={{ marginBottom: '15px' }}>
                                                <p className="booking-one__input-title" style={{ marginBottom: '5px' }}><span className="icon-pin-2" style={{ marginRight: "5px" }}></span> Drop off</p>
                                                <div className="select-box">
                                                    <CustomSelect optionArray={[{ value: "Enter a Location", label: "Enter a Location" }, { value: "Puri Station", label: "Puri Station" }]} value={dropoffLocation} onChange={value => setDropoffLocation(value)} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-3 col-md-4 col-6">
                                            <div className="booking-one__input-box" style={{ marginBottom: '15px' }}>
                                                <p className="booking-one__input-title" style={{ marginBottom: '5px' }}><img src="/icon/motorcross.png" alt="icon" style={{ width: "20px", marginRight: "5px" }} /> Vehicle type</p>
                                                <div className="select-box">
                                                    <CustomSelect optionArray={[{ value: "Motorcycle", label: "Motorcycle" }, { value: "Scooter", label: "Scooter" }, { value: "Car", label: "Car" }, { value: "Bus", label: "Bus" }]} value={carType} onChange={value => setCarType(value)} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-2 col-lg-2 col-md-6 col-6">
                                            <div className="booking-one__input-box" style={{ marginBottom: '15px' }}>
                                                <p className="booking-one__input-title" style={{ marginBottom: '5px' }}><span className="icon-date" style={{ marginRight: "5px" }}></span> Date</p>
                                                <input type="date" value={date} onChange={e => setDate(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-3 col-md-6 col-12 d-flex align-items-end">
                                            <div className="booking-one__btn-box w-100" style={{ marginBottom: '15px' }}>
                                                <button type="submit" className="thm-btn w-100" style={{ width: '100%', justifyContent: 'center' }}>
                                                    Book Now
                                                    <span className="fas fa-arrow-right"></span>
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