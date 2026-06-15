"use client";

import React, { useEffect, useState } from 'react';
import Banner from '../../sections/common/Banner';
import CarListingSingleMain from '../../sections/car-list-single/CarListingSingleMain';

const CarListingSingle = ({ slug }) => {
  const [vehicle, setVehicle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVehicleDetails = async () => {
      setLoading(true);
      try {
        const url = `${process.env.NEXT_PUBLIC_CMS_API_URL}/delivery/contents`;
        const requestBody = {
          content_type_id: "vehicle",
          status: "published",
          slug: slug
        };

        const res = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_CMS_API_TOKEN}`
          },
          body: JSON.stringify(requestBody)
        });

        const result = await res.json();
        if (result.success && result.data && result.data.data.length > 0) {
          setVehicle(result.data.data[0]);
        }
      } catch (error) {
        console.error("Failed to fetch vehicle details:", error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchVehicleDetails();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="text-center" style={{ padding: '150px 0' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!vehicle) {
    return (
      <div className="text-center" style={{ padding: '150px 0' }}>
        <h3>Vehicle not found</h3>
      </div>
    );
  }

  return (
    <>
      <Banner breadcrumb={vehicle.data?.title || "Vehicle Details"} />
      <CarListingSingleMain vehicle={vehicle} />
    </>
  );
};

export default CarListingSingle;