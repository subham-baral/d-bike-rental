"use client";

import React from 'react';
const ContactMain = () => {
  const handleContactSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const contactData = {
      name: form.elements.namedItem('name').value,
      email: form.elements.namedItem('email').value,
      number: form.elements.namedItem('number').value,
      subject: form.elements.namedItem('subject').value,
      message: form.elements.namedItem('message').value
    };
    console.log('Contact Data:', contactData);
    if (!contactData.name || !contactData.email) {
      return;
    }

    // 🔗 API call here
    // await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(contactData),
    // });

    form.reset();
  };
  return <>
            <section className="contact-info">
                <div className="container">
                    <div className="row">
                        {/*Contact Two Single Start*/}
                        <div className="col-xl-4 col-lg-4">
                            <div className="contact-info__single">
                                <div className="contact-info__icon">
                                    <span className="icon-call"></span>
                                </div>
                                <p>Contact Us</p>
                                <h3><a href="tel:+918112003520">+91 81120 03520</a></h3>
                            </div>
                        </div>
                        {/*Contact Two Single End*/}
                        {/*Contact Two Single Start*/}
                        <div className="col-xl-4 col-lg-4">
                            <div className="contact-info__single">
                                <div className="contact-info__icon">
                                    <span className="icon-email"></span>
                                </div>
                                <p>Mail Us</p>
                                <h3><a href="mailto:dbikerental@gmail.com">dbikerental@gmail.com</a></h3>
                            </div>
                        </div>
                        {/*Contact Two Single End*/}
                        {/*Contact Two Single Start*/}
                        <div className="col-xl-4 col-lg-4">
                            <div className="contact-info__single">
                                <div className="contact-info__icon">
                                    <span className="icon-location"></span>
                                </div>
                                <p>Our Office Location</p>
                                <h3>Gopal Ballabh Rd, near Shakuntala Palace, Puri</h3>
                            </div>
                        </div>
                        {/*Contact Two Single End*/}
                    </div>
                </div>
            </section>
            {/*Contact Info End*/}

            {/*Contact Page Start*/}
            <section className="contact-page">
                <div className="container">
                    <div className="contact-page__inner">
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="contact-page__left">
                                    <iframe src="https://maps.google.com/maps?q=Gopal%20Ballabh%20Rd,%20near%20Shakuntala%20Palace,%20Puri,%20Odisha%20752001&t=&z=15&ie=UTF8&iwloc=&output=embed" className="google-map__one"></iframe>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="contact-page__right">
                                    <h3 className="contact-page__form-title">Get A Free Quote</h3>
                                    <form onSubmit={handleContactSubmit} id="contact-form" className="contact-form-validated contact-page__form">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="contact-page__input-box">
                                                    <input type="text" name="name" placeholder="Your name" required />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="contact-page__input-box">
                                                    <input type="email" name="email" placeholder="Your Email" required />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="contact-page__input-box">
                                                    <input type="text" placeholder="Mobile" name="number" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="contact-page__input-box">
                                                    <input type="text" placeholder="Subject" name="subject" />
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="contact-page__input-box text-message-box">
                                                    <textarea name="message" placeholder="Messege"></textarea>
                                                </div>
                                                <div className="contact-page__btn-box">
                                                    <button type="submit" className="thm-btn contact-page__btn" data-loading-text="Please wait...">
                                                        <span className="thm-btn-text">Send A Message</span>
                                                        <span className="thm-btn-icon-box"><i className="fas fa-arrow-right"></i></span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <p className="ajax-response mb-0"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>;
};
export default ContactMain;