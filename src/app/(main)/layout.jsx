"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import Header from '../../sections/common/Header';
import Gallery from '../../sections/common/Gallery';
import Footer from '../../sections/common/Footer';
import StrickyHeader from '../../sections/common/StrickyHeader';
export default function InnerLayout({
  children
}) {
  const pathname = usePathname();
  const showGallery = pathname !== '/about';

  return <div className='page-wrapper'>
            <Header />
            {children}
            {showGallery && <Gallery />}
            <Footer />
            <StrickyHeader />
        </div>;
}
