import React from 'react';
import Header from '../../sections/common/Header';
import Gallery from '../../sections/common/Gallery';
import Footer from '../../sections/common/Footer';
import StrickyHeader from '../../sections/common/StrickyHeader';
import SuspenseWrapper from '../../components/elements/SuspenseWrapper';
const InnerLayout = () => {
  return <div className='page-wrapper'>
            <Header />
            <SuspenseWrapper>
                <Outlet />
            </SuspenseWrapper>
            <Gallery />
            <Footer />
            <StrickyHeader />
        </div>;
};
export default InnerLayout;