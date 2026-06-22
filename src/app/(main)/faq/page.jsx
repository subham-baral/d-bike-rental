import Banner from '../../../sections/common/Banner';
import FAQAccordion from '../../../components/elements/FAQAccordion';

export const metadata = {
  title: "FAQ | Frequently Asked Questions | D Bike Rental Puri",
  description: "Find answers to frequently asked questions about bike and car rentals in Puri with D Bike Rental.",
};

export default function FAQ() {
  return (
    <>
      <Banner breadcrumb="FAQ" />
      <section className="py-5" style={{ minHeight: '60vh' }}>
        <div className="container">
          <h2 className="mb-2 text-center">Frequently Asked Questions</h2>
          <p className="text-center mb-5"><strong>Last Updated:</strong> June 1, 2026</p>
          
          <FAQAccordion />
        </div>
      </section>
    </>
  );
}
