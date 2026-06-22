import Banner from '../../../sections/common/Banner';

export const metadata = {
  title: "Gallery | D Bike Rental Puri",
  description: "View our gallery of bikes, scootys, and cars available for rent in Puri.",
};

const images = [
  '/gallery/gallery-1.jpg',
  '/gallery/gallery-2.jpg',
  '/gallery/gallery-3.jpg',
  '/gallery/gallery-4.jpg',
  '/gallery/gallery-5.jpg',
  '/gallery/gallery-6.jpg',
  '/gallery/gallery-7.jpg',
];

export default function Gallery() {
  return (
    <>
      <Banner breadcrumb="Gallery" />
      <section className="py-5" style={{ minHeight: '60vh' }}>
        <div className="container">
          <div className="row mt-4">
            {images.map((src, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4">
                <div style={{ borderRadius: 'var(--gorent-bdr-radius)', overflow: 'hidden', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', transition: 'transform 0.3s' }} className="gallery-item">
                  <img src={src} alt={`D Bike Rental Gallery ${index + 1}`} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
