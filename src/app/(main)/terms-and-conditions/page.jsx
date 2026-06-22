import Banner from '../../../sections/common/Banner';

export const metadata = {
  title: "Terms and Conditions | D Bike Rental Puri",
  description: "Terms and Conditions for renting a bike or car with D Bike Rental in Puri.",
};

export default function TermsAndConditions() {
  return (
    <>
      <Banner breadcrumb="Terms and Conditions" />
      <section className="py-5">
      <div className="container">
        <h1 className="mb-4">Terms and Conditions</h1>
        <p><strong>Last Updated:</strong> June 1, 2026</p>
        <p>Please read these terms and conditions carefully before using Our Service.</p>
        
        <h3 className="mt-5 mb-3">1. Rental Requirements</h3>
        <p>To rent a vehicle from D Bike Rental, the renter must:</p>
        <ul className="mb-4">
          <li>Be at least 18 years of age.</li>
          <li>Possess a valid driving license for the category of vehicle being rented (scooty, motorcycle, or car).</li>
          <li>Provide a valid government-issued ID (Aadhar Card, Passport, Voter ID, etc.) for verification purposes.</li>
        </ul>

        <h3 className="mt-5 mb-3">2. Vehicle Condition and Return</h3>
        <p className="mb-4">The vehicle must be returned in the same condition as it was rented. The renter is responsible for any damage, loss, or theft of the vehicle during the rental period. Late returns will be subject to additional charges as per our hourly rates.</p>

        <h3 className="mt-5 mb-3">3. Traffic Violations and Fines</h3>
        <p className="mb-4">The renter is strictly responsible for adhering to all traffic rules and regulations. Any fines, penalties, or legal fees incurred due to traffic violations during the rental period will be the sole responsibility of the renter.</p>

        <h3 className="mt-5 mb-3">4. Cancellations and Refunds</h3>
        <p className="mb-4">Cancellations made 24 hours prior to the pickup time may be eligible for a partial refund. No-shows or cancellations within 24 hours of the booking start time will not be refunded.</p>

        <h3 className="mt-5 mb-3">5. Contact Information</h3>
        <p>If you have any questions about these Terms and Conditions, You can contact us:</p>
        <ul className="mb-5">
          <li>By email: <a href="mailto:dbikerental1@gmail.com" style={{ color: 'var(--gorent-secondary)' }}>dbikerental1@gmail.com</a></li>
          <li>By phone number: <a href="tel:+918112003520" style={{ color: 'var(--gorent-secondary)' }}>+91 81120 03520</a></li>
        </ul>
      </div>
    </section>
    </>
  );
}
