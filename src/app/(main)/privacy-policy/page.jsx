import Banner from '../../../sections/common/Banner';

export const metadata = {
  title: "Privacy Policy | D Bike Rental Puri",
  description: "Privacy Policy for D Bike Rental in Puri. Learn how we collect, use, and protect your data.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Banner breadcrumb="Privacy Policy" />
      <section className="py-5">
      <div className="container">
        <h1 className="mb-4">Privacy Policy</h1>
        <p><strong>Last Updated:</strong> June 1, 2026</p>
        <p>Welcome to D Bike Rental. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at <a href="mailto:dbikerental1@gmail.com" style={{ color: 'var(--gorent-secondary)' }}>dbikerental1@gmail.com</a>.</p>
        
        <h3 className="mt-5 mb-3">1. Information We Collect</h3>
        <p>We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, or when you contact us.</p>
        <ul className="mb-4">
          <li><strong>Personal Data:</strong> Name, phone number, email address, and identification documents required for vehicle rental.</li>
          <li><strong>Payment Data:</strong> Payment details necessary to process your rental transactions.</li>
        </ul>

        <h3 className="mt-5 mb-3">2. How We Use Your Information</h3>
        <p>We use personal information collected via our Website for a variety of business purposes described below:</p>
        <ul className="mb-4">
          <li>To facilitate account creation and logon process.</li>
          <li>To fulfill and manage your vehicle rental bookings.</li>
          <li>To respond to user inquiries and offer support.</li>
        </ul>

        <h3 className="mt-5 mb-3">3. Will Your Information Be Shared With Anyone?</h3>
        <p className="mb-4">We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.</p>

        <h3 className="mt-5 mb-3">4. Contact Us</h3>
        <p>If you have questions or comments about this notice, you may email us at <a href="mailto:dbikerental1@gmail.com" style={{ color: 'var(--gorent-secondary)' }}>dbikerental1@gmail.com</a> or by post to:</p>
        <p className="mb-5">
          <strong>D Bike Rental</strong><br/>
          Gopal Ballabh Rd, near Shakuntala Palace,<br/>
          near Puri Railway station, Puri, Odisha 752001<br/>
          Phone: <a href="tel:+918112003520" style={{ color: 'var(--gorent-secondary)' }}>+91 81120 03520</a>
        </p>
      </div>
    </section>
    </>
  );
}
