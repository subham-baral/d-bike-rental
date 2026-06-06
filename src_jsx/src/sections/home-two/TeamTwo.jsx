"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import tagline from "../../assets/images/shapes/section-title-tagline-shape-1.png";
import Link from 'next/link';
import TextAnimation from '../../components/elements/TextAnimation';
import { teamMembersTwo } from '../../all-content/team/teamData';
const TeamTwo = () => {
    return (_jsxs("section", { className: "team-two", id: 'driver', children: [_jsx("div", { className: "team-two__shape-1" }), _jsx("div", { className: "team-two__shape-2" }), _jsxs("div", { className: "container", children: [_jsxs("div", { className: "section-title text-center sec-title-animation animation-style1", children: [_jsxs("div", { className: "section-title__tagline-box justify-content-center", children: [_jsx("div", { className: "section-title__tagline-shape", children: _jsx("img", { src: tagline, alt: "Image" }) }), _jsx("span", { className: "section-title__tagline", children: "Expert Drivers" })] }), _jsx("h2", { className: "section-title__title title-animation", children: _jsx(TextAnimation, { text: 'Meet The Expert Drivers' }) })] }), _jsx("div", { className: "row", children: teamMembersTwo.map((member) => (_jsx(motion.div, { initial: { y: 60, opacity: 0 }, whileInView: { y: 0, opacity: 1 }, transition: {
                                duration: 0.3 * member?.id,
                                ease: "easeOut"
                            }, viewport: { amount: 0.1, once: true }, className: `col-xl-3 col-lg-6 col-md-6 wow `, children: _jsxs("div", { className: "team-two__single", children: [_jsx("div", { className: "team-two__img-box", children: _jsx("div", { className: "team-two__img", children: _jsx("img", { src: member.image, alt: member.name }) }) }), _jsxs("div", { className: "team-two__content", children: [_jsxs("div", { className: "team-two__title-box", children: [_jsx("h3", { className: "team-two__title", children: _jsx(Link, { href: member.link, children: member.name }) }), _jsx("div", { className: "team-two__sub-title", children: member.role })] }), _jsxs("div", { className: "team-two__share-and-social", children: [_jsx("div", { className: "team-two__share", children: _jsx("span", { className: "fas fa-share-alt" }) }), _jsxs("div", { className: "team-two__social", children: [_jsx(Link, { href: "#", children: _jsx("span", { className: "icon-facebook" }) }), _jsx(Link, { href: "#", children: _jsx("span", { className: "icon-instagram-1" }) }), _jsx(Link, { href: "#", children: _jsx("span", { className: "icon-linkedin" }) }), _jsx(Link, { href: "#", children: _jsx("span", { className: "icon-twitter" }) })] })] })] })] }) }, member.id))) })] })] }));
};
export default TeamTwo;
