const fs = require('fs');

let f = 'src/sections/common/Footer.jsx';
let c = fs.readFileSync(f, 'utf8');

// 1. Replace linkOne
c = c.replace(/const linkOne = \[([\s\S]*?)\];/, `const linkOne = [{
  id: 1,
  link: "/",
  title: "Home"
}, {
  id: 2,
  link: "/about",
  title: "About Us"
}, {
  id: 3,
  link: "/bikes",
  title: "Bikes"
}, {
  id: 4,
  link: "/blog",
  title: "Blog"
}, {
  id: 5,
  link: "/contact",
  title: "Contact Us"
}];`);

// 2. Replace linkTwo
c = c.replace(/const linkTwo = \[([\s\S]*?)\];/, `const linkTwo = [{
  id: 1,
  link: "#",
  title: "Terms and Condition"
}, {
  id: 2,
  link: "#",
  title: "Privacy Policy"
}, {
  id: 3,
  link: "#",
  title: "Pricing"
}, {
  id: 4,
  link: "#",
  title: "Sitemap"
}];`);

// 3. Replace form with social icons
c = c.replace(/<form className="footer-widget__form"[\s\S]*?<\/form>/, `<div className="footer-widget__social" style={{ display: 'flex', gap: '15px' }}>
                                        <a href="#" style={{ color: 'white', fontSize: '20px' }}><i className="icon-facebook"></i></a>
                                        <a href="#" style={{ color: 'white', fontSize: '20px' }}><i className="icon-twitter"></i></a>
                                        <a href="#" style={{ color: 'white', fontSize: '20px' }}><i className="icon-instagram"></i></a>
                                        <a href="#" style={{ color: 'white', fontSize: '20px' }}><i className="icon-youtube"></i></a>
                                    </div>`);

// 4. Rename Services to Company
c = c.replace(/<h4 className="footer-widget__title">Services<\/h4>/, `<h4 className="footer-widget__title">Company</h4>`);

// 5. Replace Copyright and bottom links
c = c.replace(/<div className="site-footer__copyright">[\s\S]*?<\/ul>\s*<\/div>/, `<div className="site-footer__copyright">
                                    <p className="site-footer__copyright-text">
                                        © {new Date().getFullYear()} By <Link href="/" style={{color: 'var(--gorent-secondary)'}}>D-Bike Rental</Link> All Rights Reserved.
                                    </p>
                                </div>
                                <div className="site-footer__bottom-menu-box">
                                    <ul className="list-unstyled site-footer__bottom-menu">
                                        <li>developed by <Link href="https://www.one9ty.com/" target="_blank" style={{color: 'var(--gorent-secondary)'}}>One9Ty</Link></li>
                                    </ul>
                                </div>`);

fs.writeFileSync(f, c);
console.log("Footer updated");
