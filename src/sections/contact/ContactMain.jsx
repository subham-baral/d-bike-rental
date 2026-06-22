"use client";

import React, { useState, useEffect } from 'react';

const ContactMain = () => {
  const [formConfig, setFormConfig] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    const fetchFormConfig = async () => {
      try {
        const token = process.env.NEXT_PUBLIC_CMS_API_TOKEN;
        const res = await fetch('https://cmsapi.one9ty.com/api/v1/forms/5', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json'
          }
        });
        const json = await res.json();
        if (json && json.id) {
          setFormConfig(json);
        }
      } catch (err) {
        console.error("Error fetching form config", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchFormConfig();
  }, []);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    if (!formConfig) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    const contactData = {};
    formConfig.fields.forEach(field => {
      const el = form.elements.namedItem(field.key);
      if (el) {
        contactData[field.key] = el.value;
      }
    });

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_CMS_API_URL}/public/forms/${formConfig.slug}/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactData),
      });

      if (res.ok) {
         setSubmitStatus('success');
         form.reset();
      } else {
         setSubmitStatus('error');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="contact-info">
          <div className="container">
              <div className="row">
                  {/*Contact Two Single Start*/}
                  <div className="col-xl-4 col-lg-4">
                      <div className="contact-info__single">
                          <div className="contact-info__icon">
                              <span className="icon-call-2"></span>
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
                              <span className="icon-envelope-2"></span>
                          </div>
                          <p>Mail Us</p>
                          <h3><a href="mailto:dbikerental1@gmail.com">dbikerental1@gmail.com</a></h3>
                      </div>
                  </div>
                  {/*Contact Two Single End*/}
                  {/*Contact Two Single Start*/}
                  <div className="col-xl-4 col-lg-4">
                      <div className="contact-info__single">
                          <div className="contact-info__icon">
                              <span className="icon-pin-2"></span>
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
                              <h3 className="contact-page__form-title">
                                {formConfig?.name || "Get A Free Quote"}
                              </h3>
                              {isLoading ? (
                                <p>Loading form...</p>
                              ) : formConfig ? (
                                <form onSubmit={handleContactSubmit} id="contact-form" className="contact-form-validated contact-page__form">
                                    <div className="row">
                                        {formConfig.fields.map(field => {
                                            const isTextarea = field.field?.ui_component === 'textarea';
                                            const colClass = field.width === "100" || isTextarea ? "col-xl-12" : "col-xl-6 col-lg-6 col-md-6";
                                            return (
                                              <div className={colClass} key={field.id}>
                                                  <div className={`contact-page__input-box ${isTextarea ? 'text-message-box' : ''}`}>
                                                      {isTextarea ? (
                                                          <textarea name={field.key} placeholder={field.label} required={field.is_required === 1}></textarea>
                                                      ) : (
                                                          <input 
                                                            type={field.field?.field_type || "text"} 
                                                            name={field.key} 
                                                            placeholder={field.label} 
                                                            required={field.is_required === 1} 
                                                          />
                                                      )}
                                                  </div>
                                              </div>
                                            );
                                        })}
                                        
                                        <div className="col-xl-12">
                                            <div className="contact-page__btn-box">
                                                <button type="submit" className="thm-btn contact-page__btn" disabled={isSubmitting}>
                                                    <span className="thm-btn-text">
                                                      {isSubmitting ? "Sending..." : formConfig.settings?.submit_button_text || "Send A Message"}
                                                    </span>
                                                    <span className="thm-btn-icon-box">
                                                        {isSubmitting ? (
                                                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" style={{ width: '1em', height: '1em' }}></span>
                                                        ) : (
                                                            <i className="fas fa-arrow-right"></i>
                                                        )}
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                        {submitStatus === 'success' && (
                                            <div className="col-xl-12 mt-4">
                                                <div className="alert alert-success" style={{ backgroundColor: '#e8f5e9', color: '#2e7d32', border: '1px solid #c8e6c9', borderRadius: '8px' }}>
                                                    Your message has been sent successfully! We will get back to you soon.
                                                </div>
                                            </div>
                                        )}
                                        {submitStatus === 'error' && (
                                            <div className="col-xl-12 mt-4">
                                                <div className="alert alert-danger" style={{ backgroundColor: '#ffebee', color: '#c62828', border: '1px solid #ffcdd2', borderRadius: '8px' }}>
                                                    Failed to send message. Please try again.
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </form>
                              ) : (
                                <p>Failed to load form data.</p>
                              )}
                              <p className="ajax-response mb-0"></p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
};
export default ContactMain;