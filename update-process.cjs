const fs = require('fs');

// 1. Update Process Data
let f1 = 'src/all-content/process/processData.jsx';
if (fs.existsSync(f1)) {
    let c = fs.readFileSync(f1, 'utf8');
    const icons = [
        '"/icon/motorbike-2.png"',
        '"/icon/motorcross.png"',
        '"/icon/motorcycle-2.png"',
        '"/icon/motorcycle-3.png"'
    ];
    let idx = 0;
    // only target the processSteps icons, they have icon: "..." 
    // actually just replace them one by one
    c = c.replace(/icon: "fas fa-shower"/, `icon: ${icons[0]}`);
    c = c.replace(/icon: "icon-in-person"/, `icon: ${icons[1]}`);
    c = c.replace(/icon: "fas fa-shield-alt"/, `icon: ${icons[2]}`);
    c = c.replace(/icon: "icon-steering-wheel"/, `icon: ${icons[3]}`);
    fs.writeFileSync(f1, c);
}

// 2. Update Renderers
const renderers = [
    'src/sections/home-one/ProcessOne.jsx',
    'src/sections/process/ProcessInner.jsx',
    'src/sections/home-two/ProcessTwo.jsx',
    'src/sections/home-three/ProcessThree.jsx'
];

renderers.forEach(f => {
    if (fs.existsSync(f)) {
        let c = fs.readFileSync(f, 'utf8');
        c = c.replace(/<span className=\{step\.icon\}><\/span>/g, '<img src={step.icon} alt="icon" style={{ width: "50px" }} />');
        fs.writeFileSync(f, c);
    }
});

console.log("Process icons updated");
