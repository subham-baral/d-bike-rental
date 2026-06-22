import Link from 'next/link';
import Banner from '../../../sections/common/Banner';

export const metadata = {
  title: "Sitemap | D Bike Rental Puri",
  description: "HTML Sitemap for D Bike Rental Puri. Easily navigate our website to find bike and car rentals.",
};

export default function Sitemap() {
  return (
    <>
      <Banner breadcrumb="Sitemap" />
      <section className="py-5" style={{ minHeight: '60vh' }}>
      <div className="container">
        <h1 className="mb-2">HTML Sitemap</h1>
        <p className="mb-4"><strong>Last Updated:</strong> June 1, 2026</p>
        <p className="mb-5">Find your way around the D Bike Rental website using the links below:</p>
        
        <div className="row mt-5">
          <div className="col-md-6 mb-5">
            <h3 className="mb-4">Main Pages</h3>
            <ul className="list-unstyled" style={{ fontSize: '18px', lineHeight: '2' }}>
              <li><Link href="/" style={{ color: 'var(--gorent-secondary)' }}>Home</Link></li>
              <li><Link href="/about" style={{ color: 'var(--gorent-secondary)' }}>About Us</Link></li>
              <li><Link href="/vehicles" style={{ color: 'var(--gorent-secondary)' }}>Our Vehicles</Link></li>
              <li><Link href="/blog" style={{ color: 'var(--gorent-secondary)' }}>Blog</Link></li>
              <li><Link href="/contact" style={{ color: 'var(--gorent-secondary)' }}>Contact Us</Link></li>
            </ul>
          </div>
          <div className="col-md-6 mb-5">
            <h3 className="mb-4">Legal & Policies</h3>
            <ul className="list-unstyled" style={{ fontSize: '18px', lineHeight: '2' }}>
              <li><Link href="/terms-and-conditions" style={{ color: 'var(--gorent-secondary)' }}>Terms and Conditions</Link></li>
              <li><Link href="/privacy-policy" style={{ color: 'var(--gorent-secondary)' }}>Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
