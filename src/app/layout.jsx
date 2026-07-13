import "swiper/swiper-bundle.css";
import '../assets/css/style.css';
import Script from 'next/script';
import Providers from './Providers';
export const metadata = {
  title: 'D bike rental',
  description: 'D Bike Rental - Your premier bike rental service',
  icons: {
    icon: '/d-bike-fav.png'
  },
  verification: {
    google: 'XHdBiUv_82KSTvYPX-MT8_-h7FhK8jm-lTWrYLQ3Ht4'
  }
};
export default function RootLayout({
  children
}) {
  return <html lang="en" data-scroll-behavior="smooth">
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9J8K5G01HN"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9J8K5G01HN');
          `}
        </Script>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>;
}
