import React from 'react';
import ListingSliders from './ListingSliders';
import ListingBottomLeft from './ListingBottomLeft';
import ListingBottomRight from './ListingBottomRight';
import ListingTop from './ListingTop';
const CarListingSingleMain = ({ vehicle }) => {
  return <section className="listing-single">
            <div className="container">
                <ListingTop vehicle={vehicle} />
                <ListingSliders vehicle={vehicle} />
                <div className="listing-single__bottom">
                    <div className="row">
                        <ListingBottomLeft vehicle={vehicle} />
                        <ListingBottomRight vehicle={vehicle} />
                    </div>
                </div>
            </div>
        </section>;
};
export default CarListingSingleMain;