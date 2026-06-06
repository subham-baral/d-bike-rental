const fs = require('fs');
const path = require('path');

const deleteFolderRecursive = function(directoryPath) {
    if (fs.existsSync(directoryPath)) {
        fs.readdirSync(directoryPath).forEach((file, index) => {
            const curPath = path.join(directoryPath, file);
            if (fs.lstatSync(curPath).isDirectory()) { // recurse
                deleteFolderRecursive(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(directoryPath);
    }
};

const routesToDelete = [
    'blog-left-sidebar', 'blog-right-sidebar', 'blog-standard', 
    'car-list-v-1', 'car-list-v-3', 'cars', 'cart', 'checkout', 
    'driver-details', 'drivers', 'faq', 'login', 'pricing', 
    'product-details', 'products', 'services', 'sign-up', 
    'testimonials', 'wishlist'
];

routesToDelete.forEach(r => {
    deleteFolderRecursive(path.join('src', 'app', '(main)', r));
});

deleteFolderRecursive(path.join('src', 'app', 'index-one-page'));

const viewsToDelete = [
    'home-two', 'home-three', 'index-two-one-page', 'index-three-one-page', 
    'cart', 'checkout', 'pricing', 'service', 'faq', 'testimonials', 'wishlist', 
    'product-details', 'products', 'login', 'sign-up', 'car-list-v-one', 
    'car-list-v-three', 'cars', 'drivers', 'driver-details'
];

viewsToDelete.forEach(v => {
    deleteFolderRecursive(path.join('src', 'views', v));
});

console.log("Cleanup complete");
