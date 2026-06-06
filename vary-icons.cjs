const fs = require('fs');

// 1. Fix PricingOne.jsx rendering
let f1 = 'src/sections/home-one/PricingOne.jsx';
if (fs.existsSync(f1)) {
    let c1 = fs.readFileSync(f1, 'utf8');
    c1 = c1.replace(/<img src="\/icon\/motorcross.png" alt="icon" style=\{\{ width: "50px" \}\} \/>/g, '<img src={item?.icon || "/icon/motorcycle.png"} alt="icon" style={{ width: "50px" }} />');
    fs.writeFileSync(f1, c1);
}

// 2. Fix SlidingTextOne.jsx rendering
let f2 = 'src/sections/home-one/SlidingTextOne.jsx';
if (fs.existsSync(f2)) {
    let c2 = fs.readFileSync(f2, 'utf8');
    c2 = c2.replace(/<img src="\/icon\/motorcross.png" alt="icon" style=\{\{ width: "50px", marginLeft: "20px" \}\} \/>/g, '<img src={item?.icon || "/icon/motorcycle.png"} alt="icon" style={{ width: "50px", marginLeft: "20px" }} />');
    
    // Now update the slidingTextData array
    c2 = c2.replace(/"fas fa-motorcycle"/g, '"/icon/motorcycle-2.png"');
    c2 = c2.replace(/"icon-cuv"/g, '"/icon/motorbike-2.png"');
    c2 = c2.replace(/"\/icon\/motorbike-2\.png"/, '"/icon/motorcycle-3.png"'); // change first occurrence to vary it
    c2 = c2.replace(/"\/icon\/motorcycle-2\.png"/, '"/icon/motorcross.png"'); // change first occurrence
    fs.writeFileSync(f2, c2);
}

// 3. Fix PricingData.jsx
let f3 = 'src/all-content/pricing/PricingData.jsx';
if (fs.existsSync(f3)) {
    let c3 = fs.readFileSync(f3, 'utf8');
    
    const icons = [
        '"/icon/motorbike-2.png"',
        '"/icon/motorcross.png"',
        '"/icon/motorcycle-2.png"',
        '"/icon/motorcycle-3.png"',
        '"/icon/motorcycle.png"'
    ];
    let iconIndex = 0;
    
    // Replace all existing icon strings
    c3 = c3.replace(/icon:\s*"[^"]+"/g, () => {
        const nextIcon = icons[iconIndex % icons.length];
        iconIndex++;
        return `icon: ${nextIcon}`;
    });
    
    fs.writeFileSync(f3, c3);
}

console.log("Varied icons applied successfully.");
