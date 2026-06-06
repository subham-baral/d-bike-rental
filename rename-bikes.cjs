const fs = require('fs');
const path = require('path');

// 1. Update NavLink.jsx
let f1 = 'src/components/link-content/NavLink.jsx';
let c1 = fs.readFileSync(f1, 'utf8');
c1 = c1.replace(/"Bike Listing"/g, '"Vehicle Listing"');
c1 = c1.replace(/"Bike Details"/g, '"Vehicle Details"');
fs.writeFileSync(f1, c1);

// 2. Update MainManuList.jsx
let f2 = 'src/components/elements/MainManuList.jsx';
let c2 = fs.readFileSync(f2, 'utf8');
c2 = c2.replace(/>Bikes<\/a>/g, '>Vehicles</a>');
fs.writeFileSync(f2, c2);

// 3. Update MobileManuList.jsx
let f3 = 'src/components/elements/MobileManuList.jsx';
let c3 = fs.readFileSync(f3, 'utf8');
c3 = c3.replace(/\s+Bikes\s+/g, '\n          Vehicles\n          ');
fs.writeFileSync(f3, c3);

// 4. Update Footer.jsx
let f4 = 'src/sections/common/Footer.jsx';
let c4 = fs.readFileSync(f4, 'utf8');
c4 = c4.replace(/title: "Bikes"/g, 'title: "Vehicles"');
fs.writeFileSync(f4, c4);

console.log("Renamed Bikes to Vehicles in menus");
