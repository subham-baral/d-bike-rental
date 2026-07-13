import React from "react";
import Banner from "../../sections/common/Banner";
import CarListVTwoMain from "../../sections/cars/CarListVTwoMain";

const CarListVTwo = ({ currentPage }) => {
  return (
    <>
      <Banner breadcrumb="Vehicles List" />
      <CarListVTwoMain currentPage={currentPage} />
    </>
  );
};

export default CarListVTwo;
