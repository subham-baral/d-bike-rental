"use client";

import React from 'react';
import Header from '../../sections/common/Header';
import Footer from '../../sections/common/Footer';
import StrickyHeader from '../../sections/common/StrickyHeader';

export default function InnerLayout({
  children
}) {
  return <div className='page-wrapper'>
            <Header />
            {children}
            <Footer />
            <StrickyHeader />
        </div>;
}
