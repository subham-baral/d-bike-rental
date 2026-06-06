import { jsx as _jsx } from "react/jsx-runtime";
import "swiper/swiper-bundle.css";
import '../assets/css/style.css';
import Providers from './Providers';
export const metadata = {
    title: 'Gorent - Car Rental React Js Template',
    description: 'Gorent - Car Rental React Js Template',
    icons: {
        icon: '/favicon.ico', // Default fallback, can be updated later if needed
    },
};
export default function RootLayout({ children, }) {
    return (_jsx("html", { lang: "en", children: _jsx("body", { children: _jsx(Providers, { children: children }) }) }));
}
