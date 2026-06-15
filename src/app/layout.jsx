import "swiper/swiper-bundle.css";
import '../assets/css/style.css';
import Providers from './Providers';
export const metadata = {
  title: 'D bike rental',
  description: 'D Bike Rental - Your premier bike rental service',
  icons: {
    icon: '/favicon.ico' // Default fallback, can be updated later if needed
  }
};
export default function RootLayout({
  children
}) {
  return <html lang="en" data-scroll-behavior="smooth">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>;
}