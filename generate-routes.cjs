const fs = require('fs');
const path = require('path');

const routes = [
    { path: '/', component: 'home-one/HomeOne' },
    { path: '/index-one-page', component: 'index-one-page/HomeOneSinglePage' },
    { path: '/index-two', component: 'home-two/HomeTwo' },
    { path: '/index-two-one-page', component: 'index-two-one-page/HomeTwoOnePage' },
    { path: '/index-three', component: 'home-three/HomeThree' },
    { path: '/index-three-one-page', component: 'index-three-one-page/HomeThreeOnePage' },
    
    // Inner layout pages
    { path: '/inner/about', component: 'about/About' },
    { path: '/inner/services', component: 'service/Service' },
    { path: '/inner/drivers', component: 'drivers/Drivers' },
    { path: '/inner/driver-details', component: 'driver-details/DriverDetails' },
    { path: '/inner/testimonials', component: 'testimonials/Testimonials' },
    { path: '/inner/pricing', component: 'pricing/Pricing' },
    { path: '/inner/faq', component: 'faq/Faq' },
    { path: '/inner/cars', component: 'cars/Cars' },
    { path: '/inner/car-list-v-1', component: 'car-list-v-one/CarListVOne' },
    { path: '/inner/car-list-v-2', component: 'car-list-v-two/CarListVTwo' },
    { path: '/inner/car-list-v-3', component: 'car-list-v-three/CarListVThree' },
    { path: '/inner/listing-single', component: 'listing-single/CarListingSingle' },
    { path: '/inner/products', component: 'products/Products' },
    { path: '/inner/product-details', component: 'product-details/ProductDetails' },
    { path: '/inner/cart', component: 'cart/Cart' },
    { path: '/inner/checkout', component: 'checkout/CheckOut' },
    { path: '/inner/wishlist', component: 'wishlist/Wishlist' },
    { path: '/inner/sign-up', component: 'authentication/SignUp' },
    { path: '/inner/login', component: 'authentication/Login' },
    { path: '/inner/blog', component: 'blog/Blog' },
    { path: '/inner/blog-standard', component: 'blog-standard/BlogStandard' },
    { path: '/inner/blog-left-sidebar', component: 'blog-left-sidebar/BlogLeftSidebar' },
    { path: '/inner/blog-right-sidebar', component: 'blog-right-sidebar/BlogRightSidebar' },
    { path: '/inner/blog-details', component: 'blog-details/BlogDetails' },
    { path: '/inner/contact', component: 'contact/Contact' }
];

const basePath = path.join(__dirname, 'src', 'app');

routes.forEach(route => {
    let dirPath;
    if (route.path === '/') {
        dirPath = basePath;
    } else {
        dirPath = path.join(basePath, route.path);
    }
    
    fs.mkdirSync(dirPath, { recursive: true });
    
    // Calculate relative path to components
    // If path is /, it's in src/app, so components is ../pages
    // If path is /index-two, it's in src/app/index-two, so components is ../../pages
    // If path is /inner/about, it's in src/app/inner/about, so components is ../../../pages
    const depth = route.path.split('/').filter(Boolean).length;
    const backDots = Array(depth + 1).fill('..').join('/');
    
    // For app directory, the path to src/pages is `../pages` (for /), `../../pages` for `/foo`, etc.
    // Actually, src/app is at depth 2 from root. src/pages is also at depth 2 from root.
    // So from src/app/page.tsx -> ../pages
    // from src/app/inner/about/page.tsx -> ../../../pages
    
    const importPath = `${backDots}/pages/${route.component}`;
    const componentName = route.component.split('/').pop();
    
    const content = `import ${componentName} from '${importPath}';\n\nexport default function Page() {\n  return <${componentName} />;\n}\n`;
    
    fs.writeFileSync(path.join(dirPath, 'page.tsx'), content);
});

// Create inner layout
const innerLayoutPath = path.join(basePath, 'inner');
const innerLayoutContent = `"use client";

import React from 'react';
import Header from '../../sections/common/Header';
import Gallery from '../../sections/common/Gallery';
import Footer from '../../sections/common/Footer';
import StrickyHeader from '../../sections/common/StrickyHeader';

export default function InnerLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className='page-wrapper'>
            <Header />
            {children}
            <Gallery />
            <Footer />
            <StrickyHeader />
        </div>
    );
}\n`;

fs.writeFileSync(path.join(innerLayoutPath, 'layout.tsx'), innerLayoutContent);
console.log('Routing structure created.');
