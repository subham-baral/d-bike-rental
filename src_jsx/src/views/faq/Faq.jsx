"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import Banner from '../../sections/common/Banner';
import { motion } from "framer-motion";
import { faqsOne, faqsTwo } from '../../all-content/faq/faqData';
const Faq = () => {
    const [isActiveFaq, setIsActiveFaq] = useState(2);
    return (_jsxs(_Fragment, { children: [_jsx(Banner, { breadcrumb: 'Faq' }), _jsx("div", { className: "faq-one faq-page", children: _jsx("div", { className: "container", children: _jsxs("div", { className: "row", children: [_jsx("div", { className: "col-xl-6 col-lg-6", children: _jsx("div", { className: "faq-page__left", children: _jsx("div", { className: "accrodion-grp faq-one-accrodion", children: faqsOne.map((item) => (_jsxs(motion.div, { initial: { x: 50, opacity: 0 }, whileInView: { x: 0, opacity: 1 }, transition: {
                                                duration: 0.08 * item.id,
                                                ease: "easeOut"
                                            }, viewport: { amount: 0.05, once: true }, className: `accrodion ${isActiveFaq === item.id ? "active" : ""}`, children: [_jsx("div", { className: "accrodion-title", onClick: () => setIsActiveFaq(item?.id), children: _jsx("h4", { children: item?.question }) }), _jsx(motion.div, { initial: { y: -40, opacity: 0 }, whileInView: { y: 0, opacity: 1 }, transition: {
                                                        duration: 0.5,
                                                        ease: "easeOut"
                                                    }, viewport: { amount: 0.05 }, className: "accrodion-content", style: { display: `${isActiveFaq === item.id ? "block" : "none"}` }, children: _jsx("div", { className: "inner", children: _jsxs("p", { children: [" ", item?.description] }) }) })] }, item?.id))) }) }) }), _jsx("div", { className: "col-xl-6 col-lg-6", children: _jsx("div", { className: "faq-page__right", children: _jsx("div", { className: "accrodion-grp faq-one-accrodion", children: faqsTwo.map((item) => (_jsxs(motion.div, { initial: { x: 50, opacity: 0 }, whileInView: { x: 0, opacity: 1 }, transition: {
                                                duration: 0.08 * item.id,
                                                ease: "easeOut"
                                            }, viewport: { amount: 0.05, once: true }, className: `accrodion ${isActiveFaq === item.id ? "active" : ""}`, children: [_jsx("div", { className: "accrodion-title", onClick: () => setIsActiveFaq(item?.id), children: _jsx("h4", { children: item?.question }) }), _jsx(motion.div, { initial: { y: -40, opacity: 0 }, whileInView: { y: 0, opacity: 1 }, transition: {
                                                        duration: 0.5,
                                                        ease: "easeOut"
                                                    }, viewport: { amount: 0.05 }, className: "accrodion-content", style: { display: `${isActiveFaq === item.id ? "block" : "none"}` }, children: _jsx("div", { className: "inner", children: _jsxs("p", { children: [" ", item?.description] }) }) })] }, item?.id))) }) }) })] }) }) })] }));
};
export default Faq;
