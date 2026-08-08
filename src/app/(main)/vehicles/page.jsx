import CarListVTwo from "../../../views/car-list-v-two/CarListVTwo";

export const revalidate = 86400;

export const metadata = {
  title: "Our Rental Bikes & Scooters in Puri | D Bike Rental | D Bike Rental",
  description: "Choose from our range of reliable rental two-wheelers in Puri. From easy-to-ride gearless scooters to powerful bikes, find the perfect ride for your trip.",
};

export default async function Page({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const page = Number.parseInt(resolvedSearchParams?.page ?? "1", 10);
  const currentPage = Number.isNaN(page) || page < 1 ? 1 : page;

  return <CarListVTwo currentPage={currentPage} />;
}
