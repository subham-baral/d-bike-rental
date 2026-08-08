import CarListingSingle, {
  getVehicleDetails,
} from '../../../../views/listing-single/CarListingSingle';

export const revalidate = 86400;

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const vehicle = resolvedParams?.slug
    ? await getVehicleDetails(resolvedParams.slug)
    : null;

  return {
    title: vehicle?.data?.title
      ? `Hire ${vehicle.data.title} for day in Puri | D Bike Rental`
      : 'Vehicle Details | D Bike Rental',
    description:
      'Browse our wide selection of well-maintained scooters and motorcycles available for rent in Puri. Find competitive daily rates and book your ride today.',
  };
}

export default async function Page({ params }) {
  const resolvedParams = await params;
  return <CarListingSingle slug={resolvedParams.slug} />;
}
