import CarListingSingle from '../../../../views/listing-single/CarListingSingle';

export const revalidate = 86400;

export default async function Page({ params }) {
  const resolvedParams = await params;
  return <CarListingSingle slug={resolvedParams.slug} />;
}
