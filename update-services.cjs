const fs = require('fs');

// 1. Update Service Data
let f1 = 'src/all-content/service/service.jsx';
if (fs.existsSync(f1)) {
    let c = fs.readFileSync(f1, 'utf8');
    const icons = [
        '"/icon/motorbike-2.png"',
        '"/icon/motorcross.png"',
        '"/icon/motorcycle-2.png"',
        '"/icon/motorcycle-3.png"'
    ];
    let idx = 0;
    c = c.replace(/icon: "[^"]+"/g, () => `icon: ${icons[idx++ % icons.length]}`);
    idx = 0;
    c = c.replace(/iconClass: '[^']+'/g, () => `iconClass: ${icons[idx++ % icons.length]}`);
    fs.writeFileSync(f1, c);
}

// 2. Update Renderers
const renderers = [
    'src/sections/home-one/ServiceOne.jsx',
    'src/sections/service/ServiceInner.jsx',
    'src/sections/home-three/ServiceThree.jsx' // Just in case
];

renderers.forEach(f => {
    if (fs.existsSync(f)) {
        let c = fs.readFileSync(f, 'utf8');
        // ServiceOne uses <span className={service.icon}></span>
        c = c.replace(/<span className=\{service\.icon\}><\/span>/g, '<img src={service.icon} alt="icon" style={{ width: "60px" }} />');
        // ServiceInner uses <span className={service.iconClass}></span> or similar, check both
        c = c.replace(/<span className=\{service\.iconClass\}><\/span>/g, '<img src={service.iconClass || service.icon} alt="icon" style={{ width: "60px" }} />');
        fs.writeFileSync(f, c);
    }
});
console.log("Services icons updated");
