import React from 'react';
import Header from '../../sections/common/Header';
import BannerOne from '../../sections/home-one/BannerOne';
import SlidingTextOne from '../../sections/home-one/SlidingTextOne';
import ServiceOne from '../../sections/home-one/ServiceOne';
import AboutOne from '../../sections/home-one/AboutOne';
import ProcessOne from '../../sections/home-one/ProcessOne';
import TestimonialOne from '../../sections/home-one/TestimonialOne';
import FaqOne from '../../sections/home-one/FaqOne';
import Footer from '../../sections/common/Footer';
import StrickyHeader from '../../sections/common/StrickyHeader';
import LetsTalk from '../../sections/common/LetsTalk';
import ListingOne from '../../sections/home-one/ListingOne';
import BlogOne from '../../sections/blog/BlogOne';

const fetchVehicles = async () => {
  try {
    const url = `${process.env.NEXT_PUBLIC_CMS_API_URL}/delivery/contents`;
    const requestBody = {
      content_type_id: "vehicle",
      status: "published",
      sort_by: "created_at",
      sort_order: "desc",
      per_page: 50
    };

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_CMS_API_TOKEN}`
      },
      body: JSON.stringify(requestBody),
      cache: 'no-store'
    });

    const result = await res.json();
    if (result.success && result.data) {
      return result.data.data || [];
    }
  } catch (error) {
    console.error("Failed to fetch vehicles in HomeOne:", error);
  }
  return [];
};

const HomeOne = async () => {
  const vehicles = await fetchVehicles();

  return (
    <div className='page-wrapper'>
      <Header />
      <BannerOne />
      <SlidingTextOne />
      <ListingOne vehicles={vehicles} />
      <ServiceOne />
      <AboutOne />
      <ProcessOne />
      <TestimonialOne />
      <FaqOne />
      <LetsTalk />
      <BlogOne />
      <Footer />
      <StrickyHeader />
    </div>
  );
};

export default HomeOne;