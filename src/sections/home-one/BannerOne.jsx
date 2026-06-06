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

            <div className="main-slider__carousel owl-carousel owl-theme">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    autoplay={{
                        delay: 6000,
                        disableOnInteraction: false
                    }}
                    loop={true}
                    speed={1000}
                    onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
                    onSwiper={setSwiperInstance}
                >
                    {sliderData.map((item, index) => (
                        <SwiperSlide key={item.id}>
                            <div className={`item ${index === activeIndex ? "active" : ""}`}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-7 col-lg-6">
                                            <div className="main-slider__content">
                                                <div className="main-slider__sub-title-box">
                                                    <p className="main-slider__sub-title">Welcome to</p>
                                                </div>
                                                <h2 className="main-slider__title">
                                                    D Bike <span>{item.titleHighlight}</span>
                                                </h2>
                                                <p className="main-slider__sub-title-two">Experience</p>
                                                <div className="main-slider__btn-and-video-box">
                                                    <div className="main-slider__btn-box">
                                                        <Link href="/about" className="thm-btn">
                                                            Read More
                                                            <span className="fas fa-arrow-right"></span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="owl-nav">
                    <button onClick={() => swiperInstance?.slidePrev()} type="button" role="presentation" className="owl-prev">
                        <span className="icon-right-arrow-1"></span>
                    </button>
                    <button onClick={() => swiperInstance?.slideNext()} type="button" role="presentation" className="owl-next">
                        <span className="icon-right-arrow-1"></span>
                    </button>
                </div>
            </div>

            {/* Static Booking Form Overlay */}
            <div className="container booking-one" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 10, pointerEvents: 'none', display: 'flex', alignItems: 'center' }}>
                <div className="row w-100 mx-0">
                    <div className="col-xl-4 offset-xl-8 col-lg-5 offset-lg-7" style={{ pointerEvents: 'auto' }}>
                        <motion.div initial={{ x: 80, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ amount: 0.01, once: true }} className="booking-one__right wow slideInRight">
                            <div className="booking-one__content" style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.2)', padding: '0', overflow: 'hidden' }}>
                                <div className="booking-one__title-box" style={{ padding: '25px 0' }}>
                                    <div className="booking-one__title-shape" />
                                    <h3 className="booking-one__title" style={{ fontSize: '20px' }}>Book your ride with D Bike Rental</h3>
                                </div>
                                <div style={{ padding: '20px 30px 30px' }}>

                                <form className="booking-one__form" onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="booking-one__input-box" style={{ marginBottom: '15px' }}>
                                                <p className="booking-one__input-title" style={{ marginBottom: '5px' }}><span className="icon-pin-2" style={{ marginRight: "5px" }}></span> Pickup</p>
                                                <div className="select-box">
                                                    <CustomSelect optionArray={[{ value: "Enter a Location", label: "Enter a Location" }, { value: "Puri Station", label: "Puri Station" }]} value={pickupLocation} onChange={value => setPickupLocation(value)} /> 
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="booking-one__input-box" style={{ marginBottom: '15px' }}>
                                                <p className="booking-one__input-title" style={{ marginBottom: '5px' }}><span className="icon-pin-2" style={{ marginRight: "5px" }}></span> Drop off</p>
                                                <div className="select-box">
                                                    <CustomSelect optionArray={[{ value: "Enter a Location", label: "Enter a Location" }, { value: "Puri Station", label: "Puri Station" }]} value={dropoffLocation} onChange={value => setDropoffLocation(value)} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="booking-one__input-box" style={{ marginBottom: '15px' }}>
                                                <p className="booking-one__input-title" style={{ marginBottom: '5px' }}><img src="/icon/motorcross.png" alt="icon" style={{ width: "20px", marginRight: "5px" }} /> Vehicle type</p>
                                                <div className="select-box">
                                                    <CustomSelect optionArray={[{ value: "Motorcycle", label: "Motorcycle" }, { value: "Scooter", label: "Scooter" }, { value: "Car", label: "Car" }, { value: "Bus", label: "Bus" }]} value={carType} onChange={value => setCarType(value)} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="booking-one__input-box" style={{ marginBottom: '15px' }}>
                                                <p className="booking-one__input-title" style={{ marginBottom: '5px' }}><span className="icon-date" style={{ marginRight: "5px" }}></span> Date</p>
                                                <input type="date" value={date} onChange={e => setDate(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="col-xl-12">
                                            <div className="booking-one__btn-box" style={{ marginTop: '10px' }}>
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