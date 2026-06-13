"use client";

import React, { useState } from 'react';
import TextAnimation from '../../components/elements/TextAnimation';
import { testimonialData } from '../../all-content/testimonials/testimonialsData';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import { Autoplay, Navigation } from 'swiper/modules';
import sectionTitleShape from "../../assets/images/shapes/section-title-tagline-shape-1.png";
const TestimonialOne = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  // Helper function to get initials for text thumbnail
  const getInitials = (name) => {
    if (!name) return "U";
    return name.charAt(0).toUpperCase();
  };

  // Helper to generate a consistent color based on name
  const getThumbColor = (name) => {
    const colors = ["#ff5722", "#4caf50", "#2196f3", "#9c27b0", "#e91e63", "#00bcd4"];
    if (!name) return colors[0];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  };

  return <section className="testimonial-one" id='testimonial'>
            <div className="container">
                <div className="section-title text-left sec-title-animation animation-style2">
                    <div className="section-title__tagline-box">
                        <div className="section-title__tagline-shape">
<img src="/icon/motorbike.png" alt="shape" />
</div>
                        <span className="section-title__tagline">Our Testimonial</span>
                    </div>
                    <h2 className="section-title__title title-animation">
                        <TextAnimation text='What Peoples Say' />
                        <TextAnimation text=' about D Bike Rental' />
                    </h2>
                </div>
                <div className="testimonial-one__carousel owl-theme owl-carousel">
                    <Swiper slidesPerView={1} spaceBetween={30} loop={true} autoplay={{
          delay: 4000,
          disableOnInteraction: false
        }} onSwiper={setSwiperInstance} speed={1000} modules={[Navigation, Autoplay]} breakpoints={{
          // 320: { slidesPerView: 1, spaceBetween: 10 },
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30
          }
        }}>
                        {testimonialData.map(testimonial => <SwiperSlide key={testimonial?.id}><div className="item">
                                <div className="testimonial-one__single">
                                    <div className="testimonial-one__client-info">
                                        <div className="testimonial-one__img" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: getThumbColor(testimonial?.name), width: '60px', height: '60px', borderRadius: '50%', color: '#fff', fontSize: '24px', fontWeight: 'bold' }}>
                                            {getInitials(testimonial?.name)}
                                        </div>
                                        <div className="testimonial-one__content">
                                            <h4 className="testimonial-one__client-name"><Link href={testimonial?.link || "#"}>{testimonial?.name}</Link>
                                            </h4>
                                            <p className="testimonial-one__sub-title">{testimonial?.role}</p>
                                        </div>
                                    </div>
                                    <p className="testimonial-one__text">{testimonial?.text}</p>
                                    <div className="testimonial-one__rating">
                                        {Array.from({
                    length: testimonial?.rating || 5
                  }).map((_, index) => <span key={index} className="icon-star"></span>)}
                                    </div>
                                    <div className="testimonial-one__quote">
                                        <span className="icon-quote"></span>
                                    </div>
                                </div>
                            </div></SwiperSlide>)}
                    </Swiper>
                    <div className="owl-nav">
                        <button type="button" role="presentation" className="owl-prev" onClick={() => swiperInstance?.slidePrev()}>
                            <span className="far fa-long-arrow-left"></span>
                        </button>
                        <button type="button" role="presentation" className="owl-next" onClick={() => swiperInstance?.slideNext()}>
                            <span className="far fa-long-arrow-right"></span>
                        </button>
                    </div>

                </div>
            </div>
        </section>;
};
export default TestimonialOne;