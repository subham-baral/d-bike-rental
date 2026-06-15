"use client";

import React from 'react';
import infoImg from "../../assets/images/listing/listing-single-seller-info-img-1.jpg";
import Link from 'next/link';

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
        <div className="listing-single__rent-car listing-single__single-box">
          <h3 className="listing-single__rent-car-title">Rent This Vehicle</h3>
          <div className="listing-single__rent-car-content">
            <div className="listing-single__rent-car-content-form">
              <div className="listing-single__rent-car-date-box">
                <p className="listing-single__rent-car-date-title">Pick-Up</p>
                <div className="listing-single__rent-car-date-time-box">
                  <input type="date" name="date" />
                  <input type="time" name="time" className="listing-single__rent-car-time-box" />
                </div>
              </div>
              <div className="listing-single__rent-car-date-box">
                <p className="listing-single__rent-car-date-title">Drop-Off</p>
                <div className="listing-single__rent-car-date-time-box">
                  <input type="date" name="date" />
                  <input type="time" name="time" className="listing-single__rent-car-time-box" />
                </div>
              </div>
              <div className="listing-single__rent-car-extra">
                <h3 className="listing-single__rent-car-extra-title">Add Extra:</h3>
                <ul className="list-unstyled">
                  <li>
                    <div className="checked-box">
                      <input type="checkbox" name="f_extra1" id="f_extra1" />
                      <label htmlFor="f_extra1"><span></span>Helmet</label>
                    </div>
                    <div className="counts-box"><p>₹50</p></div>
                  </li>
                  <li>
                    <div className="checked-box">
                      <input type="checkbox" name="f_extra2" id="f_extra2" />
                      <label htmlFor="f_extra2"><span></span>Insurance</label>
                    </div>
                    <div className="counts-box"><p>₹100</p></div>
                  </li>
                </ul>
              </div>
              <div className="listing-single__rent-car-price-box">
                <ul className="list-unstyled">
                  <li>
                    <div className="title"><p>Subtotal</p></div>
                    <div className="price"><p>₹{price}</p></div>
                  </li>
                  <li>
                    <div className="title"><p>Total Payable</p></div>
                    <div className="price"><p>₹{price}</p></div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="listing-single__btn-box-2">
            <Link href="#" className="thm-btn">Rent Now<span className="fas fa-arrow-right"></span></Link>
          </div>
        </div>
        
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