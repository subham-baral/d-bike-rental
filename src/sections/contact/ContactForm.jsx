"use client";

import React, { useState } from 'react';

const ContactForm = ({ formConfig }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    if (!formConfig) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    const contactData = {};
    formConfig.fields?.forEach(field => {
      const el = form.elements.namedItem(field.key);
      if (el) {
        contactData[field.key] = el.value;
      }
    });

    try {
      const baseUrl = process.env.NEXT_PUBLIC_CMS_API_URL || 'https://cmsapi.one9ty.com/api/v1';
      const res = await fetch(`${baseUrl}/public/forms/5/${formConfig.slug}/submit`, {
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

  if (!formConfig) {
    return <p>Failed to load form data.</p>;
  }

  return (
    <form onSubmit={handleContactSubmit} id="contact-form" className="contact-form-validated contact-page__form">
        <div className="row">
            {formConfig.fields?.map(field => {
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
  );
};

export default ContactForm;
