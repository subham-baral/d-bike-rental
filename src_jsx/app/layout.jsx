import "swiper/swiper-bundle.css";
import '../assets/css/style.css';
import Providers from './Providers';
export const metadata = {
  title: 'Gorent - Car Rental React Js Template',
  description: 'Gorent - Car Rental React Js Template',
  icons: {
    icon: '/favicon.ico' // Default fallback, can be updated later if needed
  }
};
export default function RootLayout({
  children
}) {
  return <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>;
}