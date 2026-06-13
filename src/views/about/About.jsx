import React from 'react';
import Banner from '../../sections/common/Banner';
import AboutOne from '../../sections/home-one/AboutOne';
import TestimonialOne from '../../sections/home-one/TestimonialOne';
import ServiceInner from '../../sections/service/ServiceInner';
import BookingInner from '../../sections/booking/BookingInner';
import ListingOne from '../../sections/home-one/ListingOne';
import RideExperience from '../../sections/about/RideExperience';
const About = () => {
  return <>
            <Banner breadcrumb='About Us' />
            <AboutOne sectionClass='about-page' />
            <ServiceInner sectionClass='services-one' />
            <BookingInner />
            <ListingOne />
            <TestimonialOne />
            <RideExperience />
        </>;
};
export default About;
