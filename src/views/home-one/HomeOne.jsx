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
const HomeOne = () => {
  return <div className='page-wrapper'>
            <Header />
            <BannerOne />
            <SlidingTextOne />
            <ListingOne />
            <ServiceOne />
            <AboutOne />
            <ProcessOne />
            <TestimonialOne />
            <FaqOne />
            <LetsTalk />
            {/* <BlogOne /> */}
            <Footer />
            <StrickyHeader />
        </div>;
};
export default HomeOne;