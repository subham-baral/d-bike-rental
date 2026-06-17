import { Suspense } from 'react';
import CarListVTwo from '../../../views/car-list-v-two/CarListVTwo';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CarListVTwo />
    </Suspense>
  );
}