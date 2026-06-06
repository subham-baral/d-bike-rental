const fs = require('fs');

const files = [
    'src/sections/home-one/PricingOne.jsx',
    'src/sections/home-one/SlidingTextOne.jsx',
    'src/sections/booking/BookingInner.jsx',
    'src/sections/common/Booking.jsx'
];

files.forEach(f => {
    if (!fs.existsSync(f)) return;
    let c = fs.readFileSync(f, 'utf8');
    
    // Replace <span className={`${item?.icon || "icon-taxi"} `}></span>
    c = c.replace(/<span className={`\$\{item\?\.icon \|\| \"icon-taxi\"\} `}><\/span>/g, '<img src="/icon/motorcross.png" alt="icon" style={{ width: "50px" }} />');
    
    // Replace <span className={item?.icon}></span>
    c = c.replace(/<span className={item\?\.icon}><\/span>/g, '<img src="/icon/motorcross.png" alt="icon" style={{ width: "50px" }} />');
    
    // Replace <span className={item.icon}></span> (used in SlidingTextOne)
    c = c.replace(/<span className={item\.icon}><\/span>/g, '<img src="/icon/motorcross.png" alt="icon" style={{ width: "50px", marginLeft: "20px" }} />');
    
    // Replace <span className="icon-cuv"></span>
    c = c.replace(/<span className="icon-cuv"><\/span>/g, '<img src="/icon/motorcross.png" alt="icon" style={{ width: "30px", marginRight: "10px" }} />');
    
    fs.writeFileSync(f, c);
    console.log('Updated ' + f);
});
