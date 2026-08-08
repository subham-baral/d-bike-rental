"use client";

import React from 'react';

const ListingBottomRight = ({ vehicle }) => {
  if (!vehicle || !vehicle.data) return null;

  const bikeName = vehicle.data.title || "a bike";
  const phone = vehicle.data.phone || "+91 9178322260";
  const rawPhone = phone.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${rawPhone || '9178322260'}?text=${encodeURIComponent(`Hi, I am interested in renting the ${bikeName} from your website.`)}`;

  return (
    <div className="col-xl-4 col-lg-5">
      <div className="listing-single__sidebar">
        <div className="listing-single__contact-info listing-single__single-box">
          <div className="listing-single__contact-phone">
            <a href={`tel:${rawPhone || '9178322260'}`} className="listing-single__contact-phone-number"> <span className="icon-call-3"></span> {phone}</a>
            <p className="listing-single__contact-phone-text">Contact D-Bike Rental Support</p>
          </div>
          <div className="listing-single__contact-btn-box">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"> <i className="fab fa-whatsapp"></i>Whatsapp</a>
            <a href="mailto:dbikerental1@gmail.com"> <i className="far fa-envelope"></i>Email Address</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingBottomRight;