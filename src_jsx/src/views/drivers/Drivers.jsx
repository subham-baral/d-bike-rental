"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Link from 'next/link';
import { motion } from "framer-motion";
import Banner from '../../sections/common/Banner';
import { driversData } from '../../all-content/team/teamData';
const Drivers = () => {
    return (_jsxs(_Fragment, { children: [_jsx(Banner, { breadcrumb: 'Drivers' }), _jsx("section", { className: "team-three", children: _jsx("div", { className: "container", children: _jsx("div", { className: "row", children: driversData.map((member, i) => (_jsx(motion.div, { initial: { y: 80, opacity: 0 }, whileInView: { y: 0, opacity: 1 }, transition: {
                                duration: 0.2 * i,
                                ease: "easeOut"
                            }, viewport: { amount: 0.01, once: true }, className: `col-xl-3 col-lg-6 col-md-6 `, children: _jsxs("div", { className: "team-three__single", children: [_jsx("div", { className: "team-three__img-box", children: _jsxs("div", { className: "team-three__img", children: [_jsx("img", { src: member.image, alt: member.name }), _jsxs("div", { className: "team-three__social", children: [_jsx(Link, { href: "/inner/driver-details", children: _jsx("i", { className: "icon-facebook" }) }), _jsx(Link, { href: "/inner/driver-details", children: _jsx("i", { className: "icon-twitter" }) }), _jsx(Link, { href: "/inner/driver-details", children: _jsx("i", { className: "icon-linkedin" }) }), _jsx(Link, { href: "/inner/driver-details", children: _jsx("i", { className: "icon-instagram-1" }) })] })] }) }), _jsxs("div", { className: "team-three__content", children: [_jsx("h3", { className: "team-three__name", children: _jsx(Link, { href: "/inner/driver-details", children: member.name }) }), _jsx("p", { className: "team-three__sub-title", children: member.role })] })] }) }, member.id))) }) }) })] }));
};
export default Drivers;
