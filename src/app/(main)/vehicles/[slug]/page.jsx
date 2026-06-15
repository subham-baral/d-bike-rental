import CarListingSingle from '../../../../views/listing-single/CarListingSingle';

export default async function Page({ params }) {
  const resolvedParams = await params;
  return <CarListingSingle slug={resolvedParams.slug} />;
}
