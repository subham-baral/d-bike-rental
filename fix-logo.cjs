const fs = require('fs');
const path = require('path');

function walk(d) {
    fs.readdirSync(d).forEach(f => {
        const p = path.join(d, f);
        if(fs.statSync(p).isDirectory()) {
            walk(p);
        } else if (p.endsWith('.tsx') || p.endsWith('.ts') || p.endsWith('.jsx') || p.endsWith('.js')) {
            let c = fs.readFileSync(p, 'utf8');
            if (c.includes('logo-')) {
                // Find all imports of images named like logo-*.png
                let modified = false;
                c = c.replace(/import\s+(\w+)\s+from\s+['"].*?logo-.*?\.(png|jpg|svg)['"];?/g, (match, p1) => {
                    modified = true;
                    return `const ${p1} = "/d-bike-logo.png";`;
                });
                if (modified) {
                    fs.writeFileSync(p, c);
                }
            }
        }
    });
}
walk(path.join(__dirname, 'src'));
console.log('Logo replaced.');
