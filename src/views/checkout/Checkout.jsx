"use client";

import React from 'react';
import Banner from '../../sections/common/Banner';
import MultiStepCheckout from '../../sections/checkout/MultiStepCheckout';

const Checkout = () => {
  return (
    <>
      <Banner breadcrumb="Checkout & Rental Agreement" />
      <MultiStepCheckout />
    </>
  );
};

export default Checkout;
