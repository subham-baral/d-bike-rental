const fs = require('fs');
const path = require('path');
const events = ['onClick', 'onSubmit', 'onChange', 'onMouseEnter', 'onMouseLeave', 'onKeyDown', 'onFocus', 'onBlur'];

function walk(d) {
    fs.readdirSync(d).forEach(f => {
        const p = path.join(d, f);
        if(fs.statSync(p).isDirectory()) {
            walk(p);
        } else if (p.endsWith('.tsx') || p.endsWith('.ts')) {
            let c = fs.readFileSync(p, 'utf8');
            if (!c.includes('"use client"') && !c.includes("'use client'")) {
                let needsClient = false;
                for (let e of events) {
                    if (c.includes(e + '=')) {
                        needsClient = true;
                        break;
                    }
                }
                if (needsClient) {
                    c = '"use client";\n\n' + c;
                    fs.writeFileSync(p, c);
                }
            }
        }
    });
}
walk(path.join(__dirname, 'src'));
console.log('Added use client for event handlers');
