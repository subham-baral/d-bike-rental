const fs = require('fs');
const path = require('path');
function walk(d) {
    fs.readdirSync(d).forEach(f => {
        const p = path.join(d, f);
        if(fs.statSync(p).isDirectory()) {
            walk(p);
        } else if (p.endsWith('.tsx') || p.endsWith('.ts')) {
            let c = fs.readFileSync(p, 'utf8');
            if (c.includes('useLocation().pathname')) {
                c = c.replace(/useLocation\(\)\.pathname/g, '(useLocation() || "")');
                fs.writeFileSync(p, c);
            }
        }
    });
}
walk(path.join(__dirname, 'src'));
console.log('Fixed useLocation');
