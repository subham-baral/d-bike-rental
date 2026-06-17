"use client";

import React from 'react';
import infoImg from "../../assets/images/listing/listing-single-seller-info-img-1.jpg";
import Link from 'next/link';
import DynamicBookingForm from './DynamicBookingForm';

const ListingBottomRight = ({ vehicle }) => {
  if (!vehicle || !vehicle.data) return null;

  const price = vehicle.data.price_per_day || 499;

  return (
    <div className="col-xl-4 col-lg-5">
      <div className="listing-single__sidebar">
        <div className="listing-single__rent-car-daily-price listing-single__single-box">
          <p>Daily rate</p>
          <h3>₹{price}</h3>
        </div>
        <DynamicBookingForm />
        
        <div className="listing-single__contact-info listing-single__single-box">
          <div className="listing-single__contact-phone">
            <a href="tel:+918112003520" className="listing-single__contact-phone-number"> <span className="icon-call-3"></span> +91 81120 03520</a>
            <p className="listing-single__contact-phone-text">Contact D-Bike Rental Support</p>
          </div>
          <div className="listing-single__contact-btn-box">
            <a href="#"> <i className="fab fa-whatsapp"></i>Whatsapp</a>
            <a href="mailto:dbikerental@gmail.com"> <i className="far fa-envelope"></i>Email Address</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingBottomRight;