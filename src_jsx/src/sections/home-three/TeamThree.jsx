"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Link from 'next/link';
import { motion } from "framer-motion";
// Images
import TextAnimation from '../../components/elements/TextAnimation';
import taglineShape from '../../assets/images/shapes/section-title-tagline-shape-1.png';
import { teamData } from '../../all-content/team/teamData';
const TeamThree = () => {
    return (_jsx("section", { className: "team-three", id: 'driver', children: _jsxs("div", { className: "container", children: [_jsxs("div", { className: "section-title text-center sec-title-animation animation-style1", children: [_jsxs("div", { className: "section-title__tagline-box justify-content-center", children: [_jsx("div", { className: "section-title__tagline-shape", children: _jsx("img", { src: taglineShape, alt: "Tagline Shape" }) }), _jsx("span", { className: "section-title__tagline", children: "Our Drivers" })] }), _jsx("h2", { className: "section-title__title title-animation", children: _jsx(TextAnimation, { text: 'Meet Our Premium Drivers' }) })] }), _jsx("div", { className: "row", children: teamData.map((member, i) => (_jsx(motion.div, { initial: { y: 80, opacity: 0 }, whileInView: { y: 0, opacity: 1 }, transition: {
                            duration: 0.3 * i,
                            ease: "easeOut"
                        }, viewport: { amount: 0.01, once: true }, className: `col-xl-3 col-lg-6 col-md-6 `, children: _jsxs("div", { className: "team-three__single", children: [_jsx("div", { className: "team-three__img-box", children: _jsxs("div", { className: "team-three__img", children: [_jsx("img", { src: member.image, alt: member.name }), _jsxs("div", { className: "team-three__social", children: [_jsx(Link, { href: "/inner/driver-details", children: _jsx("i", { className: "icon-facebook" }) }), _jsx(Link, { href: "/inner/driver-details", children: _jsx("i", { className: "icon-twitter" }) }), _jsx(Link, { href: "/inner/driver-details", children: _jsx("i", { className: "icon-linkedin" }) }), _jsx(Link, { href: "/inner/driver-details", children: _jsx("i", { className: "icon-instagram-1" }) })] })] }) }), _jsxs("div", { className: "team-three__content", children: [_jsx("h3", { className: "team-three__name", children: _jsx(Link, { href: "/inner/driver-details", children: member.name }) }), _jsx("p", { className: "team-three__sub-title", children: member.role })] })] }) }, member.id))) })] }) }));
};
export default TeamThree;
