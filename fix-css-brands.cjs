const fs = require('fs');
const path = require('path');
const cssFile = path.join(__dirname, 'src', 'assets', 'css', 'font-awesome-all.css');
let css = fs.readFileSync(cssFile, 'utf8');
css = css.replace(/url\([^)]*fa-brands-400\.svg[^)]*\)/g, 'url("data:image/svg+xml;base64,")');
fs.writeFileSync(cssFile, css);
console.log('Fixed brands SVG');
