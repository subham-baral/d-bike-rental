"use client";

import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';
import bookingImg from "../../assets/images/resources/booking-one-img-1.png";
import bookingShape from "../../assets/images/shapes/booking-one-shape-1.png";
import CustomSelect from "../../components/elements/CustomSelect";

const Booking = () => {
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
    
    // Construct query parameters using URLSearchParams
    const params = new URLSearchParams();
    if (pickupLocation) params.append('pickup-location', pickupLocation);
    if (vehicleType) params.append('rental-category', vehicleType); // or vehicle-type? In CMS API we saw rental-category or vehicle-type? Wait.
    // Let me dynamically match exactly what we send.
    // Let's just push whatever is selected.
    
    // Using exact slugs from CMS
    if (pickupLocation) params.append('pickup-location', pickupLocation);
    if (vehicleType) params.append('rental-category', vehicleType);
    if (fuelType) params.append('fuel-type', fuelType);
    if (brand) params.append('brand', brand);

    const queryString = params.toString();
    const targetUrl = `/vehicles${queryString ? `?${queryString}` : ''}`;
    
    router.push(targetUrl);
  };

  return <section className="booking-one">
            <div className="booking-one__wrap">
                <div className="booking-one__bg"></div>

                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-5">
                            <div className="booking-one__left">
                                <motion.div className="booking-one__img wow " initial={{
                x: -80,
                opacity: 0
              }} whileInView={{
                x: 0,
                opacity: 1
              }} transition={{
                duration: 0.6,
                ease: "easeOut"
              }} viewport={{
                amount: 0.01,
                once: true
              }}>
                                    <img src={bookingImg.src} alt="booking" />
                                </motion.div>

                                <motion.div initial={{
                x: -80,
                opacity: 0
              }} whileInView={{
                x: 0,
                opacity: 1
              }} transition={{
                duration: 0.6,
                ease: "easeOut"
              }} viewport={{
                amount: 0.01,
                once: true
              }} className="booking-one__shape-1 ">
                                    <img src={bookingShape.src} alt="shape" />
                                </motion.div>
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-7">
                            <motion.div initial={{
              x: 80,
              opacity: 0
            }} whileInView={{
              x: 0,
              opacity: 1
            }} transition={{
              duration: 0.6,
              ease: "easeOut"
            }} viewport={{
              amount: 0.01,
              once: true
            }} className="booking-one__right wow slideInRight">
                                <div className="booking-one__content">
                                    {/* Title */}
                                    <div className="booking-one__title-box">
                                        <div className="booking-one__title-shape" />
                                        <h3 className="booking-one__title">Book your ride with D Bike Rental</h3>
                                    </div>

                                    {/* Form */}
                                    <form className="booking-one__form" onSubmit={handleSubmit}>
                                        <div className="row">
                                            {/* Pickup */}
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="booking-one__input-box">
                                                    <p className="booking-one__input-title">
                                                        <span className="fas fa-map-marker-alt" style={{ marginRight: "10px", color: 'var(--gorent-secondary, #EE4325)' }}></span> Pickup
                                                    </p>
                                                    <div className="select-box">
                                                        <CustomSelect 
                                                            optionArray={getTaxonomyOptions('pickup-location')} 
                                                            value={pickupLocation} 
                                                            onChange={value => setPickupLocation(value)} 
                                                        /> 
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Vehicle Type (Rental Category) */}
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="booking-one__input-box">
                                                    <p className="booking-one__input-title">
                                                        <span className="fas fa-motorcycle" style={{ marginRight: "10px", color: 'var(--gorent-secondary, #EE4325)' }}></span> Vehicle type
                                                    </p>
                                                    <div className="select-box">
                                                        <CustomSelect 
                                                            optionArray={getTaxonomyOptions('rental-category')} 
                                                            value={vehicleType} 
                                                            onChange={value => setVehicleType(value)} 
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Fuel Type */}
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="booking-one__input-box">
                                                    <p className="booking-one__input-title">
                                                        <span className="fas fa-gas-pump" style={{ marginRight: "10px", color: 'var(--gorent-secondary, #EE4325)' }}></span> Fuel Type
                                                    </p>
                                                    <div className="select-box">
                                                        <CustomSelect 
                                                            optionArray={getTaxonomyOptions('fuel-type')} 
                                                            value={fuelType} 
                                                            onChange={value => setFuelType(value)} 
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Brand */}
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="booking-one__input-box">
                                                    <p className="booking-one__input-title">
                                                        <span className="fas fa-tag" style={{ marginRight: "10px", color: 'var(--gorent-secondary, #EE4325)' }}></span> Brand
                                                    </p>
                                                    <div className="select-box">
                                                        <CustomSelect 
                                                            optionArray={getTaxonomyOptions('brand')} 
                                                            value={brand} 
                                                            onChange={value => setBrand(value)} 
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Submit */}
                                            <div className="col-xl-12 mt-3 text-center">
                                                <div className="booking-one__btn-box d-inline-block">
                                                    <button type="submit" className="thm-btn" style={{ padding: '10px 40px' }}>
                                                        Search
                                                        <span className="fas fa-search" style={{ marginLeft: '10px' }}></span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                    <div className="result"></div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>;
};
export default Booking;