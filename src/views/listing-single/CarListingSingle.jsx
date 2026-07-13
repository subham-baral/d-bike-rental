import React from "react";
import Banner from "../../sections/common/Banner";
import CarListingSingleMain from "../../sections/car-list-single/CarListingSingleMain";

const REVALIDATE_SECONDS = 86400;

export const getVehicleDetails = async (slug) => {
  const url = `${process.env.NEXT_PUBLIC_CMS_API_URL}/delivery/contents`;
  const requestBody = {
    content_type_id: "vehicle",
    status: "published",
    slug,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_CMS_API_TOKEN}`,
      },
      body: JSON.stringify(requestBody),
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!response.ok) {
      return null;
    }

    const result = await response.json();
    if (result?.success && result?.data?.data?.length > 0) {
      return result.data.data[0];
    }

    return null;
  } catch (error) {
    console.error("Failed to fetch vehicle details:", error);
    return null;
  }
};

const CarListingSingle = async ({ slug }) => {
  const vehicle = slug ? await getVehicleDetails(slug) : null;

  if (!vehicle) {
    return (
      <div className="text-center" style={{ padding: "150px 0" }}>
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
