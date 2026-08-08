"use client";

import React, { useState } from "react";
import { faqData } from "../../all-content/faq/faqData";
const FaqOne = () => {
  const [isActiveFaq, setIsActiveFaq] = useState(2);
  return <section className="faq-one">
            <div className="faq-one__shape-1"></div>
            <div className="faq-one__shape-2"></div>

            <div className="container">
                <div className="row">
                    {/* Left Side */}
                    <div className="col-xl-6 col-lg-5">
                        <div className="faq-one__left">
                            <div className="section-title text-left sec-title-animation animation-style2">
                                <div className="section-title__tagline-box">
                                    <div className="section-title__tagline-shape">
<img src="/icon/motorbike.png" alt="shape" />
</div>
                                    <span className="section-title__tagline">Our Faqs</span>
                                </div>
                                <h2 className="section-title__title title-animation">
                                    Frequently Asked Questions

                                </h2>
                            </div>

                            <div className="faq-one__img-box">
                                <div className="faq-one__img" style={{ width: '100%', paddingRight: '20px' }}>
                                    <img src="/all-veichle-banner-for-faq.png" alt="FAQ" style={{ width: '100%', borderRadius: 'var(--gorent-bdr-radius)' }} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="col-xl-6 col-lg-7">
                        <div className="faq-one__right">
                            <div className="accrodion-grp faq-one-accrodion">
                                {faqData.map(item => <div key={item.id} className={`accrodion wow  ${isActiveFaq === item.id ? "active" : ""}`}>
                                        <div className="accrodion-title" onClick={() => setIsActiveFaq(item?.id)}>
                                            <h4>{item.question}</h4>
                                        </div>
                                        <div className="accrodion-content" style={{
                  display: `${isActiveFaq === item.id ? "block" : "none"}`
                }}>
                                            <div className="inner">
                                                <p>{item.answer}</p>
                                            </div>
                                        </div>
                                    </div>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>;
};
export default FaqOne;