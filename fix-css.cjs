const fs = require('fs');
const path = require('path');

const cssFile = path.join(__dirname, 'src', 'assets', 'css', 'font-awesome-all.css');
let css = fs.readFileSync(cssFile, 'utf8');

// Replace missing URLs with a dummy valid one or just an empty data URI
const emptySvg = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4=";
const emptyFont = "data:font/ttf;base64,AAEAAAAOAIAAAwBgT1MvMjHhL2kAAAE8AAAAVmNtYXDn/qB1AAABoAAAACxnbHlma1yRywAAAcgAAAAUaGVhZANV93UAAADsAAAANmhoZWECWwAAAAAAcAAAAHhtdHgAAAAAAAACSAAAABBsb2NhAAAAAAACAJAAAAAQbWF4cAAFAAAAAAIQAAAAIG5hbWUAAAAAAAIwAAAAIHBvc3QAAAAAAACWAAAAIAABAAAAAQAAAAAAAABgAAABAAA=";

// Alternatively, just remove the specific missing files from the url() declaration.
// But it's easier to just blindly replace the missing filenames.
css = css.replace(/url\([^)]*fa-light-300\.eot[^)]*\)/g, 'url("data:font/eot;base64,")');
css = css.replace(/url\([^)]*fa-light-300\.ttf[^)]*\)/g, 'url("data:font/ttf;base64,")');
css = css.replace(/url\([^)]*fa-light-300\.svg[^)]*\)/g, 'url("data:image/svg+xml;base64,")');
css = css.replace(/url\([^)]*fa-regular-400\.ttf[^)]*\)/g, 'url("data:font/ttf;base64,")');
css = css.replace(/url\([^)]*fa-regular-400\.svg[^)]*\)/g, 'url("data:image/svg+xml;base64,")');
css = css.replace(/url\([^)]*fa-solid-900\.eot[^)]*\)/g, 'url("data:font/eot;base64,")');
css = css.replace(/url\([^)]*fa-solid-900\.ttf[^)]*\)/g, 'url("data:font/ttf;base64,")');
css = css.replace(/url\([^)]*fa-solid-900\.svg[^)]*\)/g, 'url("data:image/svg+xml;base64,")');

fs.writeFileSync(cssFile, css);
console.log('Fixed font awesome CSS');
