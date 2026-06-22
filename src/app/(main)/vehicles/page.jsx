import { Suspense } from 'react';
import CarListVTwo from '../../../views/car-list-v-two/CarListVTwo';

export const metadata = {
  title: "Rent Bikes & Cars in Puri | Explore Our Vehicle Fleet | D Bike Rental",
  description: "Browse our fleet of top-quality scootys, motorcycles, and cars for rent in Puri. Well-maintained vehicles at unbeatable prices for your perfect Puri trip.",
};

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CarListVTwo />
    </Suspense>
  );
}