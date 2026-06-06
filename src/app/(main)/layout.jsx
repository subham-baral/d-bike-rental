"use client";

import React from 'react';
import Header from '../../sections/common/Header';
import Gallery from '../../sections/common/Gallery';
import Footer from '../../sections/common/Footer';
import StrickyHeader from '../../sections/common/StrickyHeader';
export default function InnerLayout({
  children
}) {
  return <div className='page-wrapper'>
            <Header />
            {children}
            <Gallery />
            <Footer />
            <StrickyHeader />
        </div>;
}