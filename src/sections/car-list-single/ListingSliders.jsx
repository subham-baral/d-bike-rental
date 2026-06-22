"use client";

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import Link from 'next/link';

const ListingSliders = ({ vehicle }) => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  if (!vehicle || !vehicle.data) return null;

  const coverUrl = vehicle.data.cover_image?.file_path 
    ? `https://cdn.one9ty.com/one9ty-travel/${vehicle.data.cover_image.file_path}` 
    : "/assets/images/resources/listing-1-1.png";

  const galleryUrls = (vehicle.data.gallery_image || []).map(img => 
    `https://cdn.one9ty.com/one9ty-travel/${img.file_path}`
  );

  const allImages = [coverUrl, ...galleryUrls];

  const mainSliderData = allImages.map((imgUrl, index) => ({
    id: index + 1,
    title: vehicle.data.title,
    image: imgUrl,
    description: vehicle.data.short_description || vehicle.data.title,
    videoUrl: "", // Remove video logic if not supported by backend
    lists: [
      {
        icon: "far fa-check-circle",
        text: vehicle.data.title || "Activa 6 g"
      },
      {
        icon: "icon-mileage",
        text: vehicle.data.mileage ? `${vehicle.data.mileage} Mileage` : "Unlimited Mileage"
      },
      {
        icon: vehicle.taxonomy_terms_resolved?.find(t => t.taxonomy_slug === 'vehicle-type')?.name?.toLowerCase().includes('car') ? "fas fa-car" : "fas fa-motorcycle",
        text: vehicle.taxonomy_terms_resolved?.find(t => t.taxonomy_slug === 'vehicle-type')?.name || "Standard"
      },
      {
        icon: "icon-fuel-type",
        text: vehicle.taxonomy_terms_resolved?.find(t => t.taxonomy_slug === 'fuel-type')?.name || "Petrol"
      }
    ]
  }));

  const thambList = allImages.map((imgUrl, index) => ({
    id: index + 1,
    img: imgUrl
  }));

  return (
    <div className="listing-single__inner">
      <div className="listing-single__main-content">
        <div className="swiper-container" id="listing-single__carousel">
          <div className="swiper-wrapper">
            <Swiper slidesPerView={1} spaceBetween={30} loop={true} autoplay={{
              delay: 4000,
              disableOnInteraction: false
            }} speed={1000} modules={[Navigation, Autoplay]} onSwiper={setSwiperInstance}>
              {mainSliderData.map(item => (
                <SwiperSlide key={item?.id}>
                  <div className="swiper-slide">
                    <div className="listing-single__main-content-inner">
                      <div className="row">
                        <div className="col-xl-5 col-lg-5">
                          <div className="listing-single__left">
                            <div className="listing-single__img">
                              <img src={item?.image} alt={item?.title} />
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-7 col-lg-7">
                          <div className="listing-single__right">
                            <h3 className="listing-single__title-two">{item?.title}</h3>
                            <p className="listing-single__text">{item?.description}</p>
                            <ul className="list-unstyled listing-single__meta">
                              {item?.lists.map((list, i) => (
                                <li key={i}>
                                  <div className="icon">
                                    <span className={list?.icon}></span>
                                  </div>
                                  <div className="text">
                                    <p>{list?.text}</p>
                                  </div>
                                </li>
                              ))}
                            </ul>
                            <div className="listing-single__btn-and-video-box">
                              <div className="listing-single__btn-box">
                                <a 
                                  href="#booking-form-section" 
                                  onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('booking-form-section')?.scrollIntoView({ behavior: 'smooth' });
                                  }}
                                  className="thm-btn"
                                >
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
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        {allImages.length > 1 && (
          <div className="listing-single__nav">
            <div className="swiper-button-next" id="listing-single__swiper-button-prev" onClick={() => swiperInstance?.slidePrev()}>
              <i className="far fa-long-arrow-left"></i>
            </div>
            <div className="swiper-button-prev" id="listing-single__swiper-button-next" onClick={() => swiperInstance?.slideNext()}>
              <i className="far fa-long-arrow-right"></i>
            </div>
          </div>
        )}
      </div>

      <div className="listing-single__thumb-box">
        <div className="swiper-container" id="listing-single__thumb">
          <div className="swiper-wrapper">
            <Swiper direction="vertical" slidesPerView={3} spaceBetween={5} loop={true} speed={1000} autoplay={{
              delay: 4000,
              disableOnInteraction: false
            }} modules={[Autoplay]}>
              {thambList.map(item => (
                <SwiperSlide key={item?.id}>
                  <div className="swiper-slide">
                    <div className="listing-single__img-holder-box">
                      <div className="listing-single__img-holder">
                        <img src={item?.img} alt="Image" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingSliders;